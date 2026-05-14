import { useState } from "react";

function ObjectButton({
  object,
  discovered,
  onClick
}) {

  const [glowActive, setGlowActive] = useState(false);
  if (discovered && !glowActive) {
    setGlowActive(true);
  }
  const isLiving =
    object.type === "living";

  const glowClass = glowActive
    ? isLiving
      ? "correct"
      : "wrong"
    : "";

  return (
    <div
      className={`object-wrapper ${glowClass}`}
      onClick={onClick}
      style={{left: object.x, top: object.y, width: object.width}}>
      <img src={object.image} className="object-image" alt={object.name} />
    </div>
  );
}

export default ObjectButton;