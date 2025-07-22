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
            <b>Hi! I’m Helen — or Accila/Acci online!</b>,
            <i>She/Her - 23 - 9/29</i>,
            "I’m a new grad software developer and tech artist who likes making fun and cute tech! Whether it’s games, websites, or any creative projects, I enjoy blending code with art and bringing ideas to life.",
            "If you’re interested in working together or just want to chat, feel free to reach out!"
          ]}
        />

        <main>
            {children}
        </main>
    </>
  )
}

export default PageFormat
