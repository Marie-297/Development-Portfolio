import React from 'react'
import Navlinks from './Navlinks'
// import Img from '../assets/Images/account.svg'

function Navbar() {
  return (
    <div>
      <nav>
        <div className="brand-name">
          <p>Material Tailwind</p>
        </div>
        <div className="mid-navbar">
          <ul>
            <li>
              <Navlinks text="Page" imgSrc='../src/./assets/Images/navimg.jpg' />
            </li>
            <li>
              <Navlinks text="Accounts" imgSrc='../src/./assets/Images/account.svg' />
            </li>
            <li>
              <Navlinks text="Docs" imgSrc='../src/./assets/Images/navimg2.jpg' />
            </li>
          </ul>
        </div>

        <div className="left-navbar">
          <div className="sign-in">
            <a href="#">
              sign in
            </a>
          </div>
          <div className="btn">
            <button>blocks</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
