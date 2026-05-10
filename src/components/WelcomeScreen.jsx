function WelcomeScreen({ startGame }) {
  return (
    <div className="screen welcome-screen">

      <div className="logo-container">
        <img
          src="/heading.png"
          alt="The Great Living Hunt"
          className="game-logo"
        />
      </div>
      <div className="instruction-card">
        <h2 className="instruction-title">
          How To Play
        </h2>
        <p>
           Find and choose the
          <strong> 5 living things </strong>
          from the objects on your screen.
        </p>
        <p>
           Choose a non-living thing and
          you lose the game
        </p>
        <p>
          Find all 5 living things to win!
        </p>
      </div>
      <button
        className="main-button"
        onClick={startGame}
      >
        Start Adventure
      </button>

    </div>
  );
}

export default WelcomeScreen;