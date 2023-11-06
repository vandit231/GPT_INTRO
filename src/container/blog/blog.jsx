import React from 'react'
import './blog.css'
import Atricle from '../../components/article/article'
import blog01 from '../../assets/blog01.png';
import blog02 from '../../assets/blog02.png';
import blog03 from '../../assets/blog03.png';
import blog04 from '../../assets/blog04.png';
import blog05 from '../../assets/blog05.png';
const Blog = () => {
  return (
    <div className='gpt__blog section__padding'>
      <div className="gpt__blog-heading">
        <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="gpt__blog-container">
        <div className="gpt__blog-container_groupa">
          <Atricle imgurl={blog01} date='Sep 19, 2023' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Atricle imgurl={blog04}date='Sep 19, 2023' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Atricle imgurl={blog05} date='Sep 19, 2023' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        </div>
      </div>
    </div>
  )
}

export default Blog