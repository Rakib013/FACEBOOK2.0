import React from 'react';
import styled from 'styled-components';
import CreatePost from './HomeCenter/createPost/CreatePost';
import PicPost from './HomeCenter/Posts/PicPost';
import ProfPost from './HomeCenter/Posts/ProfPost';
import Room from './HomeCenter/room/Room';
import Stories from './HomeCenter/story/Stories';
import TextPost from './HomeCenter/Posts/TextPost';
import VideoPost from './HomeCenter/Posts/VideoPost';
import PostModel from './HomeCenter/Posts/PostModel';

function HomeCenter() {
  return (
    <>
      <Container>
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
          <PostModel imgSrc={"/icon/grp1.png"}/>
          <PicPost />
          <VideoPost />
          <TextPost />
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