import GreatJob from '../assets/greatjob1.png';
function EndScreen({ stars }) {
  return (
    <div className="screen">

      <div className="end-box">
        <img src={GreatJob} alt="Great Job!" className="end-image" />

        <h2 className="end-stars">
          ⭐ Stars Earned: {stars}
        </h2>

        <p className="end-text">
          You found the living things!
        </p>

      </div>

    </div>
  );
}

export default EndScreen;