import React from 'react'
import { NavLink } from 'react-router-dom'
import { Github, LinkedIn, Twitter } from '../components/AllSvgs'
import styled from "styled-components"
import { darkTheme } from '../components/Themes'

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
background-color: ${props => props.color = "dark" ? darkTheme.text : darkTheme.body};
`

function SocialIcons(props) {
  return (
    <Icons>

      <div>
        <NavLink style={{color: "inherit"}} target="_blank" to={{pathname:"https://github.com/ZiyadHammad"}}>
          <Github  width={25} height={25} fill={ props.theme === "dark" ? darkTheme.text : darkTheme.body } />
        </NavLink>
      </div>

      <div>
        <NavLink style={{color: "inherit"}} target="_blank" to={{pathname:"https://www.linkedin.com/in/ziyad-hammad/"}}>
          <LinkedIn width={25} height={25} fill={ props.theme === "dark" ? darkTheme.text : darkTheme.body } />
        </NavLink>
      </div>

      <div>
        <NavLink style={{color: "inherit"}} target="_blank" to={{pathname:"https://twitter.com/_ZiyadHammad"}}>
          <Twitter width={25} height={25} fill={ props.theme === "dark" ? darkTheme.text : darkTheme.body } />
        </NavLink>
      </div>

      <Line color={props.theme} />
    </Icons>
  )
}

export default SocialIcons