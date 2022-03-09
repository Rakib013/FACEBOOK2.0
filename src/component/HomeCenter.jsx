import React from 'react';
import styled from 'styled-components';
import Stories from './parts/Stories';

function HomeCenter() {
  return (
    <>
        <Container>
            <Stories />
        </Container>
    </>
  )
}

export default HomeCenter;

const Container = styled.div`
    padding: 20px;
`
