import React from 'react'
import  "./article.css"
function Article ({imgurl,date,title}) {
  return (
    <div className='gpt__blog-container-atricle'>
       <div className="gpt__blog-container_atricle-image">
        <img src={imgurl} alt='blog'/>        
       </div>
       <div className="gpt__blog-container_atricle-content">
        <div>
          <p>{date}</p>
          <h2>{title}</h2>
        </div>
       </div>
    </div>
  )
}

export default Article;