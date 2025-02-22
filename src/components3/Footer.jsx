import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      style={{
        width: "100%",
        padding: "1rem 0",
        display: "flex",
        justifyContent: "center",
        background: "#f5f5f5",
      }}
    >
      <p style={{ color: "#737373" }}>Copyright ⓒ {currentYear}</p>
    </footer>
  );
}

export default Footer;
