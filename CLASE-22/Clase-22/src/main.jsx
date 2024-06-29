import React from "react";
import ReactDOM from "react-dom/client";
import ColorCard from "./components/ColorCard";
import "./style.css";
import data from "./data/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
      {data.map((colorPallet) => (
        <ColorCard
          colors={colorPallet.colors}
          likes={colorPallet.likes}
          fecha={colorPallet.fecha}
        />
      ))}
    </div>
  </React.StrictMode>
);
