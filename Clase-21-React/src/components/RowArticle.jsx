import React from "react";

const RowArticle = (props) => {
  return (
    <div>
      <h1>{props.titulo}</h1>
      <h2>{props.fecha}</h2>
      <p>{props.direccion_author}</p>
    </div>
  );
};

export default RowArticle;
