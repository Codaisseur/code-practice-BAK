import React from 'react'
import { Link } from 'react-router'
import { DateFormatter } from '../../helpers'
import './Footer.sass'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="left-items-wrapper">
          <ul className="social-media-links">
            <li><a href='https://twitter.com/codaisseur' target='_blank'> Twitter </a></li>
            <li><a href='https://www.facebook.com/codaisseur/' target='_blank'> Facebook </a></li>
            <li><a href='https://www.linkedin.com/company/development-bootcamp' target='_blank'> Linkedin </a></li>
            <li><a href='https://www.instagram.com/codaisseur/' target='_blank'> Instagram </a></li>
          </ul>
          <ul className="site-links">
            <li><a href='https://www.codaisseur.com/about' target='_blank'> About Codaisseur </a></li>
            <li><a href='https://www.developmentbootcamp.nl/terms-and-conditions' target='_blank'> Terms & Conditions </a></li>

            {/* TODO: Write Privacy Policy
            <li><a href='https://www.developmentbootcamp.nl/terms-and-conditions' target='_blank'> Terms & Conditions </a></li> */}

          </ul>
        </div>

        <div className="right-items-wrapper">
        <p> &copy; <DateFormatter format="YYYY" /> Codaisseur </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
