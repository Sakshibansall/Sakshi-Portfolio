import React from 'react'
import "./Style.css" 
function Button({text, onClick}) {
  return (
    <button className='custom-button' onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
