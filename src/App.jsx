import { useState, useEffect } from "react";
import Game from "./game/Game";
import MenuScreen from "./menuScreen/MenuScreen";
function App() {
  const [gameStarted, setGameStarted] = useState(false);

  if (gameStarted) {
    return (
      <>
        <Game />
      </>
    );
  } else {
    return <MenuScreen />;
  }
}

export default App;
