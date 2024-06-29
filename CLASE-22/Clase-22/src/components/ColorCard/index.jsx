import ColorsPallet from "./ColorsPallet";
import Footer from "./Footer";
import "./styles.css";

const ColorCard = (props) => {
  return (
    <div className="container">
      <ColorsPallet colors={props.colors} />
      <Footer likes={props.likes} fecha={props.fecha} />
    </div>
  );
};

export default ColorCard;


