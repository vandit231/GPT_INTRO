import React,{useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import "./Navbar.css";
import logo from '../../assets/logo.svg'
const Navbar = () => {
  const[togglemenu,settogglemenu]=useState(false);

  return (
    <div className='gpt__navbar'>
      <div className='gpt__navbar-links'>
        <div className='gpt__navbar-links_logo'>
          <img src={logo} alt="logo" srcset=""/>   
        </div>
        <div className='gpt__navbar-links_container'>
          
        <p><a href="#home">Home</a></p>
        <p><a href="#what">What is GPT-3</a></p>
           <p><a href="#">Open AI</a></p>
           <p><a href="#">Case Study</a></p>
            <p><a href="#">Library</a></p>
        </div>
        </div>
        <div className='gpt__navbar-sign'>
          <p>Sign in</p>
          <button type='button'>Sign up</button>
        </div>
        <div className='gpt__navbar-menu'>
          {togglemenu?<RiCloseLine color='#fff' size={27} onClick={()=>settogglemenu(false)}/>:<RiMenu3Line color='#fff' size={27} onClick={()=>settogglemenu(true)}/>}
          {togglemenu &&(
            <div className='gpt__navbar-menu_container scale-up-center'>
              <div className='gpt__navbar-menu-container-links'>
              <p><a href="#home">Home</a></p>
              <p><a href="#what">What is GPT-3</a></p>
              <p><a href="#">Open AI</a></p>
              <p><a href="#">Case Study</a></p>
              <p><a href="#">Library</a></p>
              <div className='gpt__navbar-menu_container-links-sign'>
          <p>Sign in</p>
          <button type='button'>Sign up</button>
        </div>
              </div>
            </div>
          )}
        </div>
      </div>
  )
}

export default Navbar;