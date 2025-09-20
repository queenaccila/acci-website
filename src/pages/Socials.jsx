import '../Page-Format.css'
import '../components/SocialLink.css'
import { motion } from 'framer-motion'
import { assets } from '../components/Assets.js'

import Navbar from '../components/NavBar'
import SocialLink from '../components/SocialLink'

import { FaItchIo } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Socials() {
  return (
    <>
    {/* Title section */}
        <div className="title-wrapper">
            <div className="title-container">
                <img src={assets.icon} className="title-icon" />
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
        src={assets.socials}
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
                iconSrc={<FaGithub />}
                label="GitHub"
                link="https://github.com/queenaccila"
            />
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 30}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
        >
            <SocialLink
                iconSrc={<FaItchIo />}
                label="itch.io"
                link="https://queenaccila.itch.io/"
            />
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 30}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
        >
            <SocialLink
                iconSrc={<FaBluesky />}
                label="Bluesky"
                link="https://bsky.app/profile/queenaccila.bsky.social"
            />
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 30}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
        >
            <SocialLink
                iconSrc={<FaPinterest />}
                label="Pinterest"
                link="https://www.pinterest.com/queenaccila/"
            />
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 30}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
        >
            <SocialLink
                iconSrc={<FaLinkedin />}
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