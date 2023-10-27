import Card from "../card/Card";
import "./cardboard.css";
const Cardboard = ({ images, onCardClick, lost }) => {
  let cards = images.map((image, index) => {
    return (
      <Card
        image={image}
        key={index}
        onCardClick={lost != true ? () => onCardClick(image) : ""}
      />
    );
  });
  return <div className="game">{...cards}</div>;
};
export default Cardboard;
