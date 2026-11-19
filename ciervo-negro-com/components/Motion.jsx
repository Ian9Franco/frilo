"use client";

import { useEffect, useRef, useState } from "react";
import { look } from "@/lib/pointer";

export function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setOn(true);
      },
      { threshold: 0.18 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${className} ${on ? "reveal-in" : "reveal-wait"}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function Tilt({ children, className = "" }) {
  const ref = useRef(null);

  function move(event) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    node.style.transform = `rotateX(${(-y * 7).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg) translateY(-4px)`;
  }

  function leave() {
    if (ref.current) ref.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  }

  return (
    <div className="[perspective:900px]">
      <div
        ref={ref}
        onMouseMove={move}
        onMouseLeave={leave}
        className={className}
        style={{ transformStyle: "preserve-3d", transition: "transform 0.45s cubic-bezier(0.16,1,0.3,1)" }}
      >
        {children}
      </div>
    </div>
  );
}

export function TrackLook({ children, className = "" }) {
  function move(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    look.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    look.y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
  }

  return (
    <div className={className} onMouseMove={move}>
      {children}
    </div>
  );
}
