import { useEffect, useRef } from 'react';

const WORDS = [
  'Essay', 'Article', 'Blog Post', 'Story', 'Script', 'Poem',
  'Pitch', 'Proposal', 'Summary', 'Report', 'Newsletter', 'Caption',
  'Headline', 'Tagline', 'Content', 'Copy', 'Lyrics', 'Abstract',
  'Generate', 'Create', 'Compose', 'Draft', 'Craft', 'Publish',
  'Write', 'Design', 'Build', 'Transform', 'Automate', 'Imagine',
  'Professional', 'Creative', 'Academic', 'Engaging', 'Persuasive',
  'SEO', 'Marketing', 'Brand', 'Voice', 'Tone', 'Style',
  'Outline', 'Structure', 'Paragraph', 'Chapter', 'Thesis',
];

interface Col {
  x: number;
  headY: number;   // y of the leading (bottom) word
  speed: number;
  lineH: number;
  fontSize: number;
  trailLen: number;
  words: string[];
  tier: 0 | 1 | 2; // 0=bright, 1=mid, 2=dim
}

const rand = (a: number, b: number) => Math.random() * (b - a) + a;

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf: number;
    let cols: Col[] = [];

    const pickWords = (n: number) =>
      Array.from({ length: n }, () => WORDS[Math.floor(Math.random() * WORDS.length)]);

    const build = (W: number, H: number) => {
      cols = [];
      // Denser columns — 1 per ~100px — so the screen fills nicely
      const count = Math.max(10, Math.floor(W / 100));
      const colW = W / count;
      for (let c = 0; c < count; c++) {
        const r = Math.random();
        // More bright/mid columns; fewer pure dim
        const tier: Col['tier'] = r < 0.28 ? 0 : r < 0.60 ? 1 : 2;
        const fontSize = tier === 0 ? 13 : tier === 1 ? 12 : 11;
        const lineH = fontSize + 10;
        // Longer trails for better vertical coverage
        const trailLen = tier === 0 ? 22 : tier === 1 ? 14 : 8;
        const speed = tier === 0 ? rand(0.55, 0.95) : tier === 1 ? rand(0.28, 0.58) : rand(0.12, 0.30);
        // Stagger heads so trails are spread across the FULL screen height.
        // headY = position of leading (bottom) word; trail goes upward.
        // We want trails to cover both top and bottom halves evenly.
        const headY = rand(trailLen * lineH * 0.3, H);
        cols.push({
          x: (c + 0.5) * colW + rand(-18, 18),
          headY,
          speed,
          lineH,
          fontSize,
          trailLen,
          words: pickWords(trailLen + 4),
          tier,
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

      // Deep dark background
      ctx.fillStyle = '#00000c';
      ctx.fillRect(0, 0, W, H);

      // Ambient purple / blue radial blobs
      const blobs = [
        { x: W * 0.18, y: H * 0.5,  r: W * 0.40, c: '68,22,138', a: 0.15 },
        { x: W * 0.82, y: H * 0.5,  r: W * 0.40, c: '28,48,178', a: 0.12 },
        { x: W * 0.5,  y: H * 0.45, r: W * 0.30, c: '88,32,158', a: 0.10 },
      ];
      for (const b of blobs) {
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0, `rgba(${b.c},${b.a})`);
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
      }

      // Draw columns
      for (const col of cols) {
        col.headY += col.speed;
        // Reset when head (and its full trail) has gone off the bottom
        if (col.headY - col.lineH * col.trailLen > H + col.lineH) {
          col.headY = -col.lineH * col.trailLen;
          col.words = pickWords(col.trailLen + 2);
        }

        ctx.font = `300 ${col.fontSize}px Inter, sans-serif`;
        ctx.textBaseline = 'top';

        for (let i = 0; i < col.trailLen; i++) {
          const wy = col.headY - i * col.lineH; // head is bottom; trail goes up
          if (wy < -col.lineH || wy > H + col.lineH) continue;

          const t = i / (col.trailLen - 1); // 0 = head, 1 = tail
          let alpha: number;
          if (col.tier === 0) {
            alpha = i === 0 ? 0.95 : (1 - t) * (1 - t) * 0.70;
          } else if (col.tier === 1) {
            alpha = i === 0 ? 0.50 : (1 - t) * (1 - t) * 0.30;
          } else {
            alpha = i === 0 ? 0.18 : (1 - t) * (1 - t) * 0.11;
          }
          if (alpha < 0.01) continue;

          const word = col.words[i % col.words.length];

          ctx.shadowBlur = 0;
          if (i === 0) {
            if (col.tier === 0) {
              ctx.shadowColor = 'rgba(195,135,255,0.95)';
              ctx.shadowBlur = 20;
              ctx.fillStyle = `rgba(255,255,255,${alpha})`;
            } else if (col.tier === 1) {
              ctx.shadowColor = 'rgba(165,115,245,0.65)';
              ctx.shadowBlur = 12;
              ctx.fillStyle = `rgba(225,195,255,${alpha})`;
            } else {
              ctx.fillStyle = `rgba(170,150,220,${alpha})`;
            }
          } else {
            // Trail: purple-blue gradient by tier
            const [r2, g2, b2] = col.tier === 0 ? [178,138,255] : col.tier === 1 ? [148,118,235] : [112,98,205];
            ctx.fillStyle = `rgba(${r2},${g2},${b2},${alpha})`;
          }

          ctx.fillText(word, col.x, wy);
          ctx.shadowBlur = 0;
        }
      }

      // Top mask (fade to background color)
      const topM = ctx.createLinearGradient(0, 0, 0, 80);
      topM.addColorStop(0, 'rgba(0,0,12,1)');
      topM.addColorStop(1, 'rgba(0,0,12,0)');
      ctx.fillStyle = topM;
      ctx.fillRect(0, 0, W, 80);

      // Bottom mask
      const botM = ctx.createLinearGradient(0, H - 190, 0, H);
      botM.addColorStop(0, 'rgba(0,0,12,0)');
      botM.addColorStop(1, 'rgba(0,0,12,1)');
      ctx.fillStyle = botM;
      ctx.fillRect(0, H - 190, W, 190);

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
