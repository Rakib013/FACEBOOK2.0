import React from 'react';
import styled from 'styled-components';

function Storie() {
  return (
    <>
        <Content>
            <img src="/icon/avatar2.jpeg" alt="" />
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
`