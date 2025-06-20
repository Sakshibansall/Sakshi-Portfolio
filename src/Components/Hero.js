import React from 'react'
import sakshiimg from "./Images/photo.jpg"
import "./Style.css"
import Button from './Button'

function About() {
  return (
    <div className='hero'>

      <div className="hero-img">
        <img src={sakshiimg} alt="sakshi" className='profile-photo' />
      </div>

      <div className="hero-text">
        <h1>I'm <span> Sakshi Bansal </span>, Frontend Developer</h1>
        <p>Frontend Developer in the making, passionate about building sleek, responsive, and accessible web interfaces.</p>

        <div style={{ gap: "20px", display: "flex" }}>
          <Button text="Projects" onClick={()=>document.getElementById("project").scrollIntoView({behavior:"smooth"})} />
          <a href="/Sakshi_CV.pdf" download className='resume'>Download Resume</a>
        </div>
      </div>
    </div>
  )
}

export default About
