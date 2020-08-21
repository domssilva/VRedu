import React from 'react';
import { Link } from 'react-router-dom';

import Dropdown from '../Dropdown';

import vrLogo from '../../media/vr.png';
import './styles.scss';

export default function Navigation() {
  return (
    <nav role='navigation' tabIndex='0' className='navigation'>
      <div className='navigation__left'>
        <Link to='/' className='navigation__logo'>VR-edu</Link>
      </div>
      <div className='navigation__right desktop'>
        <Link to='/news' title='vr news'>News</Link>
        <Link to='/videos' title='watch vr content'>Videos</Link>
        <Link to='/resources' title='start learning!'>Resources</Link>
      </div>
      <div className='navigation__right mobile'>
        <Link to='/'>
          <img src={vrLogo} className='vr__logo' alt="vr logo"/>
        </Link>
        <Dropdown/>
      </div>
    </nav>
  )
}
