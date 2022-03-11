import React from 'react';
import styled from 'styled-components';

function Storie() {
  return (
    <>
        <Content>
            <img src="/icon/fahi.jpg" alt="" />
            <div>
              <img src="/icon/avatar.jpeg" alt="" />
              <p>Nushrat Jahan Nilu</p>
            </div>
        </Content>
    </>
  )
}

export default Storie;

const Content = styled.div`
  width: 100px;
  height: 200px;
  border-radius: 10px;
  background-color: var(--hover-color);
  overflow: hidden;
  cursor: pointer;
  position: relative;
  transition: 0.3s;

  display:inline-block;
  background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 100%); /* FF3.6+ */
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(0,0,0,0.65)), color-stop(100%,rgba(0,0,0,0))); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%); /* Opera 11.10+ */
  background: -ms-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%); /* IE10+ */
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */

  &>img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    position:relative;
    z-index:-1;
    display:block;
    transition: 0.3s;
  }

  &>div{
    position: absolute;
    top: 5px;
    left: 5px;

    &>img{
      width: 36px;
      height: 36px;
      object-fit: cover;
      border-radius: 50%;
      border: 4px solid #0062E0;
    }

    &>p{
      font-size: 14px;
      margin-top: 100%;
    }
  }

  &:hover{
    &>img{
      transform: scale(1.04);
    }
  }
`