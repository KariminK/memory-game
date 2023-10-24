import "./scoreboard.css";
const Scoreboard = ({ score, highestScore, level }) => {
  let difficulty = "easy";
  switch (level) {
    case 5:
      difficulty = "easy";
      break;
    case 10:
      difficulty = "medium";
      break;
    case 15:
      difficulty = "hard";
      break;
    case 20:
      difficulty = "hard+";
      break;
    default:
      difficulty = "apocalypse";
  }
  return (
    <div className="scoreboard">
      <div className="currentGameInfo">
        <h2 className="currentScore">Score: {score}</h2>
        <h2 className="level">Level: {difficulty}</h2>
      </div>
      <img src="src/assets/dogIcon.png" alt="Doge" />
      <h2 className="highestScore">Highest score: {highestScore}</h2>
    </div>
  );
};
export default Scoreboard;
