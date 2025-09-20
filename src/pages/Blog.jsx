import PageFormat from '../Page-Format.jsx'
import { assets } from '../components/Assets.js'

function Blog() {
  return (
    <PageFormat
        title="My Blog"
        imageSrc={assets.blog}
        description={[
            "A casual blog where I post updates on my personal projects, dev insights, and creative ideas!"
        ]}
        buttonName="Check out my blog!"
        buttonLink="https://blog.accila.com/"
    />
  )
}

export default Blog