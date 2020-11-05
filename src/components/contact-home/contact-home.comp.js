import react from "react";
import { FaRegEnvelope, FaPhoneAlt, FaFacebook } from "react-icons/fa";
import { IconContext } from "react-icons";

import {
  ContactWrap,
  ContactlistMenu,
  ContactList,Container
} from "./contact-home.styled";

const ContactLine = ()=>{


  return (
    <div>
      <ContactWrap>
        <Container>
          <ContactlistMenu>
            <ContactList>
              <FaRegEnvelope size={24} className="icons" />
              Email:childcare@wecare.com
            </ContactList>

            <ContactList>
              <FaPhoneAlt className="icons" size={34} />
              Miss Misely(Principal): (+27) 112 254 228
            </ContactList>

            <ContactList>
              <FaPhoneAlt size={34} className="icons" />
              Miss Misely(Chair): (+27) 115 254 842
            </ContactList>
            <ContactList>
              <a href="https://www.facebook.com/" target="_blank">
                <IconContext.Provider value={{ color: "white" }}>
                  <FaFacebook size={15} className="icons" />
                </IconContext.Provider>
              </a>
            </ContactList>
          </ContactlistMenu>
        </Container>
      </ContactWrap>
    </div>
  );
}

export default ContactLine;