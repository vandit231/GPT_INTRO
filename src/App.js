import React from "react";
import Article from "./components/article/article.jsx";
import Brand from "./components/brand/brand";
import Cta from "./components/cta/cta";
import Feature from "./components/feature/feature";
import Navbar from   "./components/navbar/Navbar.jsx"
import Blog from "./container/blog/blog"
import Features from "./container/features/features";
import Footer from "./container/footer/footer"
import Header from "./container/header/header"
import Possiblity from "./container/possiblity/possiblity"
import Whatgpt3 from "./container/whatgpt3/what"
import "./App.css";
import './index.css';
function App(){
    return <div className="App">
        <div className="gradient__bg">
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <Whatgpt3/>
        <Feature/> 
        <Possiblity/>
        <Cta/>
        <Blog/>
        <Footer/>
    </div>
}
export default App;
