function EndScreen({ stars, restartGame }) {

  return (
    <div className="screen">

      <h1>Great Job!</h1>

      <h2>
        Stars Earned: ⭐ {stars}
      </h2>

      <button
        className="main-button"
        onClick={restartGame}
      >
        Play Again
      </button>

    </div>
  );
}

export default EndScreen;