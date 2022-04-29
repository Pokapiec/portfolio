import React, { useEffect, useState } from 'react';
import './Header.scss';
import cvPhoto from '../../images/cv_photo_bg.png';
import BurgerIcon from '../../icons/burger.svg';


export default function Header() {
  const [nav, setNav] = useState(null);
  useEffect(() => {
    const navElem = document.querySelector('nav')
    setNav(navElem)

  }, [])
  const toggleNav = () => { nav.classList.toggle('responsive') }

  return (
    <header >
      <div onClick={toggleNav} className='burger'><img src={BurgerIcon} alt="-" /></div>

      <h5 className='intro'>Hi! My name is</h5>
      <h1 className='name'>Paweł Okapiec</h1>
      <h5 className='role-intro'>And i'm a</h5>
      <h4 className='role'>Web developer | Data engenieer</h4>

      <div className='blob'>
        <img src={cvPhoto} alt="Image" />
      </div>
    </header>
  )
}
