import React from 'react'
import './header.css'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png'
const Header = () => {
  return (
  <div className='gpt__header section__padding' id='home'>
      <div className='gpt__header-content'>
        <h1 className="gradient__text">Let’s Build Something amazing with GPT-3.5 OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className="gpt__header-content__input">

          <input type='email' placeholder='Enter your email...'/>
          <button type='button'>Get started</button></div>
          <div className='gpt__header-content__people'>
            <img src={people}/>
            <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
            </div>
        <div className="gpt__header-image">
        <img src={ai}/>
        </div>
      
    </div>
  )
}

export default Header