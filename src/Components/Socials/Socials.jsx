import React, {useEffect, useState} from 'react'
import LinkedInIcon from '../../icons/linkedin.svg';
import EmailIcon from '../../icons/email.svg';
import GitHubIcon from '../../icons/github.svg';
import './Socials.scss';

export default function Socials() {
  const [contactRef, setContactRef] = useState(null);
  useEffect(() => {
    let contact = document.getElementById("contact");
    setContactRef(contact)
  }, [])


  return (
    <aside className='socials'>
      <div className='email' onClick={() => contactRef.scrollIntoView({behavior: "smooth"})}>
          <img src={EmailIcon} alt="email" />
        </div>
        <div className='linkedin'>
          <a href="https://www.linkedin.com/in/pawe%C5%82-okapiec/" target="_blank">
            <img src={LinkedInIcon} alt="linkedin" />
          </a>
        </div>
        
        <div className='github'>
          <a href="https://github.com/Pokapiec" target="_blank">
            <img src={GitHubIcon} alt="git" />
          </a>
        </div>
        <div className='vertical-line'></div>
      </aside>
  )
}
