import React, { useEffect, useRef, useState, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay in ms before the animation starts after element becomes visible */
  delayMs?: number;
  /** Vertical offset in px for the slide-up effect (positive values move from below) */
  offsetY?: number;
  /** Whether to animate only the first time it enters the viewport */
  once?: boolean;
};

/**
 * Reveal animates its children when they enter the viewport using a fade + slide-up.
 * Designed to be tiny and dependency-free.
 */
const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  delayMs = 0,
  offsetY = 24,
  once = true,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once]);

  const style: React.CSSProperties = {
    transition: "transform 700ms cubic-bezier(0.22, 1, 0.36, 1), opacity 700ms ease",
    transform: isVisible ? "translateY(0px)" : `translateY(${offsetY}px)`,
    opacity: isVisible ? 1 : 0,
    transitionDelay: `${delayMs}ms`,
    willChange: "transform, opacity",
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
};

export default Reveal;


