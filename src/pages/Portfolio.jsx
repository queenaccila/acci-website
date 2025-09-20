import PageFormat from '../Page-Format.jsx'
import { assets } from '../components/Assets.js'

function Portfolio() {
  return (
    <PageFormat
        title="My Portfolio"
        imageSrc={assets.portfolio}
        description={[
            "A collection of projects I’ve made over the years — from games to creative tech projects. I have some work on a variety of things such as games, art, and other various tech work I did over the years."
        ]}
        buttonName="Check out my work!"
        buttonLink="https://helen-ho-game-projects.notion.site/Technical-Artist-Portfolio-1263e13258e28028943ed25c692b7e9b"
    />
  )
}

export default Portfolio