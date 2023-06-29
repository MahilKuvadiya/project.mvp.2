import React from 'react'
import './footer.css'

const Footer = () => {
  return (

    <div className="legal">
      <hr />
      <a href="./PrivacyPolicy" style={{margin:'20px'}}> Privacy Policy</a>
      <a href="./UserAgreement" style={{margin:'20px'}}>User Agreement</a>
    </div>
    
  )
}

export default Footer