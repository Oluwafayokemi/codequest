import React from 'react'
import './index.css'

export const Contact = () => {
  return (
    <div className='section-container'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12'>
            <div className='section-container-spacer text-center'>
              <h1 className='h2'>Have a question?: Send us a message</h1>
            </div>

            <div className='row'>
              <div className='col-md-10 col-md-offset-1'>
                <form
                  action='mailto:codequest.ng@gmail.com'
                  method='POST'
                  className='reveal-content'
                >
                  <div className='col-md-5 address-container'>
                    <ul className='list-unstyled'>
                      <li>
                        <span className='fa-icon'>
                          <i className='fa fa-phone' aria-hidden='true'></i>
                        </span>
                        08087318332
                      </li>
                      <li>
                        <span className='fa-icon'>
                          <i className='fa fa-at' aria-hidden='true'></i>
                        </span>
                        <a href='mailto:codequest.ng@gmail.com'>
                          codequest.ng@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
