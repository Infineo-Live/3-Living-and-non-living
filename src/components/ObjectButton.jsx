function ObjectButton({
  object,
  discovered,
  onClick
}) {
  return (
    <div
      className={`
        object-wrapper
        ${
          discovered
            ? object.type ===
              "living"
              ? "correct"
              : "wrong"
            : ""
        }
      `}
      onClick={onClick}
      style={{
        left: object.x,
        top: object.y,
        width: object.width,
      }}
    >
      <img
        src={object.image}
        className="object-image"
        alt={object.name}
      />

      {discovered && (
        <div
          className={`
            label
            ${object.type}
          `}
        >
          {object.name}
        </div>
      )}
    </div>
  );
}

export default ObjectButton;