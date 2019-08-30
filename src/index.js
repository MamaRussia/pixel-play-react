import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
