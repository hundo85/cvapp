import React from 'react'
import './textArea.component.css'

function TextArea({ text, setText, json }) {

  function onChangeHandler(e) {
    setText(e.target.value);
  }

  return (
    <div className="textAreaContainer">
      {Object.keys(json).map((item, index) => {

        return (
          <div key={`titleDiv${index}`}>
            <h2>{item.toUpperCase()}</h2>
            {
              Object.entries(json).map((subtitle, subtitleIndex) => {
                console.log(subtitleIndex);
                if (subtitle[0] === "basics") {
                  return Object.entries(subtitleIndex).map((basicsSubtitle, basicsSubValue) => {

                    return (<div>{basicsSubtitle}: {basicsSubValue}</div>)
                  })
                }

                return (<div>subtitle: subtitleIndex</div>)
              })
            }
          </div>)
      })}
    </div>
  )
}

export default TextArea
//<textarea id="textArea" onChange={(e) => onChangeHandler(e)}/>
