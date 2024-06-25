import React from 'react'
import Container from "@mui/material/Container";
import Input from "@mui/material/Input";
import InputAdornment from '@mui/material/InputAdornment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Divider from '@mui/material/Divider'
import Link from '@mui/material/Link'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import CommonButton from "../../form/CommonButton";
import ApplePay from '../../../assets/svg/ApplePay.svg'
import GPay from '../../../assets/svg/GPay.svg'
import Mastercard from '../../../assets/svg/Mastercard.svg'
import Paypal from '../../../assets/svg/Paypal.svg'
import Visa from '../../../assets/svg/Visa.svg'
import './Footer.scss'

const Footer = () => {
  return (
    <>
      <div className='footer-wrapper'>
        <Container maxWidth='xl' className='container newsletter-container'>
          <div className='newsletter-banner'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</div>
          <div className='newsletter-form'>
            <Input
              placeholder="Enter your email address"
              className='newsletter-email'
              disableUnderline
              startAdornment={
                <InputAdornment position='start'>
                  <MailOutlineIcon />
                </InputAdornment>
              }
            />
            <div className='button-subscribe'>
              <CommonButton
                variant='outlined'
                bgColor={'#FFFFFF'}
                btnText={'Subscribe to Newsletter'}
                color={'#000000'}
                borderColor={'rgba(0,0,0,.1)'}></CommonButton>
            </div>
          </div>
        </Container>
        <Container maxWidth='xl' className='container footer-contents-wrapper'>
          <div className='footer-contents'>
            <div className='footer-column-logo'>
              <div className='app-icon'>Shop.co</div>
              <div className='logo-text'>We have clothes that suits your style and which you’re proud to wear. From women to men.</div>
              <div className='social-links'>
                <TwitterIcon className='social-link' />
                <FacebookOutlinedIcon className='social-link' />
                <InstagramIcon className='social-link' />
                <GitHubIcon className='social-link' />
              </div>
            </div>
            <div className='footer-links-wrapper'>
              <div className='footer-column'>
                <span className='footer-link-title'>Company</span>
                <Link to='/' className='footer-link'>About</Link>
                <Link to='/' className='footer-link'>Features</Link>
                <Link to='/' className='footer-link'>Works</Link>
                <Link to='/' className='footer-link'>Careers</Link>
              </div>
              <div className='footer-column'>
                <span className='footer-link-title'>Help</span>
                <Link to='/' className='footer-link'>Customer Support</Link>
                <Link to='/' className='footer-link'>Delivery Details</Link>
                <Link to='/' className='footer-link'>Terms & Conditions</Link>
                <Link to='/' className='footer-link'>Privacy Policy</Link>
              </div>
              <div className='footer-column'>
                <span className='footer-link-title'>FAQ</span>
                <Link to='/' className='footer-link'>Account</Link>
                <Link to='/' className='footer-link'>Manage Deliverables</Link>
                <Link to='/' className='footer-link'>Orders</Link>
                <Link to='/' className='footer-link'>Payments</Link>
              </div>
              <div className='footer-column'>
                <span className='footer-link-title'>Resources</span>
                <Link to='/' className='footer-link'>Free eBooks</Link>
                <Link to='/' className='footer-link'>Development Tutorial</Link>
                <Link to='/' className='footer-link'>How to - Blog</Link>
                <Link to='/' className='footer-link'>YouTube Playlist</Link>
              </div>
            </div>
          </div>
          <Divider />
          <div className='footer-end'>
            <div className='copyright'>Shop.co &copy; 2000-2024, All Rights Reserved</div>
            <div className='payment-options'>
              <div className='vendor'><img src={ApplePay} alt="" /></div>
              <div className='vendor'><img src={GPay} alt="" /></div>
              <div className='vendor'><img src={Mastercard} alt="" /></div>
              <div className='vendor'><img src={Paypal} alt="" /></div>
              <div className='vendor'><img src={Visa} alt="" /></div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Footer