import React from 'react'

function footer() {
  return (
    <div className='footer' id='/'>
      <div className="icons">

          <div>
          <a href="/" style={{fontSize:"15px"}}>
          <i className="fa-solid fa-arrow-up" style={{ fontSize: "20px" }}></i>&nbsp;
          BACK TO TOP</a>
          </div>

        <div className='icon-brand'>

         
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin" style={{ fontSize: "20px" }}></i>
          </a>
          <a href="mailto:sakshibansal287@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-envelope" style={{ fontSize: "20px" }}></i>
          </a>
          <a href="https://github.com/Sakshibansall/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github" style={{ fontSize: "20px" }}></i>
          </a>
        </div>
         <p>© 2025 Sakshi Bansal. All rights reserved.</p>
      </div>
    </div>
  )
}

export default footer
