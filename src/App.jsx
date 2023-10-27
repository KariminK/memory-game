import { useState, useEffect } from "react";
import Game from "./game/Game";
import MenuScreen from "./menuScreen/MenuScreen";
function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [difficulty, setDifficulty] = useState(5);
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [lose, setLose] = useState(false);
  const [win, setWin] = useState(false);
  const [images, setImages] = useState([]);
  const fetchImages = async (amount) => {
    let response = await fetch(
      `http://shibe.online/api/shibes?count=${amount}`
    );
    let data = await response.json();
    return data;
  };
  useEffect(() => {
    if (!lose || !win) {
      fetchImages(difficulty).then((data) => {
        setImages([...data]);
      });
    }
  }, [lose, win, difficulty]);
  const onSelectDiffClick = (e) => {
    switch (e.target.textContent) {
      case "Easy":
        setDifficulty(5);
        setGameStarted(true);
        break;
      case "Medium":
        setDifficulty(10);
        setGameStarted(true);
        break;
      case "Hard":
        setGameStarted(true);
        setDifficulty(15);
        break;
    }
  };
  const cardClickHandler = (image) => {
    if (lose || win) return;
    if (clickedCards.includes(image)) {
      setLose(true);
    } else {
      setClickedCards([...clickedCards, image]);
      setScore(score + 1);
      if (score + 1 === difficulty) {
        setWin(true);
      }
      let newImages = [...images];
      newImages.sort((a, b) => 0.5 - Math.random());
      setImages(newImages);
      if (score == highestScore) setHighestScore(highestScore + 1);
    }
  };
  const restart = () => {
    setScore(0);
    setLose(false);
    setWin(false);
    setGameStarted(false);
    setClickedCards([]);
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
  if (gameStarted) {
    return (
      <>
        <Game
          difficulty={difficulty}
          score={score}
          images={images}
          highestScore={highestScore}
          cardClickHandler={cardClickHandler}
          lose={lose}
          win={win}
          endGame={endGame}
          restart={restart}
        />
      </>
    );
  } else {
    return <MenuScreen diffSelectClickHandle={onSelectDiffClick} />;
  }
}

export default App;
