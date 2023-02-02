import React from "react";

export function ButtonContador({ text, actionClick }) {
  return <button onClick={actionClick}>{text}</button>;
}
