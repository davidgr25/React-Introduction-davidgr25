import React from "react";

const hora = new Date().getHours();
const blue = { color: "blue" };

function night() {
  if (hora >= 18 && hora < 24) {
    return <h1 style={blue}>Good night</h1>;
  }
}
export default night;
