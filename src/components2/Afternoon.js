import React from "react";

const hora = new Date().getHours();
const green = { color: "green" };

function afternoon() {
  if (hora >= 12 && hora < 18) {
    return <h1 style={green}>Good afternoon</h1>;
  }
}
export default afternoon;
