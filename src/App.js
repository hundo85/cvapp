import React from "react";
import "./App.css";
import TextArea from "./component/textArea/textArea.component";
import ResultDiv from "./component/resultDiv/resultDiv.component";
import ResetBtn from "./component/resetBtn/resetBtn.component";

function App() {
  return (
    <div className="App">
      <TextArea />
      <ResultDiv />
      <ResetBtn />
    </div>
  );
}

export default App;
