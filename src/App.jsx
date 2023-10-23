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
  const [difficulty, setDifficulty] = useState(10);
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
    return () => {
      setImages([]);
    };
  }, [difficulty]);

  const cardClickHandler = (image) => {
    if (clickedCards.includes(image)) {
      setLose(true);
    } else {
      setClickedCards([...clickedCards, image]);
      if (clickedCards.length === images.length && clickedCards.length != 0) {
        setWin(true);
      }
      let newImages = [...images];
      newImages.sort((a, b) => 0.5 - Math.random());
      setImages(newImages);
      setScore(score + 1);
      if (score == highestScore) setHighestScore(highestScore + 1);
    }
  };
  const loseGame = () => {
    setScore(0);
    setLose(false);
    setWin(false);
    setClickedCards([]);
  };
  return (
    <>
      <Scoreboard score={score} highestScore={highestScore} />
      <Game images={images} onCardClick={cardClickHandler} />
      <EndScreen
        lost={lose}
        won={win}
        onPlayAgainClick={loseGame}
        score={score}
      />
    </>
  );
}

export default App;
