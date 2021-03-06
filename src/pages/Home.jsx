import React from 'react'
import styled from 'styled-components';
import Nav from '../component/Nav';
import HomeLeft from '../component/HomeLeft';
import HomeRight from '../component/HomeRight';
import HomeCenter from '../component/HomeCenter';


function Home() {
  return (
    <>
      <Nav />
      <Container>
        <Left>
          <HomeLeft />
        </Left>

        <Center>
          <HomeCenter />
        </Center>

        <Right>
          <HomeRight />
        </Right>

      </Container>
    </>
  )
}

export default Home;

const Container = styled.div`
  left: 73px;
  top: 0;
  right: 0;
  position: fixed;
  background-color: var(--bg-color);
  width: 100%;
  height: 100vh;
  display: flex;
`

const Left = styled.div`
  flex-basis: 310px;
  overflow-y: scroll;

  @media (max-width: 1100px) {
    flex-basis: 0%;
    display: none;
  }
`
const Center = styled.div`
  flex-basis: 710px;
  overflow: auto;

  &::-webkit-scrollbar{
    display: none;
  }

  @media (max-width: 1100px) {
    flex-basis: 65%;
  }
`
const Right = styled.div`
  flex-basis: 350px;
  overflow: auto;
  @media (max-width: 900px) {
    display: none;
  }
`