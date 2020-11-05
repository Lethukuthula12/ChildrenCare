import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWraper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoutes,
} from "./Navigation-bar.styled";

const SideBar = ({isOpen, toggle})=>{

  return (
    <SidebarContainer isOpen ={isOpen} onClick={toggle}>
      <Icon toggle={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWraper>
        <SidebarMenu>
          <SidebarLink to="about">About</SidebarLink>
          <SidebarLink to="services">Services</SidebarLink>
          <SidebarLink to="contact">Contacts</SidebarLink>
          <SidebarLink to="signup">Sign Up</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
        <SidebarRoutes to ="/signin">Sign In</SidebarRoutes>
        </SideBtnWrap>
      </SidebarWraper>
    </SidebarContainer>
  );

}
  
export default SideBar;
