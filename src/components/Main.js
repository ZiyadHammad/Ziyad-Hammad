import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import styled, {keyframes} from "styled-components"
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import {YinYang} from "./AllSvgs"



const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow:hidden;

position:relative;

h2,h3,h4,h5,h6{
  font-family: "Karla", sans-serif;
  font-weight:500;
}
`
const Container = styled.div`
padding: 2rem;
`
const Resume = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index: 1;
`

const Blog = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index: 1;
`
const Work = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top 50%;
left: calc(1rem + 2vw);
transform: rotate(-90deg) translate(-50%, -50%);
text-decoration: none;
z-index: 1;
`

const About = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index: 1;
`
const Skills = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index: 1;
`
const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`

const rotate = keyframes`
from{
  transform: rotate(0)
}
to{
  transform: rotate(360deg)
}
`
const Center = styled.div`
position: absolute;
top: ${props => props.click ? "85%" : "50%"};
left: ${props => props.click ? "92%" : "50%"};
transform: translate(-50%, -50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:first-child{
  animation: ${rotate} infinite 1.5s linear;
}

&>:last-child{
  display: ${props => props.click ? "none" : "inline-block"};
  padding-top: 2rem;
}

`

function Main() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  return (
    <MainContainer>
      <Container>
        <PowerButton />
        <LogoComponent />
        <SocialIcons />

          <Center click={click} >
            <YinYang onClick={() => handleClick()} width={click ? "120" : "200"} height={click ? "120" : "200"} fill="currentColor" />
            <span>Click Here</span>
          </Center>
        

        <Resume target="_blank" to={{pathname:"https://drive.google.com/file/d/1aWIzhp2ovUGvPkZTsaJUEJhoQm26DoTq/view"}}>
          <h3>
            Resume
          </h3>
        </Resume>

        <Blog to="/blog">
          <h3>
            Blog
          </h3>
        </Blog>

        <Work to="/work">
          <h3>
            Work
          </h3>
        </Work>

     <BottomBar>
        <About to="/about">
          <h3>
            About
          </h3>
        </About>
        <Skills to="/skills">
          <h3>
           My Skills
          </h3>
        </Skills>
    </BottomBar>

      </Container>
    </MainContainer>
  )
}

export default Main