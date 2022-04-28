import React from 'react';
import './Contact.scss';
import PhoneIcon from '../../icons/phone.svg';
import MailIcon from '../../icons/mail.svg';
import LinkedinIcon from '../../icons/linkedin.svg';
import GitIcon from '../../icons/github.svg';


export default function Contact() {

  return (
    <footer id="contact">
      <h2>Contact me</h2>
      <div className='contacts-container'>
        <div className='contact-field'>
          <img src={PhoneIcon} alt="" />
          <div className='contact-data'>
            <div className='contact-title'>Phone</div>
            <p>+48 883 859 041</p>
          </div>
        </div>


        <div className='contact-field'>
          <img src={MailIcon} alt="" />
          <div className='contact-data'>
            <div className='contact-title'>Email</div>
            <p>pokapiec@gmail.com</p>
          </div>
        </div>

        <div className='contact-field'>
          <img src={LinkedinIcon} alt="" />
          <div className='contact-data'>
            <div className='contact-title'>Linkedin</div>
            <a href='https://www.linkedin.com/in/pawe%C5%82-okapiec/'>linkedin.com/in/pawel-okapiec</a>
          </div>
        </div>

        <div className='contact-field'>
          <img src={GitIcon} alt="" />
          <div className='contact-data'>
            <div className='contact-title'>Github</div>
            <a href='https://github.com/Pokapiec'>github.com/Pokapiec</a>
          </div>
        </div>
      </div>

    </footer>
  )
}
