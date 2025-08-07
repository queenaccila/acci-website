import '../Page-Format.css'
import '../components/SocialLink.css'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import SocialsIcon from '../assets/bunny-drawings/Website-Drawings-Socials.png'

import AcciIcon from '../assets/bunny-drawings/Web-Icon.png'
import Navbar from '../components/NavBar'
import SocialLink from '../components/SocialLink'
import AudioButton from '../components/AudioButton'

import ItchIcon from '../assets/social-icons/itch.io-icon.png'
import BlueskyIcon from '../assets/social-icons/Bluesky_Logo.svg.png'
import GitHubIconDark from '../assets/social-icons/github-icon.png'
import GitHubIconLight from '../assets/social-icons/GitHub_Invertocat_Light.png'
import LinkedIcon from '../assets/social-icons/LinkedIn_icon.png'
import YouTubeIcon from '../assets/social-icons/YouTube_icon.png'

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
    <div className="social-wrapper">
        <motion.div
            initial={{ opacity: 0, y: 30}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
        >
            <SocialLink
                iconSrc={ItchIcon}
                label="itch.io"
                link="https://queenaccila.itch.io/"
            />
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 30}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
        >
            <SocialLink
                iconSrc={GitHubIconLight}
                label="GitHub"
                link="https://github.com/queenaccila"
            />
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 30}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
        >
            <SocialLink
                iconSrc={YouTubeIcon}
                label="YouTube"
                link="https://www.youtube.com/@accila"
            />
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 30}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
        >
            <SocialLink
                iconSrc={BlueskyIcon}
                label="Bluesky"
                link="https://bsky.app/profile/queenaccila.bsky.social"
            />
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 30}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
        >
            <SocialLink
                iconSrc={LinkedIcon}
                label="LinkedIn"
                link="https://www.linkedin.com/in/helen-ho-5a496724a/"
            />
        </motion.div>
    </div>

    <div className="bottom-empty">
        <p></p>
    </div>

    </>
  )
}

export default Socials