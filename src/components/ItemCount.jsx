import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ cantidad, setCantidad, max, agregar }) => {
  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < max && setCantidad(cantidad + 1);
  };

  return (
    <div>
      <button onClick={handleRestar} className="btn">
        -
      </button>
      <span className="cont">{cantidad}</span>
      <button onClick={handleSumar} className="btn">
        +
      </button>
      <br />
      <button className="btn" onClick={agregar}>
        Agregar
      </button>
    </div>
  );
};

export default ItemCount;
