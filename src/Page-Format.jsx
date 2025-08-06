import './Page-Format.css'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import AcciIcon from './assets/bunny-drawings/Web-Icon.png'
import Navbar from './components/NavBar'
import Description from './components/Description'
import LinkButton from './components/Button'
import AudioButton from './components/AudioButton'

function PageFormat({title, imageSrc, description, buttonName, buttonLink}) {
  return (
    <>  
        {/* Title section */}
        <div className="title-wrapper">
              <div className="title-container">
                  <img src={AcciIcon} className="title-icon" />
                  <div>
                    <h1>Accila</h1>
                    <h3>Software Dev + Tech Artist</h3>
                  </div>
              </div>
          </div>

        {/* Navbar section */}
        <Navbar />

        {/* Title section */}
        <motion.div
          initial={{ opacity: 0, y: 20}}
          animate={{ opacity: 1, y: 0}}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
            <h1 className="title-text">{title}</h1>
        </motion.div>

        {/* Image section */}
        <motion.img
          src={imageSrc}
          className="section-img"
          initial={{ opacity: 0, y: 30}}
          animate={{ opacity: 1, y: 0}}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        />

        {/* Description section */}
        <motion.div
          initial={{ opacity: 0, y: 20}}
          animate={{ opacity: 1, y: 0}}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Description texts={description}/>
        </motion.div>

        {/* Button section */}
        <motion.div
          initial={{ opacity: 0, y: 20}}
          animate={{ opacity: 1, y: 0}}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <LinkButton text={buttonName} redirect={buttonLink}/>
        </motion.div>

        <AudioButton />

        <div className="bottom-empty">
          <p></p>
        </div>
    </>
  )
}

export default PageFormat
