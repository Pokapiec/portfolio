import React, { useEffect } from 'react';
import './Contact.scss';
import PhoneIcon from '../../icons/phone.svg';
import MailIcon from '../../icons/mail.svg';
import LinkedinIcon from '../../icons/linkedin.svg';
import GitIcon from '../../icons/github.svg';
import { useInView } from 'react-intersection-observer';


export default function Contact() {

  let options = {
      threshold: 0.95,
      triggerOnce: true
  }
  const [ContactRef, ContactInView] = useInView(options)

  useEffect(() => {
    if (!ContactInView) return
    let containers = document.querySelectorAll('.container')
    console.log('ZMIANA!')
    console.log(containers.style)

    containers.forEach((el) => {
      console.log(el.style)
      el.style.scrollSnapType = 'y proximity'
      console.log(el.style)
    })

  }, [ContactInView])

  return (
    <footer id="contact" ref={ContactRef}>
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
            <a href='https://www.linkedin.com/in/pawelokapiec/'>linkedin.com/in/pawelokapiec</a>
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
