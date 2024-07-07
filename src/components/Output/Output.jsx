import React, { useState, useEffect } from 'react';
import './Output.css';

function Output(props) {

  function checkCopyPassword() {
    if (props.input.trim().length === 0) {
      alert("Nothing to copy");
    } else {
      let copyText = props.input.trim();
      console.log(copyText);

      navigator.clipboard.writeText(copyText).then(() => {
        alert("Password copied: " + copyText);
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    }
  }

  return (
    <div className="output">
      <p>{props.input}</p>
      <button onClick={checkCopyPassword}>
        <i className="fa-regular fa-copy"></i>
      </button>
    </div>
  );
}

export default Output;
