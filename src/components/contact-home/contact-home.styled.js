import styled from "styled-components";



 export const ContactWrap = styled.div`
   display: flex;
   justify-content: center;
   background: var(--primary-color);
   color: white;
   z-index: 10;

   @media screen and (max-width: 960px) {
     transition: 0.8s all ease;
     flex-direction: column;
   }
 `;

 export const Container = styled.div`
  
 `;


export const ContactlistMenu = styled.ul`
  display: flex;
  background: var(--primary-color);
  margin: 0 3rem ;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    flex-direction: column;
    font-size: 15px;
  }
`;

export const ContactList = styled.li`
  color: #fff;
  display: flex;
  width: 100%;
  align-items: center;
  background: var(--primary-color);
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  font-family: "Comic Neue", cursive;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    flex-direction: column;

  }
`;
