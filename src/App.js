import React from "react";
import logo from "./logo.svg";
import "./index.css";
import Canvas from "./components/Canvas";
import ColorPicker from "./components/ColorPicker";

function App() {
  return (
    <div className="App">
      <ColorPicker />
      <Canvas />
    </div>
  );
}

export default App;
