import React from "react";
import "./ItemListCointainer.css";

export default function ItemListContainer(props) {
  const { greeting } = props;
  return <div className="styling">{greeting}</div>;
}
