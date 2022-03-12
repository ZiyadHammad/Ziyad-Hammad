import React from 'react'
import { Github, LinkedIn, Twitter } from '../components/AllSvgs'
import styled from "styled-components"
import { darkTheme } from '../components/Themes'

const Box = styled.a`
text-decoration: none;
`

const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 0;
left: 2rem;

z-index: 3;

&>*:not(:last-child){
  margin: .5rem 0;
}
`

const Line = styled.span`
width: 2px;
height: 8rem;
background-color: ${props => props.color === "dark" ? darkTheme.text : darkTheme.body};

`

function SocialIcons(props) {
  return (
    <Icons>

      <div>
        <Box style={{color: "inherit"}} target="_blank" href="https://github.com/ZiyadHammad" >
          <Github  width={25} height={25} fill={ props.theme === "dark" ? darkTheme.text : darkTheme.body } />
        </Box>
      </div>

      <div>
        <Box style={{color: "inherit"}} target="_blank" href="https://www.linkedin.com/in/ziyad-hammad/">
          <LinkedIn width={25} height={25} fill={ props.theme === "dark" ? darkTheme.text : darkTheme.body } />
        </Box>
      </div>

      <div>
        <Box style={{color: "inherit"}} target="_blank" href="https://twitter.com/_ZiyadHammad" >
          <Twitter width={25} height={25} fill={ props.theme === "dark" ? darkTheme.text : darkTheme.body } />
        </Box>
      </div>

      <Line color={props.theme} />
    </Icons>
  )
}

export default SocialIcons