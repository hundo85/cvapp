import React from 'react'
import './textArea.component.css'

function TextArea({text, setText}) {
  
/*   export const useCharacterByUrl = (characterUrl) => {
    const [character, setUrl] = useFetch(characterUrl);
    return character === undefined ? "Loading..." : character;
  };
  
  export const useLocationByUrl = (locationUrl) => {
    const [location, setUrl] = useFetch(locationUrl);
    return location === undefined ? "Loading..." : location;
  }; */

  function onChangeHandler(e){
    setText(e.target.value);
  }
  
  return (
    <textarea id="textArea" onChange={(e) => onChangeHandler(e)}/>
  )
}

export default TextArea
