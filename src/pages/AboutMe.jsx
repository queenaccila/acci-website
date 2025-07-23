import PageFormat from '../Page-Format.jsx'
import AboutMeIcon from '../assets/bunny-drawings/Website-Drawings-About-Me.png'

function AboutMe() {
  return (
    <PageFormat
        imageSrc={AboutMeIcon}
        description={[
            <b>Hi, I'm Helen!</b>,
            <i>She/Her - 23 - 9/29</i>,
            "I’m a new grad software developer and tech artist who likes making fun and cute tech! Whether it’s games, websites, or any creative projects, I enjoy blending code with art and bringing ideas to life.",
            "If you’re interested in working together or just want to chat, feel free to reach out!"
        ]}
    />
  )
}

export default AboutMe