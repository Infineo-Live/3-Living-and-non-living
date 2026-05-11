function EndScreen({ stars }) {
  return (
    <div className="screen">

      <div className="end-box">

        <h1 className="end-title">
          🎉 Great Job!
        </h1>

        <h2 className="end-stars">
          ⭐ Stars Earned: {stars}
        </h2>

        <p className="end-text">
          You found the living things!
        </p>

        <p className="end-small">
          Thanks for playing 🌿
        </p>

      </div>

    </div>
  );
}

export default EndScreen;