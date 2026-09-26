import { useState, useCallback, useRef, useEffect } from 'react';
import { 
  Upload, FileImage, FileText, Sparkles, Trash2, Play, Check, 
  RotateCcw, Download, LayoutGrid, Eye, ArrowRight, RefreshCw, FileQuestion,
  Presentation, FileCode, ChevronDown, Loader2
} from "lucide-react";
import { exportToPptx, exportToPdf } from '../lib/exportServices';
import { TemplateMiniRenderer } from './TemplateMiniRenderer';
import {
  saveUserAsset,
  loadUserAssets,
  deleteUserAsset,
  getCurrentUserId,
  uploadToSupabaseStorageIfConfigured
} from '../lib/assetStorage';
import { 
  classifyDocumentType, 
  generateContentAwareRedesign, 
  extractDocxText,
  type RedesignCategory 
} from '../lib/aiRedesignEngine';
import { fitAIRedesignToCanonicalCanvas } from '../lib/coordinateNormalizer';

interface Asset {
  id: string;
  name: string;
  size: string;
  type: 'image' | 'text' | 'pdf' | 'other';
  previewUrl?: string;
  content?: string;
  pdfPages?: string[];
  uploadedAt: string;
  isDemo?: boolean;
  fileBlob?: Blob;
  storagePath?: string;
}

interface AssetUploaderProps {
  onOpenInEditor: (design: { name: string; size: string; elements: any[]; slides?: any[][] }) => void;
}

// Dynamically load PDF.js from CDN
const loadPdfJS = async () => {
  if ((window as any).pdfjsLib) return (window as any).pdfjsLib;
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
    script.onload = () => {
      const pdfjsLib = (window as any).pdfjsLib;
      pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
      resolve(pdfjsLib);
    };
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

const extractPdfPages = async (file: File | Blob): Promise<string[]> => {
  try {
    const pdfjsLib = await loadPdfJS();
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    const numPages = pdf.numPages;
    const pagesText: string[] = [];
    
    for (let i = 1; i <= numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const items = textContent.items as any[];
      
      // Group items into lines based on Y coordinate (within a small threshold, e.g. 5 units)
      const linesMap: { y: number; items: any[] }[] = [];
      
      items.forEach(item => {
        if (!item.str || item.str.trim() === '') return;
        
        const y = item.transform[5];
        const x = item.transform[4];
        
        let line = linesMap.find(l => Math.abs(l.y - y) < 5);
        if (!line) {
          line = { y, items: [] };
          linesMap.push(line);
        }
        line.items.push({ x, str: item.str });
      });
      
      // Sort lines by Y descending (top of page first)
      linesMap.sort((a, b) => b.y - a.y);
      
      const pageLines: string[] = [];
      for (let idx = 0; idx < linesMap.length; idx++) {
        const line = linesMap[idx];
        line.items.sort((a, b) => a.x - b.x);
        
        let lineText = '';
        line.items.forEach(item => {
          if (lineText !== '') {
            if (!lineText.endsWith(' ') && !item.str.startsWith(' ')) {
              lineText += ' ';
            }
          }
          lineText += item.str;
        });
        
        const trimmed = lineText.trim();
        if (!trimmed) continue;
        
        if (pageLines.length > 0) {
          const lastLine = pageLines[pageLines.length - 1];
          const gap = linesMap[idx - 1].y - line.y;
          
          const endsWithPunctuation = lastLine.endsWith('.') || lastLine.endsWith('?') || lastLine.endsWith(':') || lastLine.endsWith('!');
          const startsWithHeadingOrPattern = /^\d+\./.test(trimmed) || trimmed.startsWith('Example') || trimmed.startsWith('✦') || trimmed.startsWith('-');
          
          if (gap > 28 || (gap > 18 && (endsWithPunctuation || startsWithHeadingOrPattern))) {
            if (gap > 28) {
              pageLines.push('');
            }
            pageLines.push(trimmed);
          } else {
            pageLines[pageLines.length - 1] = lastLine + ' ' + trimmed;
          }
        } else {
          pageLines.push(trimmed);
        }
      }
      
      pagesText.push(pageLines.join('\n'));
    }
    return pagesText;
  } catch (err) {
    console.warn("PDF extraction fallback:", err);
    return ["[Page 1: PDF Document Content]"];
  }
};

const DEMO_ASSETS: Asset[] = [
  {
    id: 'demo-1',
    name: 'rough_logo_sketch.png',
    size: '142 KB',
    type: 'image',
    previewUrl: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=300',
    uploadedAt: 'Pre-loaded',
    isDemo: true
  },
  {
    id: 'demo-2',
    name: 'outdated_event_flyer.txt',
    size: '1.2 KB',
    type: 'text',
    content: "SUMMER FESTIVAL 2026\nJoin us for music, food & drinks.\nDate: July 18, 2026\nVenue: Central Park Meadows\nTime: 2:00 PM - 10:00 PM\nTickets: $25 pre-sale / $35 at door\nHeadliners: Sunset Syndicate, Neon Dreams, Velvet Vibe.",
    uploadedAt: 'Pre-loaded',
    isDemo: true
  },
  {
    id: 'demo-3',
    name: 'draft_business_card.png',
    size: '89 KB',
    type: 'image',
    previewUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=300',
    uploadedAt: 'Pre-loaded',
    isDemo: true
  }
];

export function AssetUploader({ onOpenInEditor }: AssetUploaderProps) {
  const [assets, setAssets] = useState<Asset[]>(DEMO_ASSETS);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [userId, setUserId] = useState<string>('guest');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const isUploadingRef = useRef(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Redesign state
  const [stylePreset, setStylePreset] = useState('modern');
  const [outputFormat, setOutputFormat] = useState('presentation');
  const [variantIndex, setVariantIndex] = useState(0);
  const [detectedCategory, setDetectedCategory] = useState<RedesignCategory>('presentation');
  const [refinementPrompt, setRefinementPrompt] = useState('');
  const [redesigning, setRedesigning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [progressText, setProgressText] = useState('');
  const [result, setResult] = useState<{
    name: string;
    size: string;
    elements: any[];
    slides?: any[][];
    previewUrl?: string;
    layoutFamily?: string;
    variantIndex?: number;
    category?: RedesignCategory;
  } | null>(null);

  const [showDlDropdown, setShowDlDropdown] = useState(false);
  const dlRef = useRef<HTMLDivElement>(null);

  // Load persistent user assets on mount
  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const uid = await getCurrentUserId();
        if (isMounted) setUserId(uid);
        const stored = await loadUserAssets(uid);
        if (isMounted && stored.length > 0) {
          const loadedAssets: Asset[] = stored.map(s => ({
            id: s.id,
            name: s.name,
            size: s.size,
            type: s.type,
            previewUrl: s.previewUrl,
            content: s.content,
            pdfPages: s.pdfPages,
            uploadedAt: s.uploadedAt,
            isDemo: false,
            fileBlob: s.fileBlob,
            storagePath: s.storagePath
          }));
          setAssets([...loadedAssets, ...DEMO_ASSETS]);
        }
      } catch (err) {
        console.warn('Unable to load stored assets:', err);
      }
    })();
    return () => { isMounted = false; };
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dlRef.current && !dlRef.current.contains(e.target as Node)) {
        setShowDlDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const selectedAsset = assets.find(a => a.id === selectedId) || null;

  // Auto-classify document whenever user selects an asset
  useEffect(() => {
    if (selectedAsset) {
      const cls = classifyDocumentType(selectedAsset.name, selectedAsset.content);
      setDetectedCategory(cls.category);
      setOutputFormat(cls.category);
      setVariantIndex(0);
    }
  }, [selectedAsset?.id]);

  // File Uploader logic
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (!isUploading) setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (!isUploading && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFiles(e.dataTransfer.files);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFiles(e.target.files);
    }
  };

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const processFiles = async (fileList: FileList) => {
    if (isUploadingRef.current) return;
    isUploadingRef.current = true;
    setIsUploading(true);
    setUploadError(null);

    const files = Array.from(fileList);
    try {
      for (const file of files) {
        // Size validation: max 10MB
        if (file.size > 10 * 1024 * 1024) {
          setUploadError(`"${file.name}" exceeds the maximum allowed size of 10MB.`);
          continue;
        }

        const isImage = file.type.startsWith('image/') || /\.(png|jpe?g|svg|webp|gif)$/i.test(file.name);
        const isText = file.type.startsWith('text/') || /\.(txt|md|csv|json)$/i.test(file.name);
        const isPdf = file.type === 'application/pdf' || /\.pdf$/i.test(file.name);
        const isDocx = /\.docx?$/i.test(file.name) || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        const assetType: Asset['type'] = isImage ? 'image' : isText ? 'text' : isPdf ? 'pdf' : isDocx ? 'text' : 'other';

        const assetId = 'user-' + Date.now() + '-' + Math.random().toString(36).substring(2, 8);
        const uploadTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        // Direct browser -> Supabase Storage upload attempt
        let remote: { path?: string; publicUrl?: string } | null = null;
        try {
          remote = await uploadToSupabaseStorageIfConfigured(file, userId);
        } catch {
          // Fallback to local persistent storage
        }

        let previewUrl: string | undefined = remote?.publicUrl;
        if (!previewUrl && isImage) {
          try {
            previewUrl = URL.createObjectURL(file);
          } catch {}
        }
        // For PDFs: create a blob URL from the ACTUAL binary bytes (not extracted text)
        // This is used for direct preview so PDF viewer receives real PDF data
        if (!previewUrl && isPdf) {
          try {
            const pdfBinaryBlob = new Blob([file], { type: 'application/pdf' });
            previewUrl = URL.createObjectURL(pdfBinaryBlob);
          } catch {}
        }

        let textContent: string | undefined;
        let pdfPages: string[] | undefined;
        if (isText) {
          try {
            textContent = await file.text();
          } catch {}
        } else if (isDocx) {
          try {
            const arrayBuffer = await file.arrayBuffer();
            textContent = await extractDocxText(arrayBuffer);
          } catch (err) {
            console.warn('DOCX parse note:', err);
          }
        } else if (isPdf) {
          try {
            pdfPages = await extractPdfPages(file);
            if (pdfPages && pdfPages.length > 0) {
              textContent = pdfPages.join('\n\n--- Page Break ---\n\n');
            }
          } catch {}
        }

        const newAsset: Asset = {
          id: assetId,
          name: file.name,
          size: formatSize(file.size),
          type: assetType,
          previewUrl,
          content: textContent,
          pdfPages,
          uploadedAt: uploadTime,
          isDemo: false,
          fileBlob: file,
          storagePath: remote?.path
        };

        // Persist immediately to user-scoped persistent storage
        await saveUserAsset({
          id: newAsset.id,
          userId,
          name: newAsset.name,
          size: newAsset.size,
          type: newAsset.type,
          previewUrl: newAsset.previewUrl,
          content: newAsset.content,
          uploadedAt: newAsset.uploadedAt,
          timestamp: Date.now(),
          fileBlob: file,
          storagePath: remote?.path
        });

        // Immediately show in UI & select
        setAssets(prev => [newAsset, ...prev]);
        setSelectedId(newAsset.id);
      }
    } catch (err: any) {
      console.error("Upload error:", err);
      setUploadError(err.message || "Failed to upload asset. Please try again.");
    } finally {
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      isUploadingRef.current = false;
      setIsUploading(false);
    }
  };

  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const assetToDelete = assets.find(a => a.id === id);
    if (assetToDelete?.previewUrl && assetToDelete.previewUrl.startsWith('blob:')) {
      try {
        URL.revokeObjectURL(assetToDelete.previewUrl);
      } catch {}
    }
    setAssets(prev => prev.filter(a => a.id !== id));
    if (selectedId === id) {
      setSelectedId(null);
      setResult(null);
    }
    await deleteUserAsset(id, userId);
  };

  // AI Redesign generation logic
  const handleRedesign = async (overrideVariant?: number) => {
    if (!selectedAsset) return;
    const currentVariant = typeof overrideVariant === 'number' ? overrideVariant : variantIndex;
    setRedesigning(true);
    setProgress(0);

    // On-demand deferred PDF extraction (upload was fast; extract only when user requests redesign)
    if (selectedAsset.type === 'pdf' && (!selectedAsset.pdfPages || selectedAsset.pdfPages.length === 0)) {
      if (selectedAsset.fileBlob) {
        try {
          setProgressText('Extracting typography and outline geometry...');
          const pages = await extractPdfPages(selectedAsset.fileBlob);
          selectedAsset.pdfPages = pages;
          selectedAsset.content = pages.join('\n\n--- Page Break ---\n\n');
          setAssets(prev => prev.map(a => a.id === selectedAsset.id ? { ...a, pdfPages: pages, content: selectedAsset.content } : a));
          saveUserAsset({
            id: selectedAsset.id,
            userId,
            name: selectedAsset.name,
            size: selectedAsset.size,
            type: selectedAsset.type,
            previewUrl: selectedAsset.previewUrl,
            content: selectedAsset.content,
            pdfPages: pages,
            uploadedAt: selectedAsset.uploadedAt,
            timestamp: Date.now(),
            fileBlob: selectedAsset.fileBlob,
            storagePath: selectedAsset.storagePath
          });
        } catch (e) {
          console.warn("Deferred PDF parse note:", e);
        }
      }
    }

    const steps = [
      { p: 25, t: 'Classifying document domain & content semantics...' },
      { p: 55, t: 'Selecting bespoke composition family & structural grid...' },
      { p: 85, t: 'Applying typography pairing, seals & vector layers...' },
      { p: 100, t: 'Polishing high-fidelity canvas layout...' }
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setProgress(steps[currentStep].p);
        setProgressText(steps[currentStep].t);
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          const generated = generateContentAwareRedesign(
            selectedAsset.name,
            selectedAsset.content,
            currentVariant,
            stylePreset,
            outputFormat as RedesignCategory
          );

          // CRITICAL: Immediately fit the AI redesign composition to fill the canvas (92% coverage, centered)
          const fitted = fitAIRedesignToCanonicalCanvas({
            ...generated,
            isAIRedesign: true
          });

          setResult({
            name: fitted.name,
            size: fitted.size,
            elements: fitted.elements,
            slides: fitted.slides,
            layoutFamily: fitted.layoutFamily,
            variantIndex: currentVariant,
            category: fitted.category
          });
          setRedesigning(false);
        }, 400);
      }
    }, 250);
  };

  // Render and download the redesigned layout as PNG or JPG
  const handleDownload = (format: 'png' | 'jpg') => {
    if (!result) return;
    
    // Create temporary canvas
    const canvas = document.createElement('canvas');
    const parts = result.size.replace(/x/gi, '×').split('×').map(Number);
    const w = parts[0] || 1080;
    const h = parts[1] || 1080;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Draw background
    ctx.fillStyle = result.elements[0]?.fill || '#0f172a';
    ctx.fillRect(0, 0, w, h);
    
    // Draw elements
    result.elements.forEach(el => {
      if (el.id === 'bg') return;
      ctx.save();
      ctx.globalAlpha = el.opacity ?? 1;
      
      // Coordinates are already in true canvas units
      const ex = el.x;
      const ey = el.y;
      const ew = el.width;
      const eh = el.height;
      
      if (el.type === 'rect') {
        ctx.fillStyle = el.fill;
        ctx.fillRect(ex, ey, ew, eh);
      } else if (el.type === 'circle') {
        ctx.beginPath();
        ctx.ellipse(ex + ew/2, ey + eh/2, ew/2, eh/2, 0, 0, Math.PI * 2);
        ctx.fillStyle = el.fill;
        ctx.fill();
      } else if (el.type === 'text') {
        const fsz = (el.fontSize ?? 12) * scaleX;
        ctx.font = `${el.fontWeight || 'normal'} ${fsz}px ${el.fontFamily || 'sans-serif'}`;
        ctx.fillStyle = el.fill;
        ctx.textBaseline = 'top';
        
        // Wrap text
        const paragraphs = (el.text || '').split('\n');
        const lines: string[] = [];
        const maxWidth = ew - 8;
        
        paragraphs.forEach((para: string) => {
          const words = para.split(' ');
          let currentLine = '';
          words.forEach((word: string) => {
            const testLine = currentLine ? `${currentLine} ${word}` : word;
            const metrics = ctx.measureText(testLine);
            if (metrics.width > maxWidth && currentLine) {
              lines.push(currentLine);
              currentLine = word;
            } else {
              currentLine = testLine;
            }
          });
          if (currentLine) lines.push(currentLine);
        });
        
        const lineH = fsz * 1.3;
        lines.forEach((line: string, li: number) => {
          ctx.fillText(line, ex + 4, ey + 4 + li * lineH);
        });
      } else if (el.type === 'star') {
        ctx.fillStyle = el.fill;
        ctx.font = `${ew}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('✦', ex + ew/2, ey + eh/2);
      }
      ctx.restore();
    });
    
    // Trigger download
    const mime = format === 'png' ? 'image/png' : 'image/jpeg';
    const quality = format === 'jpg' ? 0.9 : undefined;
    const url = canvas.toDataURL(mime, quality);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${result.name}.${format}`;
    a.click();
    setShowDlDropdown(false);
  };



  const handleExportPdf = async () => {
    if (!result) return;
    setShowDlDropdown(false);
    const toastId = toast.loading('Preparing multi-page PDF document...');
    try {
      const parts = result.size.replace(/x/gi, '×').split('×').map(Number);
      const w = parts[0] || 1080;
      const h = parts[1] || 1080;
      await exportToPdf({
        slides: result.slides || [result.elements],
        templateName: result.name || 'Document',
        canvasWidth: w,
        canvasHeight: h,
        backgroundColor: result.elements?.[0]?.fill || '#0f172a',
        onProgress: (_prog, msg) => {
          toast.loading(msg, { id: toastId });
        }
      });
      toast.success('PDF document downloaded successfully!', { id: toastId });
    } catch (err: any) {
      console.error('Failed to export PDF:', err);
      toast.error('Failed to export PDF: ' + (err?.message || 'Unknown error'), { id: toastId });
    }
  };

  const handleExportPptx = async () => {
    if (!result) return;
    setShowDlDropdown(false);
    const toastId = toast.loading('Preparing PPTX export with embedded images...');
    try {
      const is1920 = result.size?.includes('1920');
      const cW = is1920 ? 1920 : 1080;
      const cH = is1920 ? 1080 : 1080;
      await exportToPptx({
        slides: result.slides || [result.elements],
        templateName: result.name || 'Presentation',
        canvasWidth: cW,
        canvasHeight: cH,
        backgroundColor: result.slides?.[0]?.[0]?.fill || '#0f172a',
        onProgress: (_prog, msg) => {
          toast.loading(msg, { id: toastId });
        }
      });
      toast.success('PowerPoint presentation (.pptx) downloaded with embedded images!', { id: toastId });
    } catch (err: any) {
      console.error('Failed to export PPTX:', err);
      toast.error('Failed to export PPTX: ' + (err?.message || 'Unknown error'), { id: toastId });
    }
  };

  const handleEditManually = () => {
    if (!selectedAsset) return;
    
    let size = '1920×1080';
    let cW = 1920;
    let cH = 1080;
    
    if (outputFormat === 'presentation') {
      size = '1920×1080';
      cW = 1920;
      cH = 1080;
    } else if (outputFormat === 'card') {
      size = '1050×600';
      cW = 1050;
      cH = 600;
    } else if (outputFormat === 'poster') {
      size = '1080×1528';
      cW = 1080;
      cH = 1528;
    } else if (outputFormat === 'resume') {
      size = '1200×1697';
      cW = 1200;
      cH = 1697;
    } else if (outputFormat === 'flyer') {
      size = '1200×1697';
      cW = 1200;
      cH = 1697;
    } else if (outputFormat === 'invitation') {
      size = '1400×2000';
      cW = 1400;
      cH = 2000;
    } else if (outputFormat === 'report') {
      size = '1200×1697';
      cW = 1200;
      cH = 1697;
    } else if (outputFormat === 'business') {
      size = '1200×1697';
      cW = 1200;
      cH = 1697;
    } else if (outputFormat === 'square') {
      size = '1080×1080';
      cW = 1080;
      cH = 1080;
    }

    const elements: any[] = [
      { id: 'bg', type: 'rect', x: 0, y: 0, width: cW, height: cH, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true }
    ];

    if (selectedAsset.type === 'image' && selectedAsset.previewUrl) {
      elements.push({
        id: 'user-img',
        type: 'image',
        x: 20,
        y: 20,
        width: cW - 40,
        height: cH - 40,
        src: selectedAsset.previewUrl,
        rotation: 0,
        fill: 'transparent',
        stroke: 'transparent',
        strokeWidth: 0,
        opacity: 1,
        visible: true,
        locked: false
      });
      elements.push({
        id: 'starter-text',
        type: 'text',
        x: 40,
        y: cH - 80,
        width: cW - 80,
        height: 40,
        rotation: 0,
        fill: '#000000',
        text: 'Tap to add custom text overlays & stickers',
        fontSize: 16,
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontStyle: 'normal',
        textDecoration: 'none',
        opacity: 0.8,
        visible: true,
        locked: false
      });
    } else if (selectedAsset.type === 'text') {
      elements.push({
        id: 'text-card',
        type: 'rect',
        x: 30,
        y: 30,
        width: cW - 60,
        height: cH - 60,
        rotation: 0,
        fill: '#f8fafc',
        stroke: '#cbd5e1',
        strokeWidth: 1.5,
        opacity: 1,
        visible: true,
        locked: false
      });
      elements.push({
        id: 'user-text',
        type: 'text',
        x: 50,
        y: 50,
        width: cW - 100,
        height: cH - 100,
        rotation: 0,
        fill: '#0f172a',
        text: selectedAsset.content || 'Draft text content',
        fontSize: 14,
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontStyle: 'normal',
        textDecoration: 'none',
        opacity: 1,
        visible: true,
        locked: false
      });
    } else if (selectedAsset.type === 'pdf' && selectedAsset.pdfPages && selectedAsset.pdfPages.length > 0) {
      const slides: any[][] = selectedAsset.pdfPages.map((pageText, pageIdx) => {
        const pageElements = [
          // Background for this page
          { id: `pdf-bg-${pageIdx}`, type: 'rect', x: 0, y: 0, width: cW, height: cH, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
          // Header / Page number
          {
            id: `pdf-header-${pageIdx}`,
            type: 'text',
            x: 40,
            y: 30,
            width: cW - 80,
            height: 20,
            rotation: 0,
            fill: '#6b7280',
            text: `${selectedAsset.name.toUpperCase()} — Page ${pageIdx + 1} of ${selectedAsset.pdfPages!.length}`,
            fontSize: 10,
            fontFamily: 'Inter',
            fontWeight: 'bold',
            fontStyle: 'normal',
            textDecoration: 'none',
            opacity: 0.7,
            visible: true,
            locked: true
          },
          // Page text content
          {
            id: `pdf-text-${pageIdx}`,
            type: 'text',
            x: 40,
            y: 70,
            width: cW - 80,
            height: cH - 110,
            rotation: 0,
            fill: '#1e293b',
            text: pageText || `[Page ${pageIdx + 1} is empty]`,
            fontSize: 12,
            fontFamily: 'Inter',
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            opacity: 1,
            visible: true,
            locked: false
          }
        ];
        return pageElements;
      });

      onOpenInEditor({
        name: `Edit_${selectedAsset.name.replace(/\.[^/.]+$/, '')}`,
        size: size,
        elements: slides[0],
        slides: slides
      });
      return;
    } else {
      elements.push({
        id: 'doc-title',
        type: 'text',
        x: 40,
        y: 80,
        width: cW - 80,
        height: 40,
        rotation: 0,
        fill: '#1e1b4b',
        text: selectedAsset.name,
        fontSize: 18,
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontStyle: 'normal',
        textDecoration: 'none',
        opacity: 1,
        visible: true,
        locked: false
      });
    }

    onOpenInEditor({
      name: `Edit_${selectedAsset.name.replace(/\.[^/.]+$/, '')}`,
      size: size,
      elements: elements
    });
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto py-2">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
            <Sparkles size={20} />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">Asset Uploader & AI Redesigner</h1>
            <p className="text-xs text-white/50">Upload raw assets, sketch images, or text drafts and watch the AI redesign them into professional, editable canvas layouts.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: Upload & List (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6 bg-[#111118] border border-white/[0.06] rounded-2xl p-5">
          <h2 className="text-[13.5px] font-bold text-white/70 uppercase tracking-wider">Source Assets</h2>

          {/* Drag & Drop Zone */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => {
              if (!isUploading) fileInputRef.current?.click();
            }}
            className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all ${
              dragOver
                ? 'border-purple-500 bg-purple-500/[0.04]'
                : 'border-white/[0.08] hover:border-purple-500/50 hover:bg-white/[0.01]'
            } ${isUploading ? 'opacity-70 pointer-events-none' : ''}`}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileSelect}
              multiple
              accept="image/*,.txt,.md,.pdf,.docx"
              disabled={isUploading}
              className="hidden"
            />
            <div className="w-12 h-12 rounded-full bg-white/[0.03] flex items-center justify-center text-white/60 border border-white/5">
              {isUploading ? <Loader2 size={20} className="animate-spin text-purple-400" /> : <Upload size={20} />}
            </div>
            <div className="text-center">
              <span className="text-[12.5px] font-bold text-white/80 block">
                {isUploading ? 'Uploading file...' : 'Drag & drop your files here'}
              </span>
              <span className="text-[10px] text-white/40 mt-1 block">Supports PNG, JPG, SVG, TXT, or PDF (Max 10MB)</span>
            </div>
          </div>

          {/* Upload Error Banner if any */}
          {uploadError && (
            <div className="px-3.5 py-2.5 rounded-xl bg-red-500/10 border border-red-500/25 text-red-300 text-xs flex items-center justify-between animate-in fade-in duration-200">
              <span>{uploadError}</span>
              <button 
                onClick={() => setUploadError(null)} 
                className="text-red-400 hover:text-red-200 text-xs font-bold px-1.5 py-0.5 rounded cursor-pointer"
              >
                ✕
              </button>
            </div>
          )}

          {/* Uploaded List */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[11.5px] font-bold text-white/40 uppercase tracking-wider">Your Files ({assets.length})</h3>
            <div className="flex flex-col gap-2 max-h-[280px] overflow-y-auto pr-1">
              {assets.map((asset) => (
                <div
                  key={asset.id}
                  onClick={() => { 
                    setSelectedId(asset.id); 
                    setResult(null);
                    // Open preview in new tab: images and PDFs
                    // For PDFs: use previewUrl which points to actual binary blob, not text content
                    if ((asset.type === 'image' || asset.type === 'pdf') && asset.previewUrl) {
                      window.open(asset.previewUrl, '_blank', 'noopener,noreferrer');
                    }
                  }}
                  className={`flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer ${
                    selectedId === asset.id
                      ? 'bg-purple-500/10 border-purple-500/40 shadow-sm'
                      : 'bg-white/[0.02] border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.08]'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 border ${
                      selectedId === asset.id ? 'bg-purple-500/15 border-purple-500/20 text-purple-400' : 'bg-white/[0.03] border-white/[0.06] text-white/50'
                    }`}>
                      {asset.type === 'image' ? <FileImage size={18} /> : <FileText size={18} />}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[12px] font-bold text-white/90 truncate leading-snug">{asset.name}</span>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[9px] text-white/40 font-semibold">{asset.size}</span>
                        <span className="text-[9px] text-white/20">•</span>
                        <span className="text-[9px] text-white/40 font-semibold">{asset.uploadedAt}</span>
                        {asset.isDemo && (
                          <>
                            <span className="text-[9px] text-white/20">•</span>
                            <span className="text-[8.5px] text-purple-400 font-bold bg-purple-500/10 px-1.5 py-0.5 rounded-full border border-purple-500/10">SAMPLE</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={(e) => handleDelete(asset.id, e)}
                    className="p-1.5 rounded-lg text-white/30 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                    title="Remove Asset"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: AI Redesign Panel (5 cols) */}
        <div className="lg:col-span-5 flex flex-col bg-[#111118] border border-white/[0.06] rounded-2xl p-5 min-h-[460px] relative overflow-hidden">
          {redesigning ? (
            /* Redesign Loading State */
            <div className="flex flex-col items-center justify-center flex-1 py-10 gap-5">
              <div className="relative">
                {/* Circular Loader */}
                <div className="w-16 h-16 rounded-full border-2 border-purple-500/20 border-t-purple-500 animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center text-purple-400">
                  <Sparkles size={20} className="animate-pulse" />
                </div>
              </div>
              <div className="text-center flex flex-col gap-1.5 px-6 max-w-sm">
                <span className="text-[11px] font-bold text-purple-400 uppercase tracking-widest animate-pulse">AI Engine Processing</span>
                <span className="text-[13px] font-bold text-white/95">{progressText}</span>
                {/* Progress bar */}
                <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden mt-3 border border-white/[0.04]">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          ) : result ? (
            /* Redesign Result Comparison */
            <div className="flex flex-col gap-5 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-bold text-white/70 uppercase tracking-wider">Redesign Completed</span>
                <span className="text-[10px] text-green-400 font-bold bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20 flex items-center gap-1">
                  <Check size={10} /> Optimized
                </span>
              </div>

              {/* Before/After visual switcher or side panel */}
              <div className="flex flex-col gap-4">
                {/* Visual Preview Box */}
                {(() => {
                  const dims = (result.size || '1920×1080').replace(/x/gi, '×').split('×').map(Number);
                  const pW = dims[0] || 1920;
                  const pH = dims[1] || 1080;
                  const isLand = pW >= pH;
                  return (
                    <div className="border border-white/[0.08] rounded-xl overflow-hidden bg-[#07080e] relative flex items-center justify-center p-3 select-none h-[280px]">
                      <div 
                        className="relative rounded-lg shadow-2xl overflow-hidden border border-white/[0.08] flex items-center justify-center"
                        style={{
                          aspectRatio: `${pW} / ${pH}`,
                          width: isLand ? '100%' : 'auto',
                          height: !isLand ? '100%' : 'auto',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          background: result.elements[0]?.fill || '#0f172a',
                        }}
                      >
                        <TemplateMiniRenderer 
                          template={{
                            canvasWidth: pW,
                            canvasHeight: pH,
                            gradient: result.elements[0]?.fill || '#0f172a',
                            elements: result.elements,
                            slides: result.slides || [result.elements]
                          }} 
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                  );
                })()}

                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-bold text-white/90">{result.name}</span>
                    {result.layoutFamily && (
                      <span className="text-[10px] text-purple-300 font-mono px-2 py-0.5 rounded bg-purple-500/15 border border-purple-500/30">
                        {result.layoutFamily}
                      </span>
                    )}
                  </div>
                  <span className="text-[9.5px] text-white/40 font-semibold uppercase tracking-wider">{result.size} · Canvas Layout</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2.5 mt-auto">
                <button
                  onClick={() => {
                    const sizeStr = String(result.size || '1920×1080').replace(/x/gi, '×');
                    const sizeParts = sizeStr.split('×').map(Number);
                    const cW = sizeParts[0] || 1920;
                    const cH = sizeParts[1] || 1080;
                    const payload: any = {
                      name: result.name,
                      size: result.size,
                      elements: result.elements,
                      slides: result.slides,
                      canvasWidth: cW,
                      canvasHeight: cH,
                      isAIRedesign: true
                    };
                    // Ensure the composition is fitted before opening in editor
                    const fitted = fitAIRedesignToCanonicalCanvas(payload);
                    onOpenInEditor(fitted);
                  }}
                  className="w-full h-11 rounded-xl bg-purple-500 hover:bg-purple-600 active:bg-purple-700 text-white font-bold text-[13px] flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-md shadow-purple-500/10"
                >
                  <Eye size={15} /> Open in Canvas Editor
                </button>
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative flex" ref={dlRef}>
                    <button
                      onClick={() => handleDownload('png')}
                      className="h-10 flex-1 rounded-l-xl bg-white/[0.04] border border-white/[0.08] border-r-0 hover:bg-white/[0.08] text-white/80 hover:text-white font-semibold text-[12px] flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                    >
                      <Download size={13} /> Export
                    </button>
                    <button
                      onClick={() => setShowDlDropdown(!showDlDropdown)}
                      className="h-10 px-2 rounded-r-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] text-white/80 hover:text-white cursor-pointer transition-colors flex items-center justify-center"
                    >
                      <ChevronDown size={12} />
                    </button>
                    {showDlDropdown && (
                      <div className="absolute bottom-11 left-0 w-[170px] bg-[#1a1a26]/95 backdrop-blur-md border border-white/[0.08] rounded-xl p-1.5 z-50 shadow-2xl flex flex-col gap-1">
                        <button
                          onClick={() => handleDownload('png')}
                          className="w-full text-left px-3 py-2 text-[12px] text-white/80 hover:text-white hover:bg-white/[0.06] rounded-lg flex items-center gap-2 cursor-pointer transition-colors"
                        >
                          <FileImage size={13} className="text-blue-400" />
                          Download PNG
                        </button>
                        <button
                          onClick={() => handleDownload('jpg')}
                          className="w-full text-left px-3 py-2 text-[12px] text-white/80 hover:text-white hover:bg-white/[0.06] rounded-lg flex items-center gap-2 cursor-pointer transition-colors"
                        >
                          <FileImage size={13} className="text-emerald-400" />
                          Download JPG
                        </button>
                        <button
                          onClick={handleExportPdf}
                          className="w-full text-left px-3 py-2 text-[12px] text-white/80 hover:text-white hover:bg-white/[0.06] rounded-lg flex items-center gap-2 cursor-pointer transition-colors"
                        >
                          <FileText size={13} className="text-red-400" />
                          Download PDF
                        </button>
                        <button
                          onClick={handleExportPptx}
                          className="w-full text-left px-3 py-2 text-[12px] text-white/80 hover:text-white hover:bg-white/[0.06] rounded-lg flex items-center gap-2 cursor-pointer transition-colors"
                        >
                          <Presentation size={13} className="text-pink-400" />
                          Download PPTX
                        </button>

                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => {
                      const nextVar = (variantIndex + 1) % 4;
                      setVariantIndex(nextVar);
                      handleRedesign(nextVar);
                    }}
                    className="h-10 rounded-xl bg-purple-600/20 border border-purple-500/40 hover:bg-purple-600/30 text-purple-200 hover:text-white font-semibold text-[12px] flex items-center justify-center gap-1.5 cursor-pointer transition-colors shadow-sm"
                    title="Generate a completely different layout composition family"
                  >
                    <RotateCcw size={13} /> Redesign Again
                  </button>
                </div>
                <button
                  onClick={() => setResult(null)}
                  className="text-center text-[11px] text-white/40 hover:text-white/80 py-1 transition-colors cursor-pointer"
                >
                  ← Adjust Redesign Settings
                </button>
              </div>
            </div>
          ) : selectedAsset ? (
            /* Selected Asset Settings */
            <div className="flex flex-col gap-5 flex-1">
              <span className="text-[13px] font-bold text-white/70 uppercase tracking-wider">AI Redesign Settings</span>
              
              {/* Thumbnail / Preview Area */}
              <div className="border border-white/[0.06] rounded-xl p-3 bg-white/[0.01] flex items-center gap-3">
                {selectedAsset.type === 'image' && selectedAsset.previewUrl ? (
                  <img
                    src={selectedAsset.previewUrl}
                    alt="Asset preview"
                    className="w-14 h-14 object-cover rounded-lg border border-white/[0.08] flex-shrink-0"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/50 flex-shrink-0">
                    <FileText size={22} />
                  </div>
                )}
                <div className="flex flex-col min-w-0">
                  <span className="text-[12px] font-bold text-white truncate">{selectedAsset.name}</span>
                  <span className="text-[9.5px] text-white/40 mt-0.5">{selectedAsset.size} · {selectedAsset.type.toUpperCase()} file</span>
                </div>
              </div>

              {/* Selector Fields */}
              <div className="flex flex-col gap-4">
                {/* 1. Style preset */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10.5px] font-bold text-white/40 uppercase tracking-wider">Redesign Style Preset</label>
                  <select 
                    value={stylePreset}
                    onChange={(e) => setStylePreset(e.target.value)}
                    className="w-full h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] px-3 text-[12.5px] font-medium text-white/80 outline-none hover:bg-white/[0.06] focus:border-purple-500/40 transition-colors"
                  >
                    <option value="modern" className="bg-[#161622] text-white/90">Modern Premium (Slate & Purple)</option>
                    <option value="gold" className="bg-[#161622] text-white/90">Gold Luxury (Black & Gold)</option>
                    <option value="neon" className="bg-[#161622] text-white/90">Neon Cyberpunk (Violet & Pink)</option>
                    <option value="clean" className="bg-[#161622] text-white/90">Organic Clean (Slate & Teal)</option>
                    <option value="pastel" className="bg-[#161622] text-white/90">Pastel Creative (Lilac & Pink)</option>
                  </select>
                </div>

                {/* 2. Output format */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-[10.5px] font-bold text-white/40 uppercase tracking-wider">Output Canvas Layout</label>
                    {detectedCategory && (
                      <span className="text-[9.5px] text-emerald-400 font-mono font-semibold">
                        ✦ Auto: {detectedCategory.replace('_', ' ').toUpperCase()}
                      </span>
                    )}
                  </div>
                  <select 
                    value={outputFormat}
                    onChange={(e) => setOutputFormat(e.target.value)}
                    className="w-full h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] px-3 text-[12.5px] font-medium text-white/80 outline-none hover:bg-white/[0.06] focus:border-purple-500/40 transition-colors"
                  >
                    <option value="certificate" className="bg-[#161622] text-white/90">Professional Certificate & Credential (1920×1080)</option>
                    <option value="consent_letter" className="bg-[#161622] text-white/90">Formal Institutional Consent Letter (1200×1697 · A4)</option>
                    <option value="presentation" className="bg-[#161622] text-white/90">Presentation Slide (1920×1080 · 16:9)</option>
                    <option value="resume" className="bg-[#161622] text-white/90">Professional ATS Resume (1200×1697 · A4)</option>
                    <option value="poster" className="bg-[#161622] text-white/90">A3 Exhibition Poster (1080×1528)</option>
                    <option value="flyer" className="bg-[#161622] text-white/90">Promotional Event Flyer (1200×1697 · A4)</option>
                    <option value="business_card" className="bg-[#161622] text-white/90">Executive Business Card (1050×600)</option>
                    <option value="report" className="bg-[#161622] text-white/90">Executive Corporate Report (1200×1697 · A4)</option>
                  </select>
                </div>

                {/* 3. Text Prompt Details */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10.5px] font-bold text-white/40 uppercase tracking-wider">AI Instructions (Optional)</label>
                  <input
                    type="text"
                    value={refinementPrompt}
                    onChange={(e) => setRefinementPrompt(e.target.value)}
                    placeholder="e.g. make the titles larger, keep design minimal"
                    className="w-full h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] px-3.5 text-[12.5px] font-medium text-white/80 placeholder-white/20 outline-none hover:bg-white/[0.06] focus:border-purple-500/40 transition-colors"
                  />
                </div>

                {/* Text Draft Editor */}
                {selectedAsset.type === 'text' && (
                  <div className="flex flex-col gap-1.5 animate-in fade-in-50 duration-200">
                    <label className="text-[10.5px] font-bold text-white/40 uppercase tracking-wider">Draft Text Content</label>
                    <textarea
                      value={selectedAsset.content || ''}
                      onChange={(e) => {
                        const val = e.target.value;
                        setAssets(prev => prev.map(a => a.id === selectedAsset.id ? { ...a, content: val } : a));
                      }}
                      rows={5}
                      className="w-full rounded-xl bg-white/[0.04] border border-white/[0.08] p-3 text-[12.5px] font-medium text-white/80 placeholder-white/20 outline-none hover:bg-white/[0.06] focus:border-purple-500/40 transition-colors resize-none font-mono"
                      placeholder="Type or edit your layout draft content here..."
                    />
                  </div>
                )}
              </div>

              {/* Action */}
              <div className="flex flex-col gap-2 mt-auto">
                <button
                  onClick={handleRedesign}
                  className="w-full h-11 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 active:from-purple-700 active:to-indigo-700 text-white font-bold text-[13px] flex items-center justify-center gap-2 mt-auto cursor-pointer transition-colors shadow-lg shadow-purple-500/10"
                >
                  <Sparkles size={14} className="animate-pulse" /> Run AI Redesign
                </button>
                <button
                  onClick={handleEditManually}
                  className="w-full h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.12] text-white/90 hover:text-white font-semibold text-[12px] flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                >
                  <LayoutGrid size={13} /> Edit Manually (Open Canvas)
                </button>
              </div>
            </div>
          ) : (
            /* Empty State */
            <div className="flex flex-col items-center justify-center flex-1 py-10 gap-4 text-center select-none">
              <div className="w-14 h-14 rounded-full bg-white/[0.02] border border-white/[0.06] flex items-center justify-center text-white/30">
                <LayoutGrid size={22} />
              </div>
              <div className="max-w-[240px] flex flex-col gap-1">
                <span className="text-[12.5px] font-bold text-white/80">Select an asset</span>
                <span className="text-[10.5px] text-white/40">Pick a source file on the left to configure your AI redesign setup.</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
