import React from 'react'
import './index.css'
import aboutImg from '../assets/images/custom-about.jpg'

export const About = () => {
  return (
    <div className='section-container'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12'>
            <div className='section-container-spacer text-center'>
              <h1 className='h2'>03 : About Us</h1>
            </div>

            <div className='row'>
              <div className='col-md-10 col-md-offset-1'>
                <div className='row'>
                  <div className='col-xs-12 col-md-6'>
                    <p>
                      Code Quest is an online mentorship site that gives you an
                      adventurous experience which helps you scale through your
                      career as a Software Engineer
                    </p>
                    <h3>Raising Great Nerds</h3>
                    <p>
                      With great passion, tools and technical expertise, we put
                      would invest in your future and dreams of becoming the
                      great Nerd you have always seen in your visions
                    </p>
                    <h3>We have the Best Mentors</h3>
                    <p>
                      We put in a lot of work and trainings to ensure that we
                      offer the best training service to our students/trainees
                    </p>
                  </div>
                  <div className='col-xs-12 col-md-6'>
                    <img src={aboutImg} className='img-responsive' alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
