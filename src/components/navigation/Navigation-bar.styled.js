import styled from "styled-components";
import {Link as LinkRouter} from "react-router-dom"
import {Link as LinkScroll} from "react-scroll";
import { FaTimes } from "react-icons/fa";



export const NavBar = styled.nav`
  background: #f6f5f1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width:100;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  z-index: 10;
  width:100%;
  max-width: 1100px;
`;
export const Logo = styled(LinkRouter)`
  color: #000;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.9rem;
  font-weight: bold;
  display: flex;
 
  font-family: "Comic Neue", cursive;
  align-items: center;
  text-decoration: none;
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top:20;
    right:0;
    transform: translate(-100%, 60%);font-size: 1.8rem;
    cursor:pointer;
    color: #000;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 94px;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const NavItems = styled.li`
  height: 70px;
 
`;
export const NavLink = styled(LinkScroll)`
  color: #333;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 20px;
  font-family: "Comic Neue", cursive;

  &:active {
    border-bottom: 5px solid red;
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkRouter)`
  border-radius: 50px;
  background: #04bf87;
  white-space: nowrap;
  padding: 10px 30px;
  margin: 0 0 0 4rem;
  color: #fff;
  font-size: 17px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: "Comic Neue", cursive;

  &:hover {
    transition: all 0.2s ease-in-out;
    opacity: 0.8;
  }
`;

///////////////Side Bar///////////////////////////////////

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #04bf87;
  display: grid;
  align-items: center;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
color: #fff;
`

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
fron-size: 2rem;
cursor: pointer;
outline:none
`

export const SidebarWraper = styled.div`
color:#fff;
`
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 960px) {
    grid-template-rows: repeat(6, 60px);
  }
`;
export const SidebarLink = styled(LinkScroll)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.9rem;
font-family: var(--primary-font);
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration: none;
color: #fff;
cursor: pointer;

&:hover{
  color:#000;
  transition: 0.2 ease-in-out;
}
`;

export const SideBtnWrap = styled.div`
display: flex;
justify-content:center;
`
export const SidebarRoutes = styled(LinkRouter)`
  border-radius: 50px;
  background: #000;
  white-space: nowrape;
  padding: 16px 64px;
  color: #fff;
  font-size: 25px;
  outline: none;
  border: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;


  &:hover{
  color:#04bf61;
  transition: 0.2 ease-in-out;
  background: #fff;
}
`;

export default NavBar;