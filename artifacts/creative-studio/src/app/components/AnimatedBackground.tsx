import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  hue: number;
  pulse: number;
  pulseSpeed: number;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];
    const PARTICLE_COUNT = 90;
    const CONNECTION_DIST = 160;
    const MOUSE = { x: -9999, y: -9999 };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createParticle = (w: number, h: number): Particle => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      size: Math.random() * 1.8 + 0.6,
      opacity: Math.random() * 0.5 + 0.2,
      hue: Math.random() * 60 + 200,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.015 + 0.005,
    });

    const init = () => {
      resize();
      particles = Array.from({ length: PARTICLE_COUNT }, () =>
        createParticle(canvas.width, canvas.height)
      );
    };

    let time = 0;

    const draw = () => {
      time += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Subtle radial gradient background glow
      const grad = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 0.6, 0,
        canvas.width * 0.5, canvas.height * 0.6, canvas.width * 0.7
      );
      grad.addColorStop(0, 'rgba(30, 20, 60, 0.35)');
      grad.addColorStop(0.5, 'rgba(10, 5, 25, 0.2)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        // Mouse influence — gently repel
        const dxm = p.x - MOUSE.x;
        const dym = p.y - MOUSE.y;
        const dm = Math.sqrt(dxm * dxm + dym * dym);
        if (dm < 120) {
          const force = (120 - dm) / 120;
          p.vx += (dxm / dm) * force * 0.06;
          p.vy += (dym / dm) * force * 0.06;
        }

        // Speed cap
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 1.2) { p.vx *= 0.95; p.vy *= 0.95; }

        // Wrap edges
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        // Pulsing opacity
        const alpha = p.opacity * (0.7 + 0.3 * Math.sin(p.pulse));

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const lineOpacity = (1 - dist / CONNECTION_DIST) * 0.18 * alpha;
            const hueBlend = (p.hue + q.hue) / 2;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `hsla(${hueBlend}, 60%, 70%, ${lineOpacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        // Draw particle
        const glowR = p.size * (2.5 + 1.5 * Math.sin(p.pulse));
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowR * 3);
        glow.addColorStop(0, `hsla(${p.hue}, 70%, 85%, ${alpha * 0.9})`);
        glow.addColorStop(0.4, `hsla(${p.hue}, 60%, 60%, ${alpha * 0.4})`);
        glow.addColorStop(1, `hsla(${p.hue}, 50%, 40%, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowR * 3, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Hard core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 88%, ${alpha})`;
        ctx.fill();
      }

      // Drifting aurora bands
      for (let b = 0; b < 3; b++) {
        const bx = canvas.width * (0.2 + b * 0.3 + 0.05 * Math.sin(time * 0.4 + b * 2));
        const by = canvas.height * (0.3 + 0.15 * Math.sin(time * 0.25 + b));
        const auroraGrad = ctx.createRadialGradient(bx, by, 0, bx, by, canvas.width * 0.35);
        const hues = [260, 200, 300];
        auroraGrad.addColorStop(0, `hsla(${hues[b]}, 70%, 55%, 0.045)`);
        auroraGrad.addColorStop(0.5, `hsla(${hues[b]}, 60%, 45%, 0.02)`);
        auroraGrad.addColorStop(1, 'hsla(0,0%,0%,0)');
        ctx.fillStyle = auroraGrad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      animId = requestAnimationFrame(draw);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      MOUSE.x = e.clientX - rect.left;
      MOUSE.y = e.clientY - rect.top;
    };
    const onMouseLeave = () => { MOUSE.x = -9999; MOUSE.y = -9999; };

    const ro = new ResizeObserver(() => {
      resize();
      particles = Array.from({ length: PARTICLE_COUNT }, () =>
        createParticle(canvas.width, canvas.height)
      );
    });

    init();
    draw();
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        display: 'block',
      }}
    />
  );
}
