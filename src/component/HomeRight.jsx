import React, { useState } from 'react';
import styled from 'styled-components';
import Ads from './parts/Ads';
import ContHead from './parts/ContHead';
import Person from './parts/Person';

function HomeRight() {
  return (
    <>
      <Container>
        <Top>
          <Head>
            <h4>Sponsored</h4>
          </Head>
          <Ads />
          <Ads />
          <Border></Border>
        </Top>

        <Contacts>
          <ContHead />
          <Peoples>
            <Person />
            <Person />
            <Person />
            <Person />
            <Person />
            <Person />
            <Person />
            <Person />
            <Person />
            <Person />
            <Person />
            <Person />
          </Peoples>
        </Contacts>
        <New>
          <i></i>
        </New>
      </Container>
    </>
  )
}

export default HomeRight;

const Container = styled.div`
  padding-top: 15px;
  position: relative;
`

const Top = styled.div`
  
`


const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;

  &>h4{
    font-weight: 500;
    font-size: 15px;
    color: #9ea1b8;
  }

`


const Border = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 1px;
  background-color: var(--hover-color2);
`

const Contacts = styled.div`
`

const Peoples = styled.div``


const New = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: var(--hover-color);
  padding: 15px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;

  &>i{
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/miQJlW-hK6T.png?_nc_eui2=AeGEhDfFoIFIHDsJCFRTcaQJSWfhDA9mzb1JZ-EMD2bNvQoShwp0fWjChhVqq-Mztd0C0VWbpixdg9BZhtn3PTIA);
    background-position: 0px -409px;
    filter: brightness(0) invert(1);
    background-size: auto;
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    display: inline-block;
  }

  &:hover{
    background-color: var(--hover-color2);
  }
`
