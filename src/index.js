import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import Canvas from './components/Canvas'
import ColorPicker from './components/ColorPicker'

function App() {
  const [color, setColor] = useState(0)

  return (
    <div className="App">
      <ColorPicker currentColor={color} setColor={color => setColor(color)} />
      <Canvas currentColor={color} />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
