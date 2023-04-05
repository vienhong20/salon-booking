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
        <div className="contact__data">
          <div className="contact_data_description">
            <h4>Just to say hi !!!</h4>
            <p>
              If you have any questions simply use the following contact details.
            </p>
            <p>
              Business Owners to take their Online Presence to the next level. We are in the business of Bulk SMS, Digital Marketing.
            </p>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>     
      </Section>
  )
}


const Section = styled.section``;

export default Contact
