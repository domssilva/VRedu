import React from 'react';

import { FaHeart } from 'react-icons/fa';

import './styles.scss';

const Home = () => {
  return (
    <main className="home">
      <div className="home__intro">
        <p>Welcome to VR-EDU, a website to share free educational resources about VR development.</p>
      </div>
      <footer>
        <small>Made with <a href="https://github.com/domssilva" target="_blank" rel="noopener noreferrer"><FaHeart/></a></small>
      </footer>
    </main>
  )
}

export default Home;
