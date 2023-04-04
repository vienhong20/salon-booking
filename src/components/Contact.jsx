import React from 'react';
import styled from "styled-components";
import Title from './Title';

function Contact() {
  return (
    <Section id="contact">
      <Title value="contact" />
      <div className="contact">
        <div className="contact__title">
        <p>Stay in touch with me</p>
        <h2>Quick Contact</h2>
        </div>
        <div className="contact__data"></div>
      </div>     
      </Section>
  )
}


const Section = styled.section``;

export default Contact
