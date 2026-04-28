"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  as?: "a" | "button";
}

export default function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  target,
  rel,
  as: Tag = href ? "a" : "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 400, damping: 25 });
  const y = useSpring(rawY, { stiffness: 400, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left - rect.width / 2) * 0.35);
    rawY.set((e.clientY - rect.top - rect.height / 2) * 0.35);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.a
      ref={ref as React.Ref<HTMLAnchorElement>}
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.a>
  );
}
