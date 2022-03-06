import React from 'react'
import styled from 'styled-components';
import Nav from '../component/Nav';
import HomeLeft from '../component/HomeLeft';


function Home() {
  return (
    <>
      <Nav />
      <Container>
        <Left>
          <HomeLeft />
        </Left>

        <Center>
          center
        </Center>

        <Right>
          right
        </Right>

      </Container>
    </>
  )
}

export default Home;

const Container = styled.div`
  left: 78px;
  top: 0;
  position: fixed;
  background-color: var(--bg-color);
  width: 100%;
  height: 100vh;
  display: flex;
`

const Left = styled.div`
  flex-basis: 23%;
  overflow-y: scroll;

  @media (max-width: 1100px) {
    flex-basis: 0%;
    display: none;
  }
`
const Center = styled.div`
  flex-basis: 48%;

  @media (max-width: 1100px) {
    flex-basis: 65%;
  }
`
const Right = styled.div`

  @media (max-width: 900px) {
    display: none;
  }
`