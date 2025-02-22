import React from "react";

function Header() {
  return (
    <header
      style={{
        backgroundColor: "#2200e5",
        margin: "-16px",
        padding: "16px 32px",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
      }}
    >
      <h1
        style={{
          color: "#fff",
          fontFamily: '"McLaren", cursive',
          fontWeight: 200,
        }}
      >
        My Notes
      </h1>
    </header>
  );
}

export default Header;
