import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Dropdown from './Dropdown';
import SearchBar from '../SearchBar/SearchBar';

function Navbar({ setInput, input }) {

    /*************searchBar ***************/
    
	const [click, setClick] = useState(false);
	const [dropdown, setDropdown] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const onMouserEnter = () => {
		if (window.innerWidth < 960) {
			setDropdown(false);
		} else {
			setDropdown(true);
		}
	};
	const onMouserLeave = () => {
		if (window.innerWidth < 960) {
			setDropdown(false);
		} else {
			setDropdown(true);
		}
	};
	return (
		<>
			<nav className='navbar'>
				<Link to='/' className='navbar-logo'>
					BreedsApp
				</Link>
				<div className='menu-icon' onClick={handleClick}>
					<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
				</div>
				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
					<li className='nav-item'>
						<Link to='/home' className='nav-links' onClick={closeMobileMenu}>
							Home
						</Link>
					</li>
					{/* <li className='nav-item'
                        onMouseEnter={onMouserEnter}
                        onMouseLeave={onMouserLeave}
                    >

                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        Services <i className='fas fa-caret-down'/> 
                        </Link>
                        {dropdown && <Dropdown/>}
                    </li> */}
					<li className='nav-item'>
						<Link to='/about_us' className='nav-links' onClick={closeMobileMenu}>
							About Us
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
							Sign up
						</Link>
					</li>
				</ul>
				<SearchBar input={input} setInput={setInput} />
				<Button />
			</nav>
		</>
	);
}

export default Navbar;
