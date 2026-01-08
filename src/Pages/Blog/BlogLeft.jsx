import React from 'react'
import BlogCard from './BlogCard'
import singleone from '../../assets/single_blog_1.jpg.webp'
import singletwo from '../../assets/single_blog_2.jpg.webp'
import singlethree from '../../assets/single_blog_3.jpg.webp'
import singlefour from '../../assets/single_blog_4.jpg.webp'
export default function BlogLeft() {
  return (
    <div>
<BlogCard img={singleone} />
<BlogCard img={singletwo} />
<BlogCard img={singlethree} />
<BlogCard img={singlefour} />
</div>
  )
}
