import { useState, useEffect } from "react";
import Game from "./game/Game";
import Scoreboard from "./scoreboard/Scoreboard";
import EndScreen from "./endScreen/EndScreen";
function App() {
  const [images, setImages] = useState([]);
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [lose, setLose] = useState(false);
  const [win, setWin] = useState(false);
  const [difficulty, setDifficulty] = useState(5);
  const fetchImages = async (amount) => {
    let response = await fetch(
      `http://shibe.online/api/shibes?count=${amount}`
    );
    let data = await response.json();
    return data;
  };
  useEffect(() => {
    fetchImages(difficulty).then((data) => {
      setImages([...data]);
    });
  }, [lose, win]);

  const cardClickHandler = (image) => {
    if (clickedCards.includes(image)) {
      setLose(true);
    } else {
      setClickedCards([...clickedCards, image]);
      setScore(score + 1);
      console.log(score);
      console.log(difficulty);
      if (score + 1 === difficulty) {
        setWin(true);
      }
      let newImages = [...images];
      newImages.sort((a, b) => 0.5 - Math.random());
      setImages(newImages);
      if (score == highestScore) setHighestScore(highestScore + 1);
    }
  };
  const endGame = (won) => {
    if (won) {
      setDifficulty(difficulty + 5);
    }
    setScore(0);
    setLose(false);
    setWin(false);
    setClickedCards([]);
  };
  return (
    <>
      <Scoreboard
        score={score}
        highestScore={highestScore}
        level={difficulty}
      />
      <Game images={images} onCardClick={cardClickHandler} />
      <EndScreen
        lost={lose}
        won={win}
        onPlayAgainClick={endGame}
        score={score}
      />
    </>
  );
}

export default App;
