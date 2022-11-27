import React from "react";
import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Dave");
  const handleNameChange = () => {
    const names = ["Bob", "Kelvin", "Dave"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };
  const handleClick = () => {
    console.log("You click it");
  };
  const handleClick2 = () => {
    console.log("${name} was clicked");
  };
  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };
  return (
    <div>
      <p onDoubleClick={handleClick}> Hello {name}!</p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={() => handleClick2("Dave")}>Click It</button>
      <button onClick={(e) => handleClick3(e)}>Click It</button>
    </div>
  );
};
export default Content;
