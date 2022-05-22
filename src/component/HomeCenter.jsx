import React from 'react';
import styled from 'styled-components';
import CreatePost from './HomeCenter/createPost/CreatePost';
import ProfPost from './HomeCenter/Posts/ProfPost';
import Room from './HomeCenter/room/Room';
import Stories from './HomeCenter/story/Stories';
import PostModel from './HomeCenter/Posts/PostModel';
import Upload from './HomeCenter/uploadBox/Upload';

function HomeCenter() {
  return (
    <>
      <Container>
        <Upload />
        <Stories />
        <CreatePost />
        <Room />

        <Posts>
          <PostModel vidSrc={"/icon/video.mp4"}/>
          <ProfPost />
          <PostModel imgSrc={"/icon/grp1.png"}/>
          <PostModel imgSrc={"/icon/grp2.jpeg"}/>
          <PostModel imgSrc={"/icon/grp1.png"}/>
          <PostModel imgSrc={"/icon/grp2.jpeg"}/>
          <PostModel text="Hope you guys doing well!"/>
        </Posts>

      </Container>
    </>
  )
}

export default HomeCenter;

const Container = styled.div`
  position: relative;
  padding: 20px;
`

const Posts = styled.div`
  
`