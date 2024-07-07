import React, { useState } from "react";
import "./Dasboard.css";
import Nav from "../Nav/Nav";
import Output from "../Output/Output";
import Input from "../Input/Input";

export default function Dashoard() {
  const [input,setInputValue]=useState("");

  function callInput(getValue) {
    setInputValue(getValue);
    // console.log(input);
  }
  return (
    <>
      <Nav />
      <Output input={input}/>
      <Input callInput={callInput} />
    </>
  );
}
