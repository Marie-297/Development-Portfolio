import React from 'react'

function RowFour(props) {
  return (
    <div className='ForthRow'>
      <div className="Card">
        <div className="Rowfour-img">
          <img className='Rowfour-icon' src={props.srcUrl} alt="icon" />
        </div>
        <div className="Rowfour-header"><h5>{props.header}</h5></div>
        <div className="Rowfour-text">{props.text}</div>
      </div>
    </div>
  )
}

export default RowFour
