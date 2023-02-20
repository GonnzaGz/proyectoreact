import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ max }) => {
  const [cantidad, setCantidad] = useState(1);

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
    </div>
  );
};

export default ItemCount;
