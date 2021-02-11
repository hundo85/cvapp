import React from 'react'
import './resetBtn.component.css'

function ResetBtn({setText}) {

  function onClickHandler(){
    setText("");
    document.getElementById('textArea').value = "";
  }

  return (
    <button id="resetBtn" onClick={() => onClickHandler()}>Reset</button>
  )
}

export default ResetBtn
