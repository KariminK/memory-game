import Card from "../card/Card";
const Game = ({ images }) => {
  let cards = images.map((image, index) => {
    return <Card image={image} key={index} />;
  });
  return <div className="game">{...cards}</div>;
};
export default Game;
