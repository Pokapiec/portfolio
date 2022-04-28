import React from 'react';
import './Header.scss';
import cvPhoto from '../../images/cv_photo_bg.png';


export default function Header() {
  return (
    <header >


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
