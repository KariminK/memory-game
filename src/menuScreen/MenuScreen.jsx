import "./menuScreen.css";
const MenuScreen = ({ diffSelectClickHandle }) => {
  return (
    <div className="menuScreen">
      <div className="title">
        <h1>Shibe memory game</h1>
        <p>Don't click same card twice</p>
      </div>
      <div className="logo">
        <img src="src/assets/dogIcon.png" alt="doge" />
      </div>
      <h2>Choose difficulty: </h2>
      <div className="Options">
        <button
          className="diffSelectButton"
          onClick={(e) => diffSelectClickHandle(e)}
        >
          Easy
        </button>
        <button
          className="diffSelectButton"
          onClick={(e) => diffSelectClickHandle(e)}
        >
          Medium
        </button>
        <button
          className="diffSelectButton"
          onClick={(e) => diffSelectClickHandle(e)}
        >
          Hard
        </button>
      </div>
    </div>
  );
};
export default MenuScreen;
