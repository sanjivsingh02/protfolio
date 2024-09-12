import React from 'react'
import './About.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import sanjiv_po from "../../assets/sanjiv_po.jpg"

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
       <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
         <img src={sanjiv_po} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Hii i'm a mern stack developer fresher </p>
            <p>My passion is develope a new websites which help us </p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>Progrming Language : JavaScript</p> </div>
            <div className="about-skill"><p>Frontend Development : HTML5,CSS,React.js,Bootstrap</p></div>
            <div className="about-skill"><p>Backend Development : Node.js,Express.js,RESTful ApI's</p> </div>
            <div className="about-skill"><p>Database : MongoDb,Mongoose</p></div>
        </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
          <h1>20+</h1>
          <p>PROJECT COMPLETED</p>
        </div>
      </div>
    </div>
  )
}

export default About
