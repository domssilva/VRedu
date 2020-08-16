import React from 'react'

import './styles.scss';

export default function Navigation() {
  return (
    <nav role='navigation' tabIndex='0' className='navigation'>
      <div className='navigation__left'>
        <a href='/' className='logo'>VR-flix</a>
      </div>
      <div className='navigation__right'>
        <a href='/videos'>Videos</a>
        <a href='/resources'>Resources</a>
      </div>
    </nav>
  )
}
