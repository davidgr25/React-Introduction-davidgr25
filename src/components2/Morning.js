import React from "react";

const hora = new Date().getHours();
const red = { color: "red" };

function morning() {
  if (hora >= 0 && hora < 12) {
    return <h1 style={red}>Good Morning</h1>;
  }
}
export default morning;
