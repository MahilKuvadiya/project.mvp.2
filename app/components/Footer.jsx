import React from 'react'
import './footer.css'
import { Script } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <>
      <hr />
      <div className="legal">
        <div>
        <a href="./PrivacyPolicy" style={{ margin: '5px', fontSize: '17px' ,color:'white'}}> Privacy Policy</a>
        <a href="./Useragreement" style={{ margin: '5px', fontSize: '17px',color:'white' }}>User Agreement</a>
        </div>
        <div class="rounded-social-buttons">
        <a style={{ margin: '5px', fontSize: '17px',color:'white' }}>Contact Us On</a>
        <a class="social-button facebook" href="mailto:mvptrade42@gmail.com" style={{backgroundColor:'#9d9fa4'}}><i class="fa fa-envelope" style={{ color: 'red' }}></i></a>
        </div>
        <div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          <div class="rounded-social-buttons">
            <a class="social-button facebook" href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook-f"></i></a>
            <a class="social-button twitter" href="https://twitter.com/MVPtrade?t=8oqyukjUKBz9nYYKUVyLQQ&s=08 " target="_blank"><i class="fa fa-twitter"></i></a>
            <a class="social-button linkedin" href="https://www.linkedin.com/company/mvptrade/" target="_blank"><i class="fa fa-linkedin"></i></a>
            {/* <a class="social-button youtube" href="https://www.youtube.com/" target="_blank"><i class="fa fa-youtube"></i></a> */}
            <a class="social-button instagram" href="https://instagram.com/shopmvptrade?igshid=NGExMmI2YTkyZg==" target="_blank"><i class="fa fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </>

  )
}

export default Footer