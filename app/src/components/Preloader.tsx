"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Phase = "loading" | "leaving" | "done";

// Duração ajustada para uma transição elegante e perceptível
const TARGET_DURATION_MS = 2400;
const EXIT_DURATION_MS = 600;

export function Preloader() {
  const [phase, setPhase] = useState<Phase>("loading");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const html = document.documentElement;
    const prevOverflow = html.style.overflow;
    html.style.overflow = "hidden";

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      const t = setTimeout(() => {
        setPhase("done");
        html.style.overflow = prevOverflow;
      }, 300);
      return () => clearTimeout(t);
    }

    let rafId = 0;
    let exitTimer: ReturnType<typeof setTimeout> | undefined;
    let doneTimer: ReturnType<typeof setTimeout> | undefined;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const ratio = Math.min(elapsed / TARGET_DURATION_MS, 1);

      // Curva suave com aceleração e desaceleração orgânica
      const eased =
        ratio < 0.5
          ? 2 * ratio * ratio
          : 1 - Math.pow(-2 * ratio + 2, 2) / 2;

      const currentProgress = Math.min(Math.round(eased * 100), 100);
      setProgress(currentProgress);

      if (ratio < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        html.style.overflow = prevOverflow;
        exitTimer = setTimeout(() => {
          setPhase("leaving");
          doneTimer = setTimeout(() => {
            setPhase("done");
          }, EXIT_DURATION_MS);
        }, 250);
      }
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      if (exitTimer) clearTimeout(exitTimer);
      if (doneTimer) clearTimeout(doneTimer);
      html.style.overflow = prevOverflow;
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy={phase === "loading"}
      aria-label="Carregando Everton Carlos — Fisioterapia e Quiropraxia Desportiva"
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-ink text-paper transition-all duration-600 ease-out ${
        phase === "leaving"
          ? "pointer-events-none scale-105 opacity-0 blur-sm"
          : "opacity-100"
      }`}
    >
      {/* Background collage com leve escurecimento de contraste */}
      <Image
        src="/images/preloader-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Vinheta radial profunda para realçar o centro */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(11,13,16,0.5)_0%,rgba(11,13,16,0.92)_100%)]"
      />

      {/* Container central */}
      <div className="relative z-10 flex flex-col items-center px-6">
        <div className="relative">
          {/* Brilho de fundo ciano suave */}
          <div
            aria-hidden="true"
            className="absolute -inset-16 rounded-full bg-cyan/20 blur-3xl"
          />
          <Image
            src="/images/logo-mark-dark.svg"
            alt="Everton Carlos — Fisioterapia e Quiropraxia Desportiva"
            width={472}
            height={94}
            priority
            className="relative h-auto w-80 drop-shadow-[0_16px_40px_rgba(0,0,0,0.85)] sm:w-[480px] md:w-[620px] lg:w-[700px]"
          />
        </div>

        {/* Barra de progresso com espessura e largura bem destacadas */}
        <div className="mt-12 h-2 w-72 overflow-hidden rounded-full bg-white/20 sm:w-[420px] md:w-[540px] lg:w-[620px]">
          <div
            className="h-full bg-cyan shadow-[0_0_20px_rgba(0,191,244,1)] transition-[width] duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Texto "CARREGANDO" e porcentagem grandes e bem visíveis */}
        <div className="mt-5 flex w-72 items-center justify-between font-mono text-sm font-bold uppercase tracking-[0.25em] text-white sm:w-[420px] sm:text-base md:w-[540px] md:text-lg lg:w-[620px]">
          <span className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan animate-pulse shadow-[0_0_8px_rgba(0,191,244,1)]" />
            Carregando
          </span>
          <span className="font-extrabold text-cyan drop-shadow-[0_0_12px_rgba(0,191,244,0.9)]">
            {String(progress).padStart(2, "0")}%
          </span>
        </div>
      </div>
    </div>
  );
}
