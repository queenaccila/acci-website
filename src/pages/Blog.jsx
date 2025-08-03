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
        buttonLink=""
    />
  )
}

export default Blog