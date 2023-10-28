import Scoreboard from "../scoreboard/Scoreboard";
import EndScreen from "../endScreen/EndScreen";
import Cardboard from "../cardBoard/Cardboard";

const Game = ({
  difficulty,
  score,
  highestScore,
  cardClickHandler,
  lose,
  win,
  endGame,
  restart,
  images,
}) => {
  return (
    <>
      <Scoreboard
        score={score}
        highestScore={highestScore}
        level={difficulty}
      />
      <Cardboard images={images} onCardClick={cardClickHandler} />
      <EndScreen
        lost={lose}
        won={win}
        onPlayAgainClick={endGame}
        onRestartClick={restart}
        score={score}
      />
    </>
  );
};
export default Game;
