import React from "react";

function Note() {
  return (
    <div
      className="note"
      style={{
        background: "#fff",
        borderRadius: "7px",
        boxShadow: "0 2px 5px #ccc",
        padding: "10px",
        width: "240px",
        margin: "16px",
        float: "left",
      }}
    >
      <h1>David De Jesus Gonzalez Ramirez</h1>
      <p>
        I am a student in Software Engineering from universidad Politecnica Del
        Estado De Nayarit, i have experience with customer service.
      </p>
      <p>
        I like to play soccer and have won a tournament. I also enjoy playing
        sports video games, especially soccer. I love playing guitar and playing
        regional Mexican music, especially songs by Natanael Cano. Also,
        spending with my family and friends is something I value very much.
      </p>
    </div>
  );
}

export default Note;
