import { useEffect, useRef } from 'react';

const WORDS = [
  'Essay', 'Article', 'Blog Post', 'Story', 'Script', 'Poem',
  'Pitch', 'Proposal', 'Summary', 'Report', 'Newsletter', 'Caption',
  'Headline', 'Tagline', 'Memoir', 'Lyrics', 'Abstract', 'Brief',
  'Generate', 'Create', 'Compose', 'Draft', 'Craft', 'Publish',
  'Write', 'Edit', 'Refine', 'Build', 'Transform', 'Automate',
  'Imagine', 'Produce', 'Ideate', 'Brainstorm', 'Outline',
  'Professional', 'Creative', 'Academic', 'Engaging', 'Persuasive',
  'Concise', 'Vivid', 'Structured', 'Authentic', 'Impactful',
  'SEO', 'Marketing', 'Brand', 'Voice', 'Tone', 'Style', 'Copy',
  'Social', 'Content', 'Chapter', 'Thesis', 'Paragraph', 'Research',
];

// Single violet palette — just brightness tiers
const TIERS = {
  0: { r: 200, g: 185, b: 255, a: 0.9, blur: 18 },
  1: { r: 160, g: 140, b: 230, a: 0.5, blur: 8  },
  2: { r: 100, g: 80,  b: 180, a: 0.22, blur: 0 },
} as const;
type Tier = 0 | 1 | 2;

interface Col {
  x: number; headY: number; speed: number; lineH: number;
  fontSize: number; trailLen: number; words: string[];
  tier: Tier; cursorOn: boolean; cursorTimer: number;
}

const rand = (a: number, b: number) => Math.random() * (b - a) + a;
const pickWords = (n: number) => Array.from({ length: n }, () => WORDS[Math.floor(Math.random() * WORDS.length)]);

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf: number;
    let cols: Col[] = [];

    const build = (W: number, H: number) => {
      cols = [];
      const count = Math.max(10, Math.floor(W / 100));
      const colW = W / count;
      for (let c = 0; c < count; c++) {
        const r = Math.random();
        const tier: Tier = r < 0.25 ? 0 : r < 0.58 ? 1 : 2;
        const fontSize = tier === 0 ? 13 : 12;
        const lineH = fontSize + 11;
        const trailLen = tier === 0 ? 20 : tier === 1 ? 13 : 8;
        const speed = tier === 0 ? rand(0.55, 0.95) : tier === 1 ? rand(0.28, 0.56) : rand(0.12, 0.28);
        cols.push({
          x: (c + 0.5) * colW + rand(-18, 18),
          headY: rand(-trailLen * lineH, H),
          speed, lineH, fontSize, trailLen,
          words: pickWords(trailLen + 4),
          tier, cursorOn: true, cursorTimer: Math.floor(rand(0, 36)),
        });
      }
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      build(canvas.width, canvas.height);
    };

    const draw = () => {
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // Base — near black matching site bg
      ctx.fillStyle = '#090909';
      ctx.fillRect(0, 0, W, H);

      // Single-color ambient blobs — violet only
      const blobs = [
        { x: W * 0.18, y: H * 0.42, r: W * 0.40, a: 0.14 },
        { x: W * 0.82, y: H * 0.58, r: W * 0.38, a: 0.10 },
        { x: W * 0.50, y: H * 0.48, r: W * 0.32, a: 0.08 },
        { x: W * 0.32, y: H * 0.78, r: W * 0.25, a: 0.06 },
      ];
      for (const b of blobs) {
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0,   `rgba(139,92,246,${b.a})`);
        g.addColorStop(0.5, `rgba(139,92,246,${b.a * 0.35})`);
        g.addColorStop(1,   'transparent');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
      }

      // Columns
      for (const col of cols) {
        col.headY += col.speed;
        if (col.tier === 0) {
          col.cursorTimer++;
          if (col.cursorTimer >= 28) { col.cursorOn = !col.cursorOn; col.cursorTimer = 0; }
        }
        if (col.headY - col.lineH * col.trailLen > H + col.lineH) {
          col.headY = -col.lineH * 2;
          col.words = pickWords(col.trailLen + 4);
        }

        ctx.font = `300 ${col.fontSize}px Inter, sans-serif`;
        ctx.textBaseline = 'top';
        const t = TIERS[col.tier];

        for (let i = 0; i < col.trailLen; i++) {
          const wy = col.headY - i * col.lineH;
          if (wy < -col.lineH || wy > H + col.lineH) continue;

          const fade = i / (col.trailLen - 1);
          let alpha: number;
          if (col.tier === 0)      alpha = i === 0 ? t.a : Math.pow(1 - fade, 2.6) * 0.62;
          else if (col.tier === 1) alpha = i === 0 ? t.a : Math.pow(1 - fade, 2.4) * 0.30;
          else                     alpha = i === 0 ? t.a : Math.pow(1 - fade, 2.2) * 0.12;
          if (alpha < 0.012) continue;

          const word = col.words[i % col.words.length];
          const dim = 0.45 + (1 - fade) * 0.55;

          if (i === 0 && col.tier === 0) {
            ctx.shadowColor = `rgba(${t.r},${t.g},${t.b},0.85)`;
            ctx.shadowBlur = t.blur;
          } else {
            ctx.shadowBlur = 0;
          }

          ctx.fillStyle = `rgba(${Math.round(t.r * dim)},${Math.round(t.g * dim)},${Math.round(t.b * dim)},${alpha})`;
          ctx.fillText(word, col.x, wy);

          // Blinking cursor on bright leader
          if (i === 0 && col.tier === 0 && col.cursorOn) {
            const tw = ctx.measureText(word).width;
            ctx.shadowColor = `rgba(${t.r},${t.g},${t.b},0.9)`;
            ctx.shadowBlur = 14;
            ctx.fillStyle = `rgba(${t.r},${t.g},${t.b},0.85)`;
            ctx.fillRect(col.x + tw + 2, wy + 2, 2, col.fontSize - 4);
          }
          ctx.shadowBlur = 0;
        }
      }

      // Fade masks
      const topG = ctx.createLinearGradient(0, 0, 0, 90);
      topG.addColorStop(0, 'rgba(9,9,9,1)'); topG.addColorStop(1, 'transparent');
      ctx.fillStyle = topG; ctx.fillRect(0, 0, W, 90);

      const botG = ctx.createLinearGradient(0, H - 240, 0, H);
      botG.addColorStop(0, 'transparent'); botG.addColorStop(1, 'rgba(9,9,9,1)');
      ctx.fillStyle = botG; ctx.fillRect(0, H - 240, W, 240);

      raf = requestAnimationFrame(draw);
    };

    const ro = new ResizeObserver(resize);
    resize();
    draw();
    ro.observe(canvas);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return (
    <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, display: 'block' }} />
  );
}
