import "./styles.css";

const calculateColorHeight = (index) => 40 - 10 * index;

const ColorsPallet = (props) => {
  return (
    <div className="color-container">
      {props.colors.map((color, index) => (
        <div
          style={{
            backgroundColor: color,
            width: "100%",
            height: calculateColorHeight(index) + "%",
          }}
        ></div>
      ))}
    </div>
  );
};

export default ColorsPallet;