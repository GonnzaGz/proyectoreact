import { React, useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { useCartContext } from "./CartContext";

export default function ItemDetail({
  id,
  imagen,
  nombre,
  categoriaId,
  categoria,
  precio,
  stock,
}) {
  const { agregarAlCarrito, isInCart } = useCartContext();
  const [cantidad, setCantidad] = useState(1);
  const handleAgregar = () => {
    const item = {
      id,
      imagen,
      nombre,
      categoriaId,
      categoria,
      precio,
      stock,
      cantidad,
    };
    agregarAlCarrito(item);
  };

  return (
    <div className="tarjetasExpandido">
      <div className="panel1">
        <img className="imgProductoDetalle" src={imagen} />
      </div>
      <div className="panel2">
        <p className="nombreDetalle">{nombre}</p>
        <p className="precioDetalle">$ {precio}</p>
        <p className="categoriaDetalle">Categoría: {categoria}</p>
        <p className="descripcionTitDetalle">Descripción</p>
        <p className="descripcionDetalle">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
          aspernatur vel itaque illo, et consequuntur quos corrupti adipisci,
          animi odit natus labore molestiae odio ratione? Necessitatibus
          blanditiis aliquam magni debitis.
        </p>
        <ItemCount
          cantidad={cantidad}
          setCantidad={setCantidad}
          max={stock}
          agregar={handleAgregar}
        />
      </div>
    </div>
  );
}
