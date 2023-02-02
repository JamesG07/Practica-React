import React from "react";
import "../../stylesheets/calculadora/BotonClear.css";

export function BotonClear(props) {
  return (
    <button onClick={props.manejarClear} className="boton__clear">
      {props.children}
    </button>
  );
}
