import React from "react";
import "./Contacto.css";
import { useState } from "react";
import { useCartContext } from "./CartContext";

export default function Contacto() {
  const { emptycart } = useCartContext();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [values, setValues] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });
  const [submitForm, setSubmitForm] = useState(false);
  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.nombre != "" && values.email && values.telefono) {
      console.log("entre");
      setSubmitForm(true);
      emptycart();
    }
  };

  return (
    <div>
      {submitForm == true ? (
        <p className="msjCompra">Compra realizada con exito.</p>
      ) : (
        <div className="contacto">
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleInputChange}
              value={values.nombre}
              name="nombre"
              className="form"
              type="text"
              placeholder="Nombre"
            />

            <input
              onChange={handleInputChange}
              value={values.email}
              name="email"
              className="form"
              type="email"
              placeholder="Mail"
            />

            <input
              onChange={handleInputChange}
              value={values.telefono}
              name="telefono"
              className="form"
              type="phone"
              placeholder="Telefono"
            />

            <button className="btn">Enviar</button>
          </form>
        </div>
      )}
    </div>
  );
}
