import React from 'react';
import "./feature.css";
import Features from '../../container/features/features';
const featuredata=[
  {
    title:"Improving end distrusts instantly",
    text:"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded." 
  },
  {
    title:"Improving end distrusts instantly",
    text:"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded." 
  },{
    title:"Message or am nothing ",
    text:"Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address." 
  },{
    title:" Really boy law county ",
    text:"Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush." 
  }
]
const Feature = () => {

  return (
    <div className='gpt__feature section__padding' id='feature'>
      <div className="gpt__feature-heading">
        <h1 className="gradient__text">
        The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
        </h1></div>
      <div className="gpt__feature-container">
        {featuredata.map((item)=>(
          <Features title={item.title} text={item.text}/>
        ))}
      </div>
      
    </div>
  )
}

export default Feature