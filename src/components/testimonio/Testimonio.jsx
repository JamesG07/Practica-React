import React from "react";
import "../../stylesheets/testimonio/Testimonios.css";

export function Testimonio(props) {
  return (
    <section className="container__testimonio">
      <img className="img__testimonio" src={props.img} alt="foto" />
      <div className="container__texto__testimonio">
        <h3 className="nombre__testimonio">
          <strong>{props.nombre}</strong> en {props.pais}
        </h3>
        <p className="cargo__testimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="texto__testimonio">{`" ${props.description} "`}</p>
      </div>
    </section>
  );
}
