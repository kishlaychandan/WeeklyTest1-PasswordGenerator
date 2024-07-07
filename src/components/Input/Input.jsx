import "./Input.css";
import React, { useState } from "react";

function Input({ callInput }) {
  const [length, setLength] = useState("");
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setsymbols] = useState(false);
  const [password, setPassword] = useState("");

  const handleGeneratePassword = () => {
    if (length < 8 || length > 50) {
      alert("Password length must be between 8 and 50 characters.");
      return;
    }

    let characters = "";
    if (uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) characters += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) characters += "0123456789";
    if (symbols) characters += "!@#$%^&*()_+[]{}|;:,.<>?";
    if(!uppercase && !lowercase && !numbers && !symbols){
      alert("Please select at least one character type.");
      return;
    }
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    setPassword(password);
    callInput(password);
    // console.log(password);
  };

  return (
    <>
      <div className="input">
        <div className="heading">
          <h1>Select Password length(**8-50 characters**)</h1>
          <input
            className="length"
            onChange={(e) => {
              setLength(e.target.value);
            }}
            placeholder="Enter length ..."
            type="number"
            name=""
            id=""
          />
        </div>
        <div className="checkbox">
          <div className="labels">
            <label htmlFor="">
              <input
                type="checkbox"
                onChange={(ele) => {
                  setUppercase(ele.target.checked);
                }}
              />
              Uppercase
            </label>
            <label htmlFor="">
              <input
                type="checkbox"
                onChange={(ele) => {
                  setLowercase(ele.target.checked);
                }}
              />
              Lowercase
            </label>
            <label htmlFor="">
              <input
                type="checkbox"
                onChange={(ele) => {
                  setNumbers(ele.target.checked);
                }}
              />
              Numbers
            </label>
            <label htmlFor="">
              <input
                type="checkbox"
                onChange={(ele) => {
                  setsymbols(ele.target.checked);
                }}
              />
              Symbols
            </label>
          </div>
        </div>
        <button onClick={handleGeneratePassword}>Generate Password</button>
      </div>
    </>
  );
}
export default Input;
