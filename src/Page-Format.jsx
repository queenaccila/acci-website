import './Page-Format.css'
import AcciIcon from './assets/bunny-drawings/Web-Icon.png'
import { useState, useEffect } from 'react'

function PageFormat({ children }) {
  return (
    <div>
      <div className="title-container">
        <img src={AcciIcon} className="title-icon" />
        <div>
          <h1>Accila</h1>
          <h3>Software Dev + Tech Artist</h3>
        </div>
      </div>

      <div className="pink-rect"></div>

      <main>
        {children}
      </main>
    </div>
  )
}

export default PageFormat
