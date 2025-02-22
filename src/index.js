import React from "react";
import ReactDOM from "react-dom";

// *****  CHALLENGE 1 ***** //
//1. Create a h1 header with your name and last name.
//2. Create a paragraph with a random number fom 1-9
const name = "David";
const lastName = "Gonzalez";
const number = Math.floor(Math.random() * 10);
/*
ReactDOM.render(
  <div>
    <h1>CHALLENGE 1: hello World! I am {name + " " + lastName}</h1>
    <p>Random Number is: {number}</p>
  </div>,
  document.getElementById("root")
);
*/
/* *****  CHALLENGE 2 ***** 
Create a react app that displays 2 paragraphs
the paragrapth should say
Created by YOURNAME
Copyright CURRENTYEAR */
const currentDate = new Date();
const year = currentDate.getFullYear();
/*
ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <br />
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
*/
/* *****  CHALLENGE 3 ***** 
  Create a react app that displays animal 
pictures and their name and different color each*/
/*
const red = { color: "red" };
const blue = { color: "blue" };
const green = { color: "green" };
ReactDOM.render(
  <div>
    <img src="./assets/dog.png" alt="" />
    <h2 style={red}>Dog</h2>
    <img src="./assets/cat.png" alt="" />
    <h2 style={blue}>Cat</h2>
    <img src="./assets/rabbit.png" alt="" />
    <h2 style={green}>Rabbit</h2>
  </div>,
  document.getElementById("root")
);
/* *****  CHALLENGE 4 ***** 
Create a hello world h1 element
with the following styling properties:
  color: "red",
  fontSize: "20px",
  border: "1px solid black", 
*/

// **** CHALLENGE 5 Students Only ****//
/* Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue. 
HINT: Use the date.getHours() to get the current time.
*/

/*import App from "./components2/App";

ReactDOM.render(<App />, document.getElementById("root"));
*/
//**  Components Exercise **/
/*
Create a Heading component <h1>My Favourite Foods</h1>
Create a List component:
<ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
</ul>
Create APP component:
    <div>
      <Heading />
      <List />
      <List />
    </div>
render app component.
*/
/*import App from "./components/App";
ReactDOM.render(<App />, document.getElementById("root"));
/* Walkthrough imoprts and exports */

// ***** FINAL CHALLENGE  Students Only***** //
//1. Create a new React app.
//2. Create a App.jsx component.
//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.
//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/
import App from "./components3/App";
ReactDOM.render(<App />, document.getElementById("root"));
