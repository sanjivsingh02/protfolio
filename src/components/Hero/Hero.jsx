import React from 'react'
import "./Hero.css"
import sanjiv_pp from  "../../assets/sanjiv_pp.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={sanjiv_pp} alt="" />
      <h1><span>I'm Sanjiv Singh</span>, mern stack developer </h1>
      <p>I am a mern stack developer from mumbai </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
      
    </div>
  )
}

export default Hero
