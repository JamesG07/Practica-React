import React from "react";
import "../../stylesheets/calculadora/Boton.css";

export function Boton(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor != "." && valor != "=";
  };
  return (
    <div
      onClick={() => props.manejarClick(props.children)}
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : ""
      }`.trim()}
    >
      {props.children}
    </div>
  );
}
