import PageFormat from '../Page-Format.jsx'
import BlogIcon from '../assets/bunny-drawings/Website-Drawings-Blog.png'

function Blog() {
  return (
    <PageFormat
        title="My Blog"
        imageSrc={BlogIcon}
        description={[
            "A casual blog where I post updates on my personal projects, dev insights, and creative ideas!"
        ]}
        buttonName="Check out my blog!"
        buttonLink="https://helen-ho-game-projects.notion.site/Technical-Artist-Portfolio-1263e13258e28028943ed25c692b7e9b"
    />
  )
}

export default Blog