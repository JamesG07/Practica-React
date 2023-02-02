import { PantallaCalculadora } from "./PantallaCalculadora";
import { Boton } from "./Boton";
import { BotonClear } from "./BotonClear";
import { useState } from "react";
import { evaluate } from "mathjs";

import "../../stylesheets/calculadora/Calculadora.css";

export function Calculadora() {
  const [input, setInput] = useState("");

  const agregarInput = (valor) => {
    setInput(input + valor);
  };
  const reiniciar = () => {
    if (input) {
      setInput("");
    } else {
      console.log("Ingrese valores");
    }
  };

  const calcularResultado = () => {
    setInput(evaluate(input));
  };

  return (
    <div className="contenedor__calculadora">
      <PantallaCalculadora input={input} />
      <div className="fila">
        <Boton manejarClick={agregarInput}>1</Boton>
        <Boton manejarClick={agregarInput}>2</Boton>
        <Boton manejarClick={agregarInput}>3</Boton>
        <Boton manejarClick={agregarInput}>+</Boton>
      </div>
      <div className="fila">
        <Boton manejarClick={agregarInput}>4</Boton>
        <Boton manejarClick={agregarInput}>5</Boton>
        <Boton manejarClick={agregarInput}>6</Boton>
        <Boton manejarClick={agregarInput}>-</Boton>
      </div>
      <div className="fila">
        <Boton manejarClick={agregarInput}>7</Boton>
        <Boton manejarClick={agregarInput}>8</Boton>
        <Boton manejarClick={agregarInput}>9</Boton>
        <Boton manejarClick={agregarInput}>*</Boton>
      </div>
      <div className="fila">
        <Boton manejarClick={calcularResultado}>=</Boton>
        <Boton manejarClick={agregarInput}>0</Boton>
        <Boton manejarClick={agregarInput}>.</Boton>
        <Boton manejarClick={agregarInput}>/</Boton>
      </div>
      <div className="fila">
        <BotonClear manejarClear={reiniciar}> Clear </BotonClear>
      </div>
    </div>
  );
}
