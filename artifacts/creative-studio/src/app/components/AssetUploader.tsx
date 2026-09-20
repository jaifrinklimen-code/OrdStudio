import { useState, useCallback, useRef, useEffect } from 'react';
import { 
  Upload, FileImage, FileText, Sparkles, Trash2, Play, Check, 
  RotateCcw, Download, LayoutGrid, Eye, ArrowRight, RefreshCw, FileQuestion,
  Presentation, FileCode, ChevronDown
} from "lucide-react";
import { exportToPptx, exportToPdf } from '../lib/exportServices';

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

const extractPdfPages = async (file: File): Promise<string[]> => {
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
      
      // Find an existing line that has a Y coordinate within 5 units of this item
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
      
      // Join items in the same line with a space
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
            pageLines.push(''); // blank line spacing
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
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Redesign state
  const [stylePreset, setStylePreset] = useState('modern');
  const [outputFormat, setOutputFormat] = useState('presentation');
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
  } | null>(null);

  const [showDlDropdown, setShowDlDropdown] = useState(false);
  const dlRef = useRef<HTMLDivElement>(null);

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

  // File Uploader logic
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFiles(e.dataTransfer.files);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFiles(e.target.files);
    }
  };

  const processFiles = (fileList: FileList) => {
    Array.from(fileList).forEach(file => {
      const isImage = file.type.startsWith('image/');
      const isText = file.type.startsWith('text/') || file.name.endsWith('.txt');
      const isPdf = file.type === 'application/pdf';
      
      const newAsset: Asset = {
        id: 'user-' + Math.random().toString(36).substring(2, 9),
        name: file.name,
        size: formatSize(file.size),
        type: isImage ? 'image' : isText ? 'text' : isPdf ? 'pdf' : 'other',
        uploadedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      if (isImage) {
        const reader = new FileReader();
        reader.onload = (e) => {
          newAsset.previewUrl = e.target?.result as string;
          setAssets(prev => [newAsset, ...prev]);
        };
        reader.readAsDataURL(file);
      } else if (isText) {
        const reader = new FileReader();
        reader.onload = (e) => {
          newAsset.content = e.target?.result as string;
          setAssets(prev => [newAsset, ...prev]);
        };
        reader.readAsText(file);
      } else if (isPdf) {
        extractPdfPages(file).then(pages => {
          newAsset.pdfPages = pages;
          newAsset.content = pages.join('\n\n--- Page Break ---\n\n');
          setAssets(prev => [newAsset, ...prev]);
        }).catch(err => {
          console.error("Failed to parse PDF:", err);
          newAsset.content = "Failed to parse PDF pages.";
          setAssets(prev => [newAsset, ...prev]);
        });
      } else {
        setAssets(prev => [newAsset, ...prev]);
      }
    });
  };

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setAssets(prev => prev.filter(a => a.id !== id));
    if (selectedId === id) {
      setSelectedId(null);
      setResult(null);
    }
  };

  // AI Redesign generation logic
  const handleRedesign = () => {
    if (!selectedAsset) return;
    setRedesigning(true);
    setProgress(0);
    setResult(null);

    const steps = [
      { p: 15, t: 'Scanning layout elements and asset geometry...' },
      { p: 35, t: 'Extracting key typography hierarchy and draft outlines...' },
      { p: 60, t: 'Applying chosen color palette, vectors, and font pairings...' },
      { p: 85, t: 'Structuring professional layers and canvas components...' },
      { p: 100, t: 'Polishing premium layout & generating output preview...' }
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
          generateRedesignOutput();
          setRedesigning(false);
        }, 600);
      }
    }, 800);
  };

  const generateRedesignOutput = () => {
    if (!selectedAsset) return;

    // Canvas sizes based on format selection
    let size = '1080×1080';
    let cW = 440;
    let cH = 440;
    if (outputFormat === 'presentation') {
      size = '1920×1080';
      cW = 780;
      cH = 439;
    } else if (outputFormat === 'poster') {
      size = '1240×1748';
      cW = 397;
      cH = 560;
    } else if (outputFormat === 'card') {
      size = '1050×600';
      cW = 600;
      cH = 340;
    }

    // Dynamic coloring based on style preset
    let bgFill = '#0f172a';
    let brandColor = '#8b5cf6';
    let titleColor = '#ffffff';
    let bodyColor = '#94a3b8';
    let accentRectColor = '#3b82f6';
    let fontName = 'Inter';

    if (stylePreset === 'gold') {
      bgFill = '#0a0a0d';
      brandColor = '#fbbf24';
      titleColor = '#ffffff';
      bodyColor = '#a1a1aa';
      accentRectColor = '#ca8a04';
      fontName = 'Syne';
    } else if (stylePreset === 'neon') {
      bgFill = '#0d0d14';
      brandColor = '#f43f5e';
      titleColor = '#ffffff';
      bodyColor = '#c084fc';
      accentRectColor = '#d946ef';
      fontName = 'Impact';
    } else if (stylePreset === 'clean') {
      bgFill = '#f8fafc';
      brandColor = '#0f766e';
      titleColor = '#0f172a';
      bodyColor = '#475569';
      accentRectColor = '#14b8a6';
      fontName = 'Georgia';
    } else if (stylePreset === 'pastel') {
      bgFill = '#faf5ff';
      brandColor = '#d946ef';
      titleColor = '#581c87';
      bodyColor = '#6b21a8';
      accentRectColor = '#c084fc';
      fontName = 'Syne';
    }

    const uid = () => Math.random().toString(36).slice(2, 10);
    const elements: any[] = [
      { id: 'bg', type: 'rect', x: 0, y: 0, width: cW, height: cH, rotation: 0, fill: bgFill, stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true }
    ];

    // Check for multi-page PDF!
    if (selectedAsset.type === 'pdf' && selectedAsset.pdfPages && selectedAsset.pdfPages.length > 0) {
      const titleVal = selectedAsset.name.replace(/\.[^/.]+$/, "").replace(/[_-]/g, " ").toUpperCase();
      const slides: any[][] = [];
      
      // 1. Generate Slide 1 (Cover Page)
      const coverEls: any[] = [
        { id: 'bg-0', type: 'rect', x: 0, y: 0, width: cW, height: cH, rotation: 0, fill: bgFill, stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
        { id: 'glow-0', type: 'circle', x: cW / 2 - 150, y: cH / 2 - 150, width: 300, height: 300, fill: `${brandColor}15`, opacity: 0.8, visible: true, locked: true },
        { id: 'accent-rect-0', type: 'rect', x: 50, y: cH / 2 - 60, width: 4, height: 120, fill: brandColor, opacity: 1, visible: true, locked: true },
        { id: 'title-0', type: 'text', x: 70, y: cH / 2 - 50, width: cW - 140, height: 50, fill: titleColor, text: titleVal, fontSize: 26, fontFamily: fontName, fontWeight: 'bold', fontStyle: 'normal', textDecoration: 'none', opacity: 1, visible: true, locked: false },
        { id: 'desc-0', type: 'text', x: 70, y: cH / 2 + 10, width: cW - 140, height: 40, fill: bodyColor, text: `AI Redesigned Multi-page Document (${selectedAsset.pdfPages.length} Pages)`, fontSize: 13, fontFamily: 'Inter', fontWeight: 'normal', fontStyle: 'italic', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
        { id: 'logo-text-0', type: 'text', x: 50, y: 40, width: 200, height: 20, fill: brandColor, text: '✦ NEXUS GLOBAL', fontSize: 12, fontFamily: 'Inter', fontWeight: 'bold', fontStyle: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false }
      ];
      slides.push(coverEls);

      // 2. Generate Slides for each content page
      selectedAsset.pdfPages.forEach((pageText, idx) => {
        const slideIdx = idx + 1;
        const pageEls: any[] = [
          { id: `bg-${slideIdx}`, type: 'rect', x: 0, y: 0, width: cW, height: cH, rotation: 0, fill: bgFill, stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
          { id: `header-line-${slideIdx}`, type: 'rect', x: 50, y: 65, width: cW - 100, height: 1, fill: `${brandColor}30`, stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
          // Running Header
          { id: `header-lbl-${slideIdx}`, type: 'text', x: 50, y: 40, width: cW - 100, height: 20, fill: brandColor, text: `${titleVal} — PAGE ${slideIdx}`, fontSize: 10, fontFamily: 'Inter', fontWeight: 'bold', fontStyle: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
          // Page Content Text
          { id: `content-${slideIdx}`, type: 'text', x: 50, y: 85, width: cW - 100, height: cH - 140, fill: titleColor, text: pageText || `[Page ${slideIdx} Content]`, fontSize: 11, fontFamily: fontName, fontWeight: 'normal', fontStyle: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
          // Footer / Page number
          { id: `footer-lbl-${slideIdx}`, type: 'text', x: 50, y: cH - 40, width: cW - 100, height: 20, fill: bodyColor, text: `AI Redesigner v2.6 · Page ${slideIdx + 1} of ${selectedAsset.pdfPages!.length + 1}`, fontSize: 9, fontFamily: 'Inter', fontWeight: 'normal', fontStyle: 'normal', textDecoration: 'none', opacity: 0.5, visible: true, locked: true }
        ];
        slides.push(pageEls);
      });

      setResult({
        name: `AI_Redesign_${selectedAsset.name.replace(/\.[^/.]+$/, '')}`,
        size: size,
        elements: slides[0],
        slides: slides
      });
      return;
    }

    // Build template based on user content/mock
    const titleVal = selectedAsset.id === 'demo-1' 
      ? 'APEX CREATIVE' 
      : selectedAsset.id === 'demo-2' 
      ? 'SUMMER SOLSTICE' 
      : selectedAsset.id === 'demo-3' 
      ? 'CARTER CONSULTING' 
      : selectedAsset.name.replace(/\.[^/.]+$/, "").replace(/[_-]/g, " ").toUpperCase();

    const descVal = selectedAsset.id === 'demo-2'
      ? 'July 18, 2026 · Central Park Meadows · Live Electronic & Pop Music'
      : 'Redesigned branding vector asset & dynamic layout structure.';

    if (outputFormat === 'presentation') {
      // Presentation cover style elements
      elements.push({
        id: 'glow', type: 'circle', x: cW / 2 - 150, y: cH / 2 - 150, width: 300, height: 300, fill: `${brandColor}15`, opacity: 0.8, visible: true, locked: true
      });
      elements.push({
        id: 'accent-rect', type: 'rect', x: 50, y: cH / 2 - 60, width: 4, height: 120, fill: brandColor, opacity: 1, visible: true, locked: true
      });
      elements.push({
        id: 'title', type: 'text', x: 70, y: cH / 2 - 50, width: 600, height: 50, fill: titleColor, text: titleVal, fontSize: 36, fontFamily: fontName, fontWeight: 'bold', fontStyle: 'normal', textDecoration: 'none', opacity: 1, visible: true, locked: false
      });
      elements.push({
        id: 'desc', type: 'text', x: 70, y: cH / 2 + 10, width: 600, height: 40, fill: bodyColor, text: descVal, fontSize: 13, fontFamily: 'Inter', fontWeight: 'normal', fontStyle: 'italic', textDecoration: 'none', opacity: 0.9, visible: true, locked: false
      });
      elements.push({
        id: 'logo-text', type: 'text', x: 50, y: 40, width: 200, height: 20, fill: brandColor, text: '✦ NEXUS GLOBAL', fontSize: 12, fontFamily: 'Inter', fontWeight: 'bold', fontStyle: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false
      });
      elements.push({
        id: 'date-badge', type: 'text', x: 50, y: cH - 50, width: 300, height: 20, fill: bodyColor, text: 'EST. 2026 · CONFIDENTIAL DECK', fontSize: 10, fontFamily: 'Inter', fontWeight: 'bold', fontStyle: 'normal', textDecoration: 'none', opacity: 0.6, visible: true, locked: true
      });
      elements.push({
        id: 'star-1', type: 'star', x: cW - 100, y: 50, width: 24, height: 24, fill: brandColor, opacity: 0.4, visible: true, locked: false
      });
    } else if (outputFormat === 'poster') {
      // Poster format layout
      elements.push({
        id: 'border-1', type: 'rect', x: 15, y: 15, width: cW - 30, height: cH - 30, fill: 'transparent', stroke: brandColor, strokeWidth: 1.5, opacity: 0.5, visible: true, locked: true
      });
      elements.push({
        id: 'border-2', type: 'rect', x: 22, y: 22, width: cW - 44, height: cH - 44, fill: 'transparent', stroke: accentRectColor, strokeWidth: 1, opacity: 0.3, visible: true, locked: true
      });
      elements.push({
        id: 'top-lbl', type: 'text', x: 40, y: 50, width: cW - 80, height: 20, fill: brandColor, text: 'SPECIAL EDITION POSTER', fontSize: 10, fontFamily: 'Inter', fontWeight: 'bold', fontStyle: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false
      });
      elements.push({
        id: 'title', type: 'text', x: 40, y: 90, width: cW - 80, height: 75, fill: titleColor, text: titleVal, fontSize: 32, fontFamily: fontName, fontWeight: 'bold', fontStyle: 'normal', textDecoration: 'none', opacity: 1, visible: true, locked: false
      });
      elements.push({
        id: 'line', type: 'rect', x: 40, y: 180, width: 80, height: 3, fill: brandColor, opacity: 1, visible: true, locked: false
      });
      
      // If event flyer, render details
      if (selectedAsset.id === 'demo-2') {
        elements.push({
          id: 'event-details', type: 'text', x: 40, y: 210, width: cW - 80, height: 80, fill: titleColor, text: 'SATURDAY, JULY 18, 2026\nFROM 2:00 PM TILL LATE', fontSize: 13, fontFamily: 'Inter', fontWeight: 'bold', fontStyle: 'normal', textDecoration: 'none', opacity: 1, visible: true, locked: false
        });
        elements.push({
          id: 'venue-details', type: 'text', x: 40, y: 270, width: cW - 80, height: 50, fill: bodyColor, text: 'Central Park Meadows\nPre-sale $25 / Door $35', fontSize: 12, fontFamily: 'Inter', fontWeight: 'normal', fontStyle: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false
        });
        elements.push({
          id: 'headline-acts', type: 'text', x: 40, y: 340, width: cW - 80, height: 80, fill: brandColor, text: 'HEADLINING ACTS:\n✦ Sunset Syndicate\n✦ Neon Dreams\n✦ Velvet Vibe', fontSize: 14, fontFamily: fontName, fontWeight: 'bold', fontStyle: 'italic', textDecoration: 'none', opacity: 1, visible: true, locked: false
        });
      } else {
        elements.push({
          id: 'desc', type: 'text', x: 40, y: 210, width: cW - 80, height: 120, fill: bodyColor, text: 'This vector design concept was synthesized automatically using raw asset sketches. The typography layer, border highlights, and color palette have been fully optimized to match Canva professional standards. Every layer is fully editable inside the Design Studio canvas editor.', fontSize: 12, fontFamily: 'Inter', fontWeight: 'normal', fontStyle: 'normal', textDecoration: 'none', opacity: 0.85, visible: true, locked: false
        });
        elements.push({
          id: 'qr-placeholder', type: 'rect', x: 40, y: 370, width: 80, height: 80, fill: 'transparent', stroke: brandColor, strokeWidth: 1.5, opacity: 0.7, visible: true, locked: false
        });
        elements.push({
          id: 'qr-text', type: 'text', x: 135, y: 400, width: 220, height: 40, fill: bodyColor, text: 'SCAN TO EXPLORE LAYOUT\nwww.creative-studio.com', fontSize: 10, fontFamily: 'Inter', fontWeight: 'bold', fontStyle: 'normal', textDecoration: 'none', opacity: 0.6, visible: true, locked: false
        });
      }

      elements.push({
        id: 'flower', type: 'text', x: cW - 75, y: cH - 60, width: 35, height: 35, fill: brandColor, text: '✦', fontSize: 24, fontFamily: 'Arial', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false
      });
    } else if (outputFormat === 'card') {
      // Landscape business card layout
      elements.push({
        id: 'split', type: 'rect', x: 380, y: 0, width: 220, height: 340, fill: stylePreset === 'gold' ? '#141419' : 'rgba(255,255,255,0.03)', opacity: 1, visible: true, locked: true
      });
      elements.push({
        id: 'accent-strip', type: 'rect', x: 378, y: 0, width: 2, height: 340, fill: brandColor, opacity: 0.8, visible: true, locked: true
      });
      elements.push({
        id: 'title', type: 'text', x: 40, y: 70, width: 320, height: 30, fill: titleColor, text: titleVal, fontSize: 22, fontFamily: fontName, fontWeight: 'bold', fontStyle: 'normal', textDecoration: 'none', opacity: 1, visible: true, locked: false
      });
      elements.push({
        id: 'subtitle', type: 'text', x: 40, y: 105, width: 320, height: 20, fill: brandColor, text: 'CREATIVE DIRECTOR', fontSize: 11, fontFamily: 'Inter', fontWeight: 'bold', fontStyle: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false
      });
      elements.push({
        id: 'line', type: 'rect', x: 40, y: 135, width: 40, height: 2, fill: accentRectColor, opacity: 1, visible: true, locked: false
      });
      elements.push({
        id: 'contact-details', type: 'text', x: 40, y: 155, width: 320, height: 90, fill: bodyColor, text: '📧 contact@ordstudio.com\n📞 +1 (555) 0199\n🌐 www.ordstudio.com\n📍 San Francisco, CA', fontSize: 12, fontFamily: 'Inter', fontWeight: 'normal', fontStyle: 'normal', textDecoration: 'none', opacity: 0.85, visible: true, locked: false
      });
      
      elements.push({
        id: 'brand-mark', type: 'text', x: 430, y: 150, width: 120, height: 40, fill: brandColor, text: '✦\nORDSTUDIO', fontSize: 16, fontFamily: 'Syne', fontWeight: 'bold', fontStyle: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false
      });
    } else {
      // Instagram square format
      elements.push({
        id: 'glow', type: 'circle', x: 220, y: 220, width: 220, height: 220, fill: `${brandColor}12`, opacity: 0.8, visible: true, locked: true
      });
      elements.push({
        id: 'title', type: 'text', x: 30, y: 50, width: 380, height: 40, fill: titleColor, text: titleVal, fontSize: 26, fontFamily: fontName, fontWeight: 'bold', fontStyle: 'normal', textDecoration: 'none', opacity: 1, visible: true, locked: false
      });
      elements.push({
        id: 'desc', type: 'text', x: 30, y: 95, width: 380, height: 40, fill: brandColor, text: descVal, fontSize: 12, fontFamily: 'Inter', fontWeight: 'bold', fontStyle: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false
      });
      elements.push({
        id: 'accent-frame', type: 'rect', x: 30, y: 150, width: 380, height: 230, fill: 'transparent', stroke: brandColor, strokeWidth: 1.5, opacity: 0.5, visible: true, locked: false
      });
      elements.push({
        id: 'inner-badge', type: 'rect', x: 150, y: 345, width: 140, height: 30, fill: brandColor, opacity: 1, visible: true, locked: false
      });
      elements.push({
        id: 'inner-badge-text', type: 'text', x: 160, y: 350, width: 120, height: 20, fill: bgFill === '#f8fafc' ? '#ffffff' : '#ffffff', text: 'EXPLORE NOW', fontSize: 10, fontFamily: 'Inter', fontWeight: 'bold', fontStyle: 'normal', textDecoration: 'none', opacity: 1, visible: true, locked: false
      });
    }

    setResult({
      name: `AI_Redesign_${selectedAsset.name.replace(/\.[^/.]+$/, '')}`,
      size: size,
      elements: elements
    });
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
      
      // Scale coordinates from preview size (cW, cH) to actual design size (w, h)
      const previewW = result.size.includes('1920') ? 780 : 440;
      const previewH = result.size.includes('1920') ? 439 : 440;
      const scaleX = w / previewW;
      const scaleY = h / previewH;
      
      const ex = el.x * scaleX;
      const ey = el.y * scaleY;
      const ew = el.width * scaleX;
      const eh = el.height * scaleY;
      
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
    
    let size = '1080×1080';
    let cW = 440;
    let cH = 440;
    
    if (outputFormat === 'presentation') {
      size = '1920×1080';
      cW = 780;
      cH = 439;
    } else if (outputFormat === 'poster') {
      size = '1240×1748';
      cW = 397;
      cH = 560;
    } else if (outputFormat === 'card') {
      size = '1050×600';
      cW = 600;
      cH = 340;
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
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all ${
              dragOver
                ? 'border-purple-500 bg-purple-500/[0.04]'
                : 'border-white/[0.08] hover:border-purple-500/50 hover:bg-white/[0.01]'
            }`}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileSelect}
              multiple
              className="hidden"
            />
            <div className="w-12 h-12 rounded-full bg-white/[0.03] flex items-center justify-center text-white/60 border border-white/5">
              <Upload size={20} />
            </div>
            <div className="text-center">
              <span className="text-[12.5px] font-bold text-white/80 block">Drag & drop your files here</span>
              <span className="text-[10px] text-white/40 mt-1 block">Supports PNG, JPG, SVG, TXT, or PDF (Max 10MB)</span>
            </div>
          </div>

          {/* Uploaded List */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[11.5px] font-bold text-white/40 uppercase tracking-wider">Your Files ({assets.length})</h3>
            <div className="flex flex-col gap-2 max-h-[280px] overflow-y-auto pr-1">
              {assets.map((asset) => (
                <div
                  key={asset.id}
                  onClick={(e) => { 
                    setSelectedId(asset.id); 
                    setResult(null); 
                    if (asset.previewUrl) {
                      window.open(asset.previewUrl, '_blank');
                    } else if (asset.content) {
                      const blob = new Blob([asset.content], { type: asset.type === 'pdf' ? 'application/pdf' : 'text/plain' });
                      const url = URL.createObjectURL(blob);
                      window.open(url, '_blank');
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
                <div className="border border-white/[0.08] rounded-xl overflow-hidden bg-[#0d0d14] relative aspect-video flex items-center justify-center p-3 select-none">
                  {/* Generated Layout Mockup Box */}
                  <div 
                    className="w-full h-full rounded-lg shadow-2xl flex flex-col items-center justify-center relative overflow-hidden p-3 border border-white/[0.05]"
                    style={{
                      background: result.elements[0]?.fill || '#0f172a',
                    }}
                  >
                    {/* Background Circle elements if present */}
                    {result.elements.map((el, i) => {
                      if (el.id === 'bg') return null;
                      if (el.type === 'circle') {
                        return (
                          <div 
                            key={i} 
                            className="absolute rounded-full border" 
                            style={{ 
                              left: `${(el.x / (result.size.includes('1920') ? 780 : 440)) * 100}%`,
                              top: `${(el.y / 440) * 100}%`,
                              width: `${(el.width / 440) * 100}%`,
                              height: `${(el.height / 440) * 100}%`,
                              background: el.fill,
                              borderColor: el.stroke || 'transparent',
                              opacity: el.opacity ?? 0.6
                            }} 
                          />
                        );
                      }
                      if (el.type === 'rect') {
                        return (
                          <div 
                            key={i} 
                            className="absolute" 
                            style={{ 
                              left: `${(el.x / (result.size.includes('1920') ? 780 : 440)) * 100}%`,
                              top: `${(el.y / 440) * 100}%`,
                              width: `${(el.width / 440) * 100}%`,
                              height: `${(el.height / 440) * 100}%`,
                              background: el.fill,
                              borderColor: el.stroke || 'transparent',
                              borderWidth: el.strokeWidth || 0,
                              opacity: el.opacity ?? 1
                            }} 
                          />
                        );
                      }
                      if (el.type === 'text') {
                        return (
                          <div
                            key={i}
                            className="absolute font-semibold leading-tight text-left"
                            style={{
                              left: `${(el.x / (result.size.includes('1920') ? 780 : 440)) * 100}%`,
                              top: `${(el.y / 440) * 100}%`,
                              width: `${(el.width / (result.size.includes('1920') ? 780 : 440)) * 100}%`,
                              color: el.fill,
                              fontFamily: el.fontFamily || 'sans-serif',
                              fontSize: `${Math.max(el.fontSize ? (el.fontSize / (result.size.includes('1920') ? 780 : 440)) * 280 : 10, 8)}px`,
                              fontWeight: el.fontWeight || 'normal',
                              fontStyle: el.fontStyle || 'normal',
                              opacity: el.opacity ?? 1
                            }}
                          >
                            {el.text}
                          </div>
                        );
                      }
                      if (el.type === 'star') {
                        return (
                          <div
                            key={i}
                            className="absolute text-yellow-400 font-semibold"
                            style={{
                              left: `${(el.x / (result.size.includes('1920') ? 780 : 440)) * 100}%`,
                              top: `${(el.y / 440) * 100}%`,
                              fontSize: '18px'
                            }}
                          >
                            ✦
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[12px] font-bold text-white/90">{result.name}</span>
                  <span className="text-[9.5px] text-white/40 font-semibold uppercase tracking-wider">{result.size} · Canvas Layout</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2.5 mt-auto">
                <button
                  onClick={() => onOpenInEditor({ name: result.name, size: result.size, elements: result.elements, slides: result.slides })}
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
                    onClick={() => setResult(null)}
                    className="h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] text-white/80 hover:text-white font-semibold text-[12px] flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                  >
                    <RotateCcw size={13} /> Redesign Again
                  </button>
                </div>
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
                  <label className="text-[10.5px] font-bold text-white/40 uppercase tracking-wider">Output Canvas Layout</label>
                  <select 
                    value={outputFormat}
                    onChange={(e) => setOutputFormat(e.target.value)}
                    className="w-full h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] px-3 text-[12.5px] font-medium text-white/80 outline-none hover:bg-white/[0.06] focus:border-purple-500/40 transition-colors"
                  >
                    <option value="presentation" className="bg-[#161622] text-white/90">Presentation Slide (16:9)</option>
                    <option value="poster" className="bg-[#161622] text-white/90">A4 Poster (Print Size)</option>
                    <option value="card" className="bg-[#161622] text-white/90">Business Card (Landscape)</option>
                    <option value="square" className="bg-[#161622] text-white/90">Instagram Square (1:1)</option>
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
