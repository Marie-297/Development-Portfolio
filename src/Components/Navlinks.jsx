import React from 'react'

function Navlinks(props) {
  return (
    <div>
      <a href="#" className='links'>
        <img className='navimg' src={props.imgSrc} alt="" />
        <p className="linktext">
          {props.text}
        </p>
      </a>
    </div>
  )
}

export default Navlinks
