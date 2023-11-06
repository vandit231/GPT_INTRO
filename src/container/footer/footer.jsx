import React from 'react'
import "./footer.css"
import gptlogo from '../../assets/logo.svg'
const Footer = () => {
  return (
    <div className='gpt__footer section__padding'>
      <div className="gpt__footer-heading">
        <h1 className="gradient__text">Do you want to step into the future before others</h1>
      </div>
      <div className="gpt__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt__footer-links">
        <div className="gpt__footer-links_logo">
          <img src={gptlogo} alt='logo'/>

        </div>
        <div className="gpt__footer-links_div">
          <h4>links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Counters</p>
        </div>
        <div className="gpt__footer-links_div">
          <h4>Company</h4>
          <p>terms and fucntion</p>
          <p>privacy policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt__footer-links_div">
          <h4>Get-in touch</h4>
          <p>infopayment.net</p>

        </div>
      </div>
    </div>
  )
}

export default Footer