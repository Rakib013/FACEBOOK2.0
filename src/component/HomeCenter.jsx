import React from 'react';
import styled from 'styled-components';
import CreatePost from './parts/CreatePost';
import PicPost from './parts/PicPost';
import ProfPost from './parts/ProfPost';
import Room from './parts/Room';
import Stories from './parts/Stories';
import TextPost from './parts/TextPost';
import VideoPost from './parts/VideoPost';

function HomeCenter() {
  return (
    <>
      <Container>
        <Stories />
        <CreatePost />
        <Room />

        <Posts>
          <PicPost />
          <VideoPost />
          <TextPost />
          <ProfPost />
          <PicPost />
          <PicPost />
        </Posts>

      </Container>
    </>
  )
}

export default HomeCenter;

const Container = styled.div`
  padding: 20px;
`

const Posts = styled.div`
  
`