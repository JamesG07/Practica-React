import "../../stylesheets/contadorClicks/ContadorClicks.css";
import { useState } from "react";
import { ButtonContador } from "./ButtonContador";
import { Contador } from "./Contador";

export function ContadorClicks() {
  const [contador, setcontador] = useState(0);

  const sumar = () => {
    setcontador(contador + 1);
  };
  const restar = () => {
    setcontador(contador - 1);
  };
  const reinicar = () => {
    setcontador(0);
  };

  return (
    <div className="contador__container">
      <Contador contador={contador} />
      <div className="btns">
        <ButtonContador text="Sumar +1" actionClick={sumar} />
        <ButtonContador text="Restar -1" actionClick={restar} />
        <ButtonContador text="Reiniciar" actionClick={reinicar} />
      </div>
    </div>
  );
}
