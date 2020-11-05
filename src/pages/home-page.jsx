import React, {useState} from 'react'
import NavBar from "../components/navigation/navbar.comp";
import SideBar from "../components/navigation/side-bar.comp";
import ContactLine from "../components/contact-home/contact-home.comp";


const Home = () => {
const [isOpen, setIsOpen] = useState(false);

const toggle = () =>{
  setIsOpen(!isOpen);
}

  return (
    <div>
    <ContactLine/>
      <NavBar  toggle={toggle}/>
      <SideBar  isOpen ={isOpen} toggle ={toggle}/>
    </div>
  );
}

export default Home;
