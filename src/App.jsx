import { useState, useEffect } from "react";
import Game from "./game/Game";
import Scoreboard from "./scoreboard/Scoreboard";
function App() {
  const [images, setImages] = useState([]);
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const fetchImages = async () => {
    let response = await fetch(`http://shibe.online/api/shibes?count=10`);
    let data = await response.json();
    return data;
  };
  const shuffleArray = (...array) => {
    return array.sort((a, b) => 0, 5 - Math.random());
  };
  const cardClickHandler = (image) => {
    console.log(image);
    if (clickedCards.includes(image)) {
      console.log("card was clicked");
      setScore(0);
    } else {
      setClickedCards([...clickedCards, image]);
      let newImages = [...images];
      newImages.sort((a, b) => 0.5 - Math.random());
      setImages(newImages);
      setScore(score + 1);
      if (score == highestScore) setHighestScore(highestScore + 1);
      console.log("card wasn't cliceked");
    }
  };
  useEffect(() => {
    fetchImages().then((data) => {
      setImages([...data]);
    });
  }, []);
  return (
    <>
      <Scoreboard score={score} highestScore={highestScore} />
      <Game images={images} onCardClick={cardClickHandler} />
    </>
  );
}

export default App;
