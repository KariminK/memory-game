import "./endscreen.css";
const EndScreen = ({ lost, won, score, onPlayAgainClick, onRestartClick }) => {
  if (lost) {
    return (
      <div className="endScreen loseScreen">
        <h1>*Woof* You have lost</h1>
        <h2>Your score was: {score}</h2>
        <button id="playAgainBtn" onClick={() => onPlayAgainClick(false)}>
          Play again?
        </button>
      </div>
    );
  } else if (won) {
    return (
      <div className="endScreen winScreen">
        <h1>*Wow* You have won! You're god in memorizing shibes</h1>
        <h2>Your score was: {score}</h2>
        <div className="endButtons">
          <button id="playAgainBtn" onClick={() => onPlayAgainClick(true)}>
            Play more
          </button>
          <button id="restartBtn" onClick={onRestartClick}>
            Restart
          </button>
        </div>
      </div>
    );
  }
};
export default EndScreen;
