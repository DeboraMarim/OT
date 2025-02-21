import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { MenuIcon, Nav, NavbarContainer, NavItem, NavLink, NavLogo, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import logo from './logoOT.png'
import './header.css'

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer className='logoHeader'>
            <NavLogo  to='/' onClick={toggleHome}>
              <img src={logo} alt="Logo" />
          </NavLogo>
            <MenuIcon onClick={toggle}>
              <FaBars />
            </MenuIcon>
            <NavMenu>
              <NavItem>
                <NavLink to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80} >Sobre</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Serviços</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='techs' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Techs</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink to='signup' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign Up</NavLink>
              </NavItem> */}
            </NavMenu>
            <NavBtn>
  <NavBtnLink 
    as="a"
    href="https://wa.me/5531997088385?text=Ol%C3%A1%2C%20Gostaria%20de%20fazer%20um%20or%C3%A7amento!" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ textDecoration: 'none' }}
  >
    Fale conosco
  </NavBtnLink>
</NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
