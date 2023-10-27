import "./menuScreen.css";
const MenuScreen = () => {
  return (
    <div className="menuScreen">
      <div className="title">
        <h1>Shibe memory game</h1>
        <p>*wow*</p>
      </div>
      <img src="src/assets/dogIcon.png" alt="doge" className="logo" />
      <h2>Choose dificulty: </h2>
      <div className="Options">
        <button className="diffSelectButton">Easy</button>
        <button className="diffSelectButton">Medium</button>
        <button className="diffSelectButton">Hard</button>
      </div>
    </div>
  );
};
export default MenuScreen;
