import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import AcciIcon from './assets/bunny-drawings/Web-Icon.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="title-container">
        <img src={AcciIcon} className="title-icon"/>
        <div>
          <h1>Accila</h1>
          <h3>Software Dev + Tech Artist</h3>
        </div>
      </div>

      <div className="pink-rect"></div>

    </>
  )
}

export default App
