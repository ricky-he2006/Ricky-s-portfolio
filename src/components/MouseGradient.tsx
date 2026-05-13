import { useEffect, useState } from "react";

export function MouseGradient() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 transition-[background] duration-200"
        style={{
          background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, oklch(0.82 0.14 200 / 0.18), transparent 60%)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed -z-0 left-1/2 top-[-10%] h-[70vh] w-[70vw] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{ background: "var(--gradient-radial-cyan)" }}
      />
    </>
  );
}
