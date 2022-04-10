import React, { useState } from 'react';
import styled from 'styled-components';

function Person() {
  const [mouse, setMouse] = useState(false);
  console.log(mouse);
  return (
    <>
      <Container>
        <Profile mouse={mouse}>
          <div>
            <img src="/icon/avatar.jpeg" alt="" />
            <div></div>
          </div>
          <div>
            <h4>Rakibul Islam</h4>
            <Info>
              <img src="/icon/right/profileFriends.png" alt="" />
              <p>48 mutual friends inluding <b>Sagor ahammed</b> and <b>Fahimun</b></p>
            </Info>

            <Info>
              <img src="/icon/right/study.png" alt="" />
              <p>Studys B.Sc. in Computer Science and Engineering(CSE) at <b>East West University</b></p>
            </Info>
          </div>
        </Profile>
        <Persone onMouseOver={e=>setMouse(true)} onMouseOut={e=>setMouse(false)}>
            <div>
              <img src="/icon/avatar.jpeg" alt="" />
              <div></div>
            </div>
            <p>Rakibul Islam</p>
        </Persone>
      </Container>
    </>
  )
}

export default Person;

const Container = styled.div`
  position: relative;
`

const Profile = styled.div`
  position: absolute;
  z-index: 9999;
  max-width: 325px;
  top: -220px;
  right: 10px;
  background-color: #252626;
  padding: 10px;
  border-radius: 10px;
  display: ${props=>props.mouse?'flex':'none'};
  transition: 0.3s;

  box-shadow: 1px 1px 44px 0px rgba(255,255,255,0.12);
-webkit-box-shadow: 1px 1px 44px 0px rgba(255,255,255,0.12);
-moz-box-shadow: 1px 1px 44px 0px rgba(255,255,255,0.12);

  &:hover{
    display: flex;
  }

  &>div:first-child{
    position: relative;
    display: inline-flex;
    margin-right: 20px;

    &>img{
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 50%;
    }
    &>div{
      position: absolute;
      top: 73px;
      right: 10px;
      width: 20px;
      height: 20px;
      border: 2px solid var(--hover-color2);
      border-radius: 50%;
      background-color: #31a24c;
    }
  }

  &>div:last-child{
    &>h4{
      margin-bottom: 20px;
    }
  }
`


const Info = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 10px;

  &>p{
    font-weight: 200;
    font-size: 13px;
    line-height:1.34;
    color: #9ea1b8;

    &>b{
      &:hover{
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  &>img{
    margin-right: 10px;
  }
`

const Persone = styled.div`
  display: flex;
  align-items: center;
  padding: 7px;
  border-radius: 7px;
  margin: 1px 0;
  cursor: pointer;

  &>div{
    border: 2px solid #0062E0;
    position: relative;
    display: inline-flex;
    margin-right: 15px;
    border-radius: 50%;
    padding: 2px;
    &>img{
      width: 36px;
      height: 36px;
      object-fit: cover;
      border-radius: 50%;
    }

    &>div{
      bottom: 0;
      right: 0;
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: #31a24c;
      border: 1px solid var(--bg-color);
      border-radius: 50%;
    }
  }

  &>p{
    font-size: 14px;
    font-weight: 100;
  }

  &:hover{
    background-color: var(--hover-color);
  }

  
`