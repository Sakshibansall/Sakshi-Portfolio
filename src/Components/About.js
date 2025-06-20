import React from 'react'
import "./Style.css"
import sakshiimg from "./Images/photo.jpg"
import html from "./Images/htmllogo.png"
import css from "./Images/csslogo.png"
import js from "./Images/jslogo.png"
import bootstrap from "./Images/bootstraplogo.png"
import react from "./Images/reactlogo.png"
import git from "./Images/gitlogo.png"
import github from "./Images/githublogo.png"

const skillImages = [
  { src: html, label: "Html" },
  { src: css, label: "CSS" },
  { src: js, label: "JS" },
  { src: bootstrap, label: "Bootstrap" },
  { src: react, label: "React" },
  { src: git, label: "Git" },
  { src: github, label: "GitHub" },
]

const Skills = () => {
  return (<div className='skills-item'>
    {skillImages.map((skill, index) => (
      <div className="skill-item" key={index}>
        <img src={skill.src} alt={skill.label} />
        <p>{skill.label}</p>
      </div>))}
  </div>
  )
}
function About() {
  return (

    <div className="about" id='about'>
      <h1>About Me</h1>
      <hr />

      <div className="about-item">
        <div className="about-img">
          <img src={sakshiimg} alt="sakshi" className='profile-photo' />
        </div>

        <div className="about-text">
          <p>A recent BCA graduate skilled in HTML, CSS, JavaScript, and ReactJS.</p>
          <p>Eager to contribute as a Frontend Developer by applying my technical knowledge, design sense, and enthusiasm for building intuitive, responsive web interfaces. I aim to be part of an innovative team where I can enhance user experiences and continue growing as a developer.</p>

          <div className="about-skills">
            <h2 className='highlight'>Skills</h2>
            <Skills/>
            

          </div>
        </div>

      </div>
    </div>


  )
}
export default About
