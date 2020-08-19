import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export default function Navigation() {
  return (
    <nav role='navigation' tabIndex='0' className='navigation'>
      <div className='navigation__left'>
        <Link to='/' className='logo'>VR-edu</Link>
      </div>
      <div className='navigation__right'>
        <Link to='/videos' title=''>Videos</Link>
        <Link to='/resources' title='start learning!'>Resources</Link>
      </div>
    </nav>
  )
}
