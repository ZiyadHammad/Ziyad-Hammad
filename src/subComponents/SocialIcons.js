import React from 'react'
import { NavLink } from 'react-router-dom'
import { Github, LinkedIn, Twitter } from '../components/AllSvgs'
import styled from "styled-components"

const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 0;
left: 2rem;

z-index: 3;
`

function SocialIcons() {
  return (
    <Icons>

      <div>
        <NavLink to="/">
          <Github width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>

      <div>
        <NavLink to="/">
          <LinkedIn width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>

      <div>
        <NavLink to="/">
          <Twitter width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>

    </Icons>
  )
}

export default SocialIcons