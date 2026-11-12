"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

export type RevealDirection = "up" | "down" | "left" | "right" | "zoom" | "none";

interface RevealProps {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
  delay?: number; // Delay em milissegundos (ex: 150, 300)
  duration?: number; // Duração em ms (default: 800)
}

/**
 * Animação de entrada suave e moderna ao rolar a página (Scroll-triggered entrance animation)
 * Funciona de forma responsiva (mobile e desktop) e respeita as preferências de acessibilidade.
 */
export function Reveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 800,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const getHiddenTransform = () => {
    switch (direction) {
      case "up":
        return "translate-y-10";
      case "down":
        return "-translate-y-10";
      case "left":
        return "translate-x-12";
      case "right":
        return "-translate-x-12";
      case "zoom":
        return "scale-95";
      case "none":
        return "";
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all cubic-bezier(0.16,1,0.3,1) motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${
        visible
          ? "opacity-100 translate-x-0 translate-y-0 scale-100"
          : `opacity-0 ${getHiddenTransform()}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
