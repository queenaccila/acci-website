import '../Page-Format.css'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import SocialsIcon from '../assets/bunny-drawings/Website-Drawings-Socials.png'

import AcciIcon from '../assets/bunny-drawings/Web-Icon.png'
import Navbar from '../components/NavBar'
import SocialLink from '../components/SocialLink'

import ItchIcon from '../assets/social-icons/itch.io-icon.png'

function Socials() {
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
        <h1 className="title-text">My Socials</h1>
    </motion.div>
    
    {/* Image section */}
    <motion.img
        src={SocialsIcon}
        className="section-img"
        initial={{ opacity: 0, y: 30}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
    />

    {/* Links section */}
    <div>
        <SocialLink
            iconSrc={ItchIcon}
            label="itch.io"
            link="https://queenaccila.itch.io/"
        />
    </div>

    <div className="bottom-empty">
        <p></p>
    </div>

    </>
  )
}

export default Socials