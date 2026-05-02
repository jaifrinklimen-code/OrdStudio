import { useEffect, useRef } from 'react';

const WORDS = [
  // Content types
  'Essay', 'Article', 'Blog Post', 'Story', 'Script', 'Poem',
  'Pitch', 'Proposal', 'Summary', 'Report', 'Newsletter', 'Caption',
  'Headline', 'Tagline', 'Memoir', 'Lyrics', 'Abstract', 'Brief',
  // Actions
  'Generate', 'Create', 'Compose', 'Draft', 'Craft', 'Publish',
  'Write', 'Edit', 'Refine', 'Build', 'Transform', 'Automate',
  'Imagine', 'Produce', 'Ideate', 'Brainstorm', 'Outline',
  // Qualities
  'Professional', 'Creative', 'Academic', 'Engaging', 'Persuasive',
  'Concise', 'Vivid', 'Structured', 'Authentic', 'Impactful',
  // Domains
  'SEO', 'Marketing', 'Brand', 'Voice', 'Tone', 'Style', 'Copy',
  'Social', 'Content', 'Chapter', 'Thesis', 'Paragraph', 'Research',
];

// Color palettes per tier
const PALETTES = {
  0: { lead: [255, 255, 255], trail: [190, 148, 255], glow: 'rgba(200,160,255,0.95)', glowBlur: 22 },
  1: { lead: [180, 220, 255], trail: [120, 160, 240], glow: 'rgba(150,200,255,0.70)', glowBlur: 14 },
  2: { lead: [140, 110, 220], trail: [90, 70, 170],   glow: 'rgba(140,110,220,0.45)', glowBlur: 8  },
} as const;

type Tier = 0 | 1 | 2;

interface Col {
  x: number;
  headY: number;
  speed: number;
  lineH: number;
  fontSize: number;
  trailLen: number;
  words: string[];
  tier: Tier;
  palette: typeof PALETTES[Tier];
  cursorOn: boolean;
  cursorTimer: number;
}

const rand = (a: number, b: number) => Math.random() * (b - a) + a;
const pickWord = () => WORDS[Math.floor(Math.random() * WORDS.length)];
const pickWords = (n: number) => Array.from({ length: n }, pickWord);

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf: number;
    let cols: Col[] = [];
    let frame = 0;

    const build = (W: number, H: number) => {
      cols = [];
      const count = Math.max(10, Math.floor(W / 100));
      const colW = W / count;
      for (let c = 0; c < count; c++) {
        const r = Math.random();
        const tier: Tier = r < 0.28 ? 0 : r < 0.60 ? 1 : 2;
        const fontSize = tier === 0 ? 13 : tier === 1 ? 12 : 11;
        const lineH = fontSize + 11;
        const trailLen = tier === 0 ? 22 : tier === 1 ? 14 : 8;
        const speed = tier === 0 ? rand(0.60, 1.0) : tier === 1 ? rand(0.32, 0.62) : rand(0.14, 0.32);
        const headY = rand(trailLen * lineH * 0.25, H);
        cols.push({
          x: (c + 0.5) * colW + rand(-20, 20),
          headY,
          speed,
          lineH,
          fontSize,
          trailLen,
          words: pickWords(trailLen + 4),
          tier,
          palette: PALETTES[tier],
          cursorOn: true,
          cursorTimer: Math.floor(rand(0, 40)),
        });
      }
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      build(canvas.width, canvas.height);
    };

    const draw = () => {
      frame++;
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // --- Background ---
      // Deep indigo base (matches site theme)
      ctx.fillStyle = '#07071a';
      ctx.fillRect(0, 0, W, H);

      // Rich ambient glow blobs — purple, blue, violet
      const glowBlobs = [
        { x: W * 0.15, y: H * 0.40, r: W * 0.42, cr: '110,50,220', ca: 0.18 },
        { x: W * 0.85, y: H * 0.60, r: W * 0.42, cr: '40,80,210',  ca: 0.14 },
        { x: W * 0.50, y: H * 0.50, r: W * 0.36, cr: '140,60,200', ca: 0.12 },
        { x: W * 0.30, y: H * 0.80, r: W * 0.28, cr: '80,130,255', ca: 0.08 },
        { x: W * 0.70, y: H * 0.20, r: W * 0.28, cr: '160,80,240', ca: 0.09 },
      ];
      for (const b of glowBlobs) {
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0,   `rgba(${b.cr},${b.ca})`);
        g.addColorStop(0.5, `rgba(${b.cr},${b.ca * 0.4})`);
        g.addColorStop(1,   'rgba(0,0,0,0)');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
      }

      // --- Columns ---
      for (const col of cols) {
        col.headY += col.speed;

        // Blink cursor every 28 frames for bright columns
        if (col.tier === 0) {
          col.cursorTimer++;
          if (col.cursorTimer >= 28) { col.cursorOn = !col.cursorOn; col.cursorTimer = 0; }
        }

        // Reset when full trail has scrolled off bottom
        if (col.headY - col.lineH * col.trailLen > H + col.lineH) {
          col.headY = -col.lineH * 2;
          col.words = pickWords(col.trailLen + 4);
        }

        ctx.font = `300 ${col.fontSize}px Inter, sans-serif`;
        ctx.textBaseline = 'top';

        const { lead, trail, glow, glowBlur } = col.palette;

        for (let i = 0; i < col.trailLen; i++) {
          const wy = col.headY - i * col.lineH;
          if (wy < -col.lineH || wy > H + col.lineH) continue;

          const t = i / (col.trailLen - 1);
          let alpha: number;
          if (col.tier === 0)      alpha = i === 0 ? 0.98 : Math.pow(1 - t, 2.8) * 0.72;
          else if (col.tier === 1) alpha = i === 0 ? 0.60 : Math.pow(1 - t, 2.4) * 0.38;
          else                     alpha = i === 0 ? 0.22 : Math.pow(1 - t, 2.2) * 0.14;
          if (alpha < 0.015) continue;

          const word = col.words[i % col.words.length];

          if (i === 0) {
            // Leading word — bright with glow
            ctx.shadowColor = glow;
            ctx.shadowBlur = glowBlur;
            ctx.fillStyle = `rgba(${lead[0]},${lead[1]},${lead[2]},${alpha})`;
            ctx.fillText(word, col.x, wy);

            // Blinking cursor block (bright columns only)
            if (col.tier === 0 && col.cursorOn) {
              const tw = ctx.measureText(word).width;
              ctx.shadowColor = glow;
              ctx.shadowBlur = 18;
              ctx.fillStyle = `rgba(220,180,255,0.9)`;
              ctx.fillRect(col.x + tw + 2, wy + 1, 2, col.fontSize - 2);
            }
            ctx.shadowBlur = 0;
          } else {
            // Trail — color fades toward dim
            const blend = t;
            const r2 = Math.round(lead[0] + (trail[0] - lead[0]) * blend);
            const g2 = Math.round(lead[1] + (trail[1] - lead[1]) * blend);
            const b2 = Math.round(lead[2] + (trail[2] - lead[2]) * blend);
            ctx.fillStyle = `rgba(${r2},${g2},${b2},${alpha})`;
            ctx.fillText(word, col.x, wy);
          }
        }
        ctx.shadowBlur = 0;
      }

      // --- Fade masks ---
      // Top
      const topM = ctx.createLinearGradient(0, 0, 0, 100);
      topM.addColorStop(0, 'rgba(7,7,26,1)');
      topM.addColorStop(1, 'rgba(7,7,26,0)');
      ctx.fillStyle = topM;
      ctx.fillRect(0, 0, W, 100);

      // Bottom
      const botM = ctx.createLinearGradient(0, H - 220, 0, H);
      botM.addColorStop(0, 'rgba(7,7,26,0)');
      botM.addColorStop(1, 'rgba(7,7,26,1)');
      ctx.fillStyle = botM;
      ctx.fillRect(0, H - 220, W, 220);

      // Left edge subtle vignette
      const leftM = ctx.createLinearGradient(0, 0, 60, 0);
      leftM.addColorStop(0, 'rgba(7,7,26,0.6)');
      leftM.addColorStop(1, 'rgba(7,7,26,0)');
      ctx.fillStyle = leftM;
      ctx.fillRect(0, 0, 60, H);

      // Right edge subtle vignette
      const rightM = ctx.createLinearGradient(W - 60, 0, W, 0);
      rightM.addColorStop(0, 'rgba(7,7,26,0)');
      rightM.addColorStop(1, 'rgba(7,7,26,0.6)');
      ctx.fillStyle = rightM;
      ctx.fillRect(W - 60, 0, 60, H);

      raf = requestAnimationFrame(draw);
    };

    const ro = new ResizeObserver(resize);
    resize();
    draw();
    ro.observe(canvas);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute', top: 0, left: 0,
        width: '100%', height: '100%',
        zIndex: 0, display: 'block',
      }}
    />
  );
}
