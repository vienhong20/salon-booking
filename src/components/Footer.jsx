import React from 'react';
import styled from "styled-components";
import { BsFacebook, BsTwitter, BsYoutube, BsBehance } from 'react-icons/bs'

function Footer() {
  return (
    <Foot>
      <span>
        &copy React Website Transition Animation
      </span>
      <div>
        <BsFacebook />
        <BsTwitter />
        <BsYoutube />
        <BsBehance />
      </div>
    </Foot>
  );
}

const Foot = styled.footer`
background-color: var(--primary-color);
color: #fff;
display:flex;
justify-content: space-between;
align-items: center;
padding: 5rem 10rem;
.footer__social__icons {
  display: flex;
  gap: 2rem;
  svg {
    font-size: 1.4rem;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    &:hover {
      color: var(--secondary-color);
    }   
  }
}
`;

export default Footer