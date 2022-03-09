import React from 'react';
import styled from 'styled-components';
import CreatePost from './parts/CreatePost';
import Stories from './parts/Stories';

function HomeCenter() {
  return (
    <>
      <Container>
        <Stories />
        <CreatePost />
      </Container>
    </>
  )
}

export default HomeCenter;

const Container = styled.div`
  padding: 20px;
`
