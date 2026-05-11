import { useState } from "react";
import { objects } from "../data/objects";
import ObjectButton from "./ObjectButton";

function GameScreen({
  stars,
  setStars,
  endGame
}) {

  const [clickedObjects, setClickedObjects] =
    useState([]);

  const [showInstructions,
    setShowInstructions] =
    useState(true);

  function handleObjectClick(object) {

  if (
    clickedObjects.includes(object.id)
  ) return;

  setClickedObjects(prev => [
    ...prev,
    object.id
  ]);

  if (object.type === "living") {
    setStars(prev => prev + 1);
  }

  const livingClicked =
    clickedObjects.filter(id => {
      const obj =
        objects.find(
          item => item.id === id
        );

      return obj?.type === "living";
    }).length +
    (object.type === "living"
      ? 1
      : 0);

  setTimeout(() => {
    if (livingClicked >= 5) {
      endGame();
    }
  }, 500);
}
  return (
    <div className="game-screen">

      {/* Instruction Popup */}
      {showInstructions && (
        <div className="instruction-overlay">

          <div className="instruction-modal">

            <h2 className="instruction-title">
              How To Play
            </h2>
            <p>
              Find and choose the
              <strong>
                {" "}5 living things
              </strong>
              {" "}on your screen.
            </p>
            <p>
             Do not choose non-living things.
            </p>

            <p>
              Find 5 living things
              to win!
            </p>

            <button
              className="instruction-button"
              onClick={() =>
                setShowInstructions(false)
              }
            >
              🚀 Start Hunt
            </button>

          </div>
        </div>
      )}
      {!showInstructions && (
        <>
          <div className="top-bar">
            <div className="stars">
              ⭐ {stars}
            </div>
          </div>

          {objects.map(object => (
            <ObjectButton
              key={object.id}
              object={object}
              onClick={() =>
                handleObjectClick(object)
              }
            />
          ))}
        </>
      )}

    </div>
  );
}

export default GameScreen;