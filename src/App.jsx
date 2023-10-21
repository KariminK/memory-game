import { useState, useEffect } from "react";
import Game from "./game/Game";
function App() {
  const [images, setImages] = useState([]);
  const fetchImages = async () => {
    let response = await fetch(`https://api.imgflip.com/get_memes`);
    let data = await response.json();
    const Memes = data.data.memes.slice(0, 20);
    return Memes.map((meme) => meme.url);
  };
  useEffect(() => {
    fetchImages().then((data) => {
      setImages([...data]);
    });
  }, []);
  return (
    <>
      <Game images={images} />
    </>
  );
}

export default App;
