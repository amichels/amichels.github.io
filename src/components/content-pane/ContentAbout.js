import React from 'react';

// Components
import ContentTextWrap from './ContentTextWrap';

const ContentAbout = (props) => {

  return (
    <ContentTextWrap>
        <img src="/build/images/profile-img.png" />
        <p>
            Hello!
        </p>
        <p>
            My name is Gabby DeFonso and I'm a multi-media artist with a focus on graphic design. I graduated from Kansas State University with a BFA in Drawing and Studio Arts and I currently work in the Kansas City area for SoQuaint Clothing, a small online vintage shop. Through my work at SoQuaint I have gained experience as a stylist, photographer, sales associate and brand developer. Along with my full-time job I do freelance work on the side and I'd like to eventually design for a small local company.
        </p>
        <p>
            Feel free to contact me at <a href="mailto:gdefonso1991@gmail.com">gdefonso1991@gmail.com</a> or <a href="https://www.linkedin.com/in/gabrielle-defonso-25b22793">LinkedIn</a>!
        </p>
    </ContentTextWrap>
  )
}

export default ContentAbout;
