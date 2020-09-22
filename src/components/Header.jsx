import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export const Header = () => {
  const [open, setOpen] = useState(false)
  const [btnVisible, setBtnVisible] = useState(false)
  const toggleBtn = () => {
    setOpen(!open)
    setBtnVisible(true)
  }
  const currentUrl = window.location.href
  const getLastIndex = currentUrl.substring(currentUrl.lastIndexOf('/') + 1)
  return (
    <nav
      className={`navbar navbar-fixed-top ${
        getLastIndex ? 'navbar-default' : 'navbar-inverse'
      } `}
    >
      <div className='container'>
        <button
          type='button'
          className='navbar-toggle collapsed'
          data-toggle='collapse'
          data-target='#navbar-collapse'
          aria-expanded='false'
          onClick={toggleBtn}
        >
          <span className='sr-only'>Toggle navigation</span>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
        </button>
        <div
          className={`${!open && btnVisible ? 'collapse' : 'navbar-collapse'}`}
        >
          <ul className='nav navbar-nav'>
            <li>
              <Link to='/'>01 : Home</Link>
            </li>
            <li>
              <Link to='/events'>02 : Events</Link>
            </li>
            <li>
              <Link to='/about'>03 : About us</Link>
            </li>
            <li>
              <Link to='/contact'>04 : Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
