import "./card.css";
const Card = ({ image, onCardClick }) => {
  return (
    <div className="card" onClick={onCardClick}>
      <img src={image} alt="image" />
    </div>
  );
};
export default Card;
