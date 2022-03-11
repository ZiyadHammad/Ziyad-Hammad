import React from 'react'
import styled from 'styled-components'
import img from "../assets/Images/construction.jpg"
import PowerButton from '../subComponents/PowerButton'

const MainContainer = styled.div`
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
height:100vh;
width: 100vw;
opacity: 0.5;
display: flex;
justify-content: center;
`
const Container = styled.div`
display: flex;
justify-content: center;
// align-items: center;
flex-direction: column;
font-size: 5rem;
font-weight: 900;
color: black;
`


function Blog() {
  return (
    <MainContainer>
      <PowerButton theme="dark" />
      <Container>
        <h1>Website</h1>
        
        <h1>Under Construction</h1>
      </Container>
   </MainContainer>
  )
}

export default Blog