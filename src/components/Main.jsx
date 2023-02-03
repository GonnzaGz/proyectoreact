import React from "react";
import "./Main.css";
import anuncio from "../assets/img/anuncio.jpg";
import cartel1 from "../assets/img/initial-d-gtr.gif";

export default function main() {
  return (
    <div className="mainPadre">
      <div className="publicidad">
        <img src={anuncio} alt="anuncio" />
      </div>
      <div className="cartelera">
        <span>
          <img src={cartel1} alt="cartelera" />
          <div class="frase1">APEX PREDATOR</div>
          <div class="frase2">─────────────────────</div>
          <div class="frase3">DESAFIA TU LEGADO</div>
        </span>
      </div>
    </div>
  );
}
