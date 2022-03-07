import React, { useState } from 'react';
import styled from 'styled-components';

function HomeRight() {
  const [adOption, setAdOption] = useState(false);
  console.log(adOption)
  return (
    <>
      <Container>
        <Top>
          <Head>
            <h4>Sponsored</h4>
          </Head>
          <Ad>
            <img src="/icon/grp1.png" alt="" />
            <div>
              <span>Click here to explore more and more and more</span>
              <a href="youtube.com">Youtube.com</a>
              <div onClick={e=>setAdOption(!adOption)}>
                <span></span><span></span><span></span>
              </div>
            </div>
          </Ad>
          <Border></Border>
        </Top>
      </Container>
    </>
  )
}

export default HomeRight;

const Container = styled.div`
  padding-top: 15px;
`

const Top = styled.div`
  
`

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  &>h4{
    font-weight: 500;
    font-size: 15px;
    color: #9ea1b8;
  }
`

const Ad = styled.div`
  background-color: rgba(199, 217, 255, 0.1);
  border-radius: 5px;
  padding: 8px;
  display: flex;
  align-items: center;
  margin-bottom: 3px;
  position: relative;
  cursor: pointer;

  &>img{
    width: 40%;
    height: 80px;
    object-fit: cover ;
    border-radius: 5px;
    margin-right: 5%;
  }

  &>div{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    position: relative;

    &>a{
      font-size: 12px;
      text-decoration: none;
      font-weight: 100;
      color: #9ea1b8;
    }

    &>span{
      font-size: 13px;
      font-weight: 200;
    }

    &>div{
      position: absolute;
      right: 0;
      top: -20px;
      display: flex;
      opacity: 1;
      width: 40px;
      height: 40px;
      background-color: var(--hover-color);
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      transition: opacity 0.3s ease-in-out;
      

      &>span{
        width: 4px;
        height: 4px;
        background-color: white;
        border-radius: 50%;
        margin-right: 3px;
      }

      &:hover{
        background-color: var(--hover-color2);
      }
    }
  }

  &:hover{
      &>div{
        &>div{
        opacity: 1;
      }
      }
    }
`

const Border = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 1px;
  background-color: var(--hover-color2);
`
