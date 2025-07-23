import './Page-Format.css'
import { useState, useEffect } from 'react'

import AcciIcon from './assets/bunny-drawings/Web-Icon.png'
import Navbar from './components/NavBar'
import Description from './components/Description'

function PageFormat({imageSrc, description}) {
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

        <img src={imageSrc} className="section-img"/>

        <Description texts={description}/>

        <div className="bottom-empty">
          <p></p>
        </div>
    </>
  )
}

export default PageFormat
