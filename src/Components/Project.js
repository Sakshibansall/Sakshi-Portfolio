import React from 'react'
import Anime from "./Images/anime.png"
import testing from "./Images/Testingxperts.png"
import book from "./Images/book.png"
function Project() {
  return (
    <div className='project' id='project'>
      <div className="project-heading">
        <h1 className='heading'>Latest Projects</h1>
        <hr />
      </div>

      <div className="project-items">
        <div className="project-data">
          <a href="https://sakshibansall.github.io/Anime-Website-Bootstrap-/" target="_blank" rel="noopener noreferrer">
          <img src={Anime} alt="" />
          <h3>Anime Website</h3>
          <p>Developed a responsive website where users can interact and watch anime. Implement a clean UI using Bootstrap and
            custom CSS, and added interactivity using JavaScript.</p>
            </a>
        </div>
        <div className="project-data">
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src={testing} alt="" />
            <h3>TestingXperts Clone</h3>
            <p>Built a responsive TestingXperts clone using HTML, CSS, Bootstrap, and jQuery with Figma-to-code conversion and interactive UI features.</p>
          </a>
        </div>
        <div className="project-data">
           <a href="https://sakshibansall.github.io/Bookstore-Website/" target="_blank" rel="noopener noreferrer">
          <img src={book} alt="" />
          <h3>Bookstore Website</h3>
          <p>A student-to-student online bookstore where students can easily buy and sell used books. Helps save money, reduce
            waste, and support a more eco-friendly way of sharing books.</p>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Project
