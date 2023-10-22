const Scoreboard = ({ score, highestScore }) => {
  return (
    <div className="scoreboard">
      <h2 className="currentScore">Score: {score}</h2>
      <h2 className="highestScore">Highest score: {highestScore}</h2>
    </div>
  );
};
export default Scoreboard;
