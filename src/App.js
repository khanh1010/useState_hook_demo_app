import React, { useState } from 'react'
import './index.css'

const App = () => {
  // define useState hook
  const [ dark, setDark ] = useState(false)

  const toggleDark = () => {
    setDark(!dark)
  }

  const blockCircle = {
    background: dark ? 'black':'white',
    border: '2px solid black',
    width:'150px',
    height:'150px',
    borderRadius: '50%',
    position:'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'blue',
    lineHeight: '120px',
    fontSize: '18px'
  }

  const blockText = {
    position: 'absolute',
    top: '65%',
    left: '50%',
    transform: 'translate(-50%, 50%)',
  }
  
  return (
    <div className='App'>
      <div style={blockCircle}>
        <span>Dark mode is {dark ? 'ON' : 'OFF'}</span>
      </div>
      <div style={blockText}>
        <button onClick={toggleDark}>Toggle Dark</button>
      </div>
    </div>
  )
}

export default App;
