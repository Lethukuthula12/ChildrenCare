import React from "react";
import { FaBars, FaChild } from "react-icons/fa";
import {NavBar,NavContainer, Logo , MobileIcon, NavItems, NavLink, NavMenu, NavBtn, NavBtnLink} from "./Navigation-bar.styled.js";

const Navbar = ({toggle}) => {
  return (
    <NavBar>
      <NavContainer>
        <Logo to="/">
          <FaChild />
          <FaChild />
          FutureAfrica
        </Logo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItems>
            <NavLink to="about">About</NavLink>
          </NavItems>
          <NavItems>
            <NavLink to="services">Services</NavLink>
          </NavItems>
          <NavItems>
            <NavLink to="contact">Contact</NavLink>
          </NavItems>
          <NavItems>
            <NavLink to="/singup">SignUp</NavLink>
          </NavItems>
          <NavBtn>
            <NavBtnLink>SignIn</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </NavContainer>
    </NavBar>
  );
};

export default Navbar;
