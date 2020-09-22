import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import webImg from '../assets/images/Webinar1.jpeg'

export const Events = () => {
  return (
    <div className='section-container'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-8 col-sm-offset-2 section-container-spacer'>
            <div className='text-center'>
              <h1 className='h2'>02 : Upcoming Event</h1>
              <p>Powered By CodeQuest</p>
            </div>
          </div>

          <div className='col-md-12'>
            <div id='myCarousel' className='carousel slide projects-carousel'>
              <div className='carousel-inner'>
                <div className='item active'>
                  <div className='row'>
                    <div className='col-sm-4'>
                      <Link to='/event'>
                        <img src={webImg} alt='' className='img-responsive' />
                      </Link>
                      <div className='card-container card-container-lg'>
                        <h4>001/001</h4>
                        <h3>ABC info about Programming</h3>
                        <p>
                          An online Programming Webinar training for all
                          beginners who would love to build a career in Software
                          Development.  

                        </p>
                        <Link to='/event' className='btn btn-default'>
                          Discover
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className='left carousel-control'
              href='#myCarousel'
              data-slide='prev'
            >
              ‹
            </a>

            <a
              className='right carousel-control'
              href='#myCarousel'
              data-slide='next'
            >
              ›
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
