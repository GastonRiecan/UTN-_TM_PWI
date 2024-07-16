import React from "react";
import "./ColorCard.css";
import ColorItemList from "../ColorItemList/ColorItemList";

const ColorCard = ({ colorCard }) => {
  const { id, colors, likes, time } = colorCard;
  return (
    <div className="color-card">
      <ColorItemList colors={colors} />
      <div className="color-card-controls">
        <button className="btn-like">
          <i className="bi bi-heart"></i>
          {likes}
        </button>
        <span className="update">{time}</span>
      </div>
    </div>
  );
};

export default ColorCard;
