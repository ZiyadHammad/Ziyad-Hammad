import React from 'react'
import { motion } from 'framer-motion'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {darkTheme, mediaQueries} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitle';

import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`
const Spaceman = styled(motion.div)`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
  ${mediaQueries(40)`
          width: 60vw;
          height: 50vh;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);


  `};
  ${mediaQueries(30)`
          width: 50vw;
          height: auto;
          backdrop-filter: none;
          margin-top:2rem;

  `};

${mediaQueries(20)`
          padding: 1rem;
          font-size: calc(0.5rem + 1vw);
  `};
`




const AboutPage = () => {
    return (
        <ThemeProvider theme={darkTheme}>
<Box>

          <LogoComponent theme='dark'/>
          <SocialIcons theme='dark'/>
          <PowerButton style={{background: "#fcf6f4"}} />
          <ParticleComponent theme='dark' />

          <Spaceman
            initial={{ right: '-20%', top: '100%' }}
            animate={{
              right: '5%',
              top: '10%',
              transition: { duration: 2, delay: 0.5 },
            }}
          >
            <img src={astronaut} alt="spaceman" />
        </Spaceman>    
        <Main>
        I'm a full-stack software engineer currently based in the Northern Virginia Area. I'm a detail-oriented developer driven by learning new ways to create products to enhance our daily lives.
<br /> <br/>
My background is in Sales, Management, and Marketing, meaning that I bring a unique, customer-focused perspective to the way I approach web development.
<br/> <br/>
My hobbies are Video Gaming, Body Building, and Cooking. You can connect with me via social links.
        </Main>

        <BigTitle text="ABOUT" top="10%" rileftght="12%" />


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage