import React from 'react'
import eventImg from '../assets/images/Webinar1.jpeg'
import './index.css'

export const Event = () => {
  return (
    <div className='section-container'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12'>
            <img
              src={eventImg}
              className='img-responsive'
              alt=''
            />
            <div className='card-container'>
              <div className='text-center'>
                <h1 className='h2'>001 : Online Webinar</h1>
                <p>
                  <button
                    style={{
                      background: '#c7254e',
                      border: 'none',
                      'border-radius': '3px',
                      padding: '8px'
                    }}
                  >
                    <a
                      style={{ color: '#fff', 'font-weight': 'bold' }}
                      href='https://flutterwave.com/pay/codequest46p0'
                    >
                      Register Here
                    </a>
                  </button>
                </p>
              </div>
              <p>
                An online Programming Webinar for all beginners who would love
                to discover the truth behind becoming sucessful in building a
                Software Career and pursuing it at any cost
              </p>

              <blockquote>
                <p>
                  "The great quest of life has always been to discover truth."
                </p>
                <small className='pull-right'>Joyce Meyer</small>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
