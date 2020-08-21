import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FaAlignJustify } from 'react-icons/fa'

import './styles.scss';

const Backdrop = ({closeDropdown}) => (
    <div onClick={closeDropdown} className="backdrop"></div>
  )

const Dropdown = () => {

  const [open, setOpen] = useState(false);
  const history = useHistory();
  
  function closeDropdownWhenRouteChanges() {
    history.listen((location, action) => {
      closeDropdown();
    });
  }

  function handleDropdown() {
    setOpen(!open);
  }

  function closeDropdown() {
    setOpen(false);
  }

  useEffect(() => {
    closeDropdownWhenRouteChanges();
  }, []);

  return (
    <section className='dropdown'>
        {
          open ? <Backdrop closeDropdown={closeDropdown}/> : null
        }
        <FaAlignJustify onClick={handleDropdown} className='dropdown__icon'/>
        <div className={`dropdown__container ${(open ? '' : 'closed')}`}>
          <Link className='dropdown__item' to='/' title='vr news'>Home</Link>
          <Link className='dropdown__item' to='/news' title='vr news'>News</Link>
          <Link className='dropdown__item' to='/videos' title='watch vr content'>Videos</Link>
          <Link className='dropdown__item' to='/resources' title='start learning!'>Resources</Link>
        </div>
    </section>
  )
}

export default Dropdown;
