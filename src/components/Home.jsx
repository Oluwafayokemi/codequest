import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export const Home = () => {
  return (
    <div className='header-style'>
      <div className='hero-full-container background-image-container white-text-container'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12'>
              <div className='hero-full-wrapper'>
                <div className='text-content'>
                  <h1>
                    <br />
                    <div>
                      <span>
                        Begin Setting Up Your Career Path In Software
                        Development In 60 Days Or Less
                      </span>
                    </div>
                    <Link to="/events">
                      <button className='btn-class'>Click Here to Begin</button>
                    </Link>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
