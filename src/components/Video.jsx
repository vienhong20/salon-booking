import React from 'react'
import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "components/useScroll";
import { videoAnimations } from "animation";

function Video() {
  const [element, controls] = useScroll();
  return (
    <Section ref={element}>
      <div className="background"></div>
      <motion.div className="video"
      variants={videoAnimations}
      animate={controls}
      transition={{
        delay: 0.03,
        type: "tween",
        duration: 0.8,
      }}
      >
      <iframe
          width="960"
          height="515"
          src="https://www.youtube.com/embed/2ffOXOfZzn0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </motion.div>

    </Section>
  )
}

const Section = styled.section`
background-color: #662d91aa;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
position: relative;
.video {
  z-index: 10;
}
`;


export default Video