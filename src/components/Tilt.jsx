import { useRef, useState } from "react";

export default function Tilt({ children, max = 15, speed = 400, scale = 1.02 }) {
  const tiltRef = useRef(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const el = tiltRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to element (range -0.5 to 0.5)
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;

    // Calculate rotation angles
    const rotateX = (-y * max).toFixed(2);
    const rotateY = (x * max).toFixed(2);

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: `transform 100ms linear`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: `transform ${speed}ms ease`,
    });
  };

  return (
    <div
      ref={tiltRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
