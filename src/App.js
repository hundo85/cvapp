import React, { useState, useEffect } from "react";
import "./App.css";
import TextArea from "./component/textArea/textArea.component";
import ResultDiv from "./component/resultDiv/resultDiv.component";
import ResetBtn from "./component/resetBtn/resetBtn.component";

function App() {
  const [text, setText] = useState("");
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("cv.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setDatas(myJson);
      });
  }, []);

  //console.log(datas);

  return (
    <div className="App">
      <TextArea text={text} setText={setText} json={datas} />
      <ResultDiv text={text} />
      <ResetBtn setText={setText} />
    </div>
  );
}

export default App;
