import { useEffect, useState } from "react";

function ObjectButton({ object, discovered, onClick }) {
  // true while the timed glow should show
  const [glowActive, setGlowActive] = useState(false);

  useEffect(() => {
    if (!discovered) return;

    setGlowActive(true);

    // Living → green glow for 2 s | Non-living → red glow for 3 s
    const duration = object.type === "living" ? 2000 : 3000;
    const timer = setTimeout(() => setGlowActive(false), duration);
    return () => clearTimeout(timer);
  }, [discovered, object.type]);

  const isLiving = object.type === "living";
  const glowClass = glowActive ? (isLiving ? "correct" : "wrong") : "";

  return (
    <div
      className={`object-wrapper ${glowClass}`}
      onClick={onClick}
      style={{ left: object.x, top: object.y, width: object.width }}
    >
      <img
        src={object.image}
        className="object-image"
        alt={object.name}
      />

      {discovered && (
        <div className={`label ${object.type}`}>
          {object.name}
        </div>
      )}
    </div>
  );
}

export default ObjectButton;