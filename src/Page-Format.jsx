import './Page-Format.css'
import AcciIcon from './assets/bunny-drawings/Web-Icon.png'
import { useState, useEffect } from 'react'

import Navbar from './components/NavBar'
import Description from './components/Description'

function PageFormat({ children }) {
  return (
    <>
       <div className="title-wrapper">
            <div className="title-container">
                <img src={AcciIcon} className="title-icon" />
                <div>
                  <h1>Accila</h1>
                  <h3>Software Dev + Tech Artist</h3>
                </div>
            </div>
        </div>
        
        <Navbar />

        <Description
          texts={[
            "Welcome!",
            "Feel free to explore my website!"
          ]}
        />

        <main>
            {children}
        </main>
    </>
  )
}

export default PageFormat
