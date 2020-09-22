import React from 'react'
import eventImg from '../assets/images/Webinar1.jpeg'
import './index.css'

export const Event = () => {
  return (
    <div className='section-container'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12'>
            <img src={eventImg} className='img-responsive' alt='' />
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
                <li>An online Programming Webinar for all beginners who would love
                to discover the truth behind becoming sucessful in building a
                Software Career and pursuing it at any cost. </li>
                <ul>
                <li>As a major part of our vision to raise great nerds, we would be most privileged to
                have you allow us invest in your future and dreams of becoming
                the great Nerd you have always seen in your visions.</li>                
                <li>To begin, click the link above to register for our upcoming webinar coming up on the 10th
                of October.</li>
                <li>After payment, a mail will be forwarded to to your
                account confirming your registeration and then we will send you
                an invite link on Zoom. </li>
                <li>We will also be giving you an E-book
                containing the details shared in the session.</li> 
                <li>There'd be lots of opportunity to ask questions from any one of the facilitators. </li>
                This is only the beginning of the great plans codequest has towards acheiving
                your vision. 
                </ul>
                <em>This can't be all! </em>
                <br/>
                More details about our next move will be unveiled during the webinar.
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
