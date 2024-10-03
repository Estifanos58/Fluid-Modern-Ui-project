import React from 'react'
import classes from './Footer.module.css'
import logo from '../../src/assets/logo.png'
function Footer() {
  return (
    <div className={classes.footer}>
        <div className={classes.footer__left}>
            <img src={logo} alt="" />
            <p>2024 Fluid AI</p>
        </div>
        <div className={classes.footer__right}>
            <div className={classes.right__one}>
                <p>Our Features</p>
                <p>Areas</p>
                <p>FAQs</p>
                <p>The Waitlist</p>
                <p>Contact us</p>
            </div>
            <div className={classes.right__two}>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
            </div>
        </div>

    </div>
  )
}

export default Footer