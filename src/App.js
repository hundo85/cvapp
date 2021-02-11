import React, { useState, useEffect } from "react";
import "./App.css";
import TextArea from "./component/textArea/textArea.component";
import ResultDiv from "./component/resultDiv/resultDiv.component";
import ResetBtn from "./component/resetBtn/resetBtn.component";

function App() {
  const [text, setText] = useState("");

  const getData = () => {
    fetch("cv.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setText(myJson[1]);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <TextArea text={text} setText={setText} />
      <ResultDiv text={text} />
      <ResetBtn setText={setText} />
    </div>
  );
}

export default App;
