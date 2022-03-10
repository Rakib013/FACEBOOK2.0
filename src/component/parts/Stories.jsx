import React from 'react';
import styled from 'styled-components';
import Storie from './Storie';

function Stories() {
  return (
    <Container>
        <First>
            <Content>
                <div>
                    <img src="/icon/avatar.jpeg" alt="" />
                </div>
                <div>
                    <div>
                        <svg viewBox="0 0 20 20" fill='white' width="1em" height="1em"><g fill-rule="evenodd" transform="translate(-446 -350)"><g fill-rule="nonzero"><path d="M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z" transform="translate(354.5 159.5)"></path><path d="M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z" transform="translate(354.5 159.5)"></path></g></g></svg>
                    </div>
                    <p>Create Story</p>
                </div>
            </Content>
        </First>

        <Storiess>
            <Storie />
            <Storie />
            <Storie />
            <Storie />
            <Storie />

            <div>
                <svg viewBox="0 0 20 20" fill='white' width="1.2em" height="1.2em" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 py1f6qlh em6zcovv jnigpg78 odw8uiq3"><g fill-rule="evenodd" transform="translate(-446 -350)"><g fill-rule="nonzero"><path d="M101.751 211.001a1 1 0 0 0 1.415 1.415l5.208-5.209a1 1 0 0 0 0-1.414l-5.208-5.209A1 1 0 0 0 101.75 202l4.501 4.501-4.5 4.501z" transform="translate(355 153.5)"></path><path d="M94.334 207.5h12.812a1 1 0 1 0 0-2H94.333a1 1 0 1 0 0 2z" transform="translate(355 153.5)"></path></g></g></svg>
            </div>
        </Storiess>
    </Container>
  )
}

export default Stories;


const Container = styled.div`
    display: flex;
    width: 100%;
`

const Storiess = styled.div`
    display: flex;
    justify-content: space-between;
    grid-gap: 10px;
    position: relative;

    &>div:last-child{
        right: -20px;
        top: 40%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: #393a3a;
        position: absolute;
        width: 50px;
        height: 50px;
        cursor: pointer;
        transition: 0.3s;

        &:hover{
            background-color: var(--hover-color2);
        }
    }
`

const First = styled.div`
    margin-right: 10px;
`

const Content = styled.div`
    width: 100px;
    height: 200px;
    border-radius: 10px;
    background-color: var(--hover-color);
    overflow: hidden;
    cursor: pointer;

    &>div:first-child{
        height: 130px;
        &>img{
            transition: 0.3s;
            border-radius: 10px 10px 0 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &>div:last-child{
        background-color: var(--hover-color);
        border-radius: 0 0 10px 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 60px;
        position: relative;
        &>div{
            position: absolute;
            top: -20px;
            background-color: hsl(214deg 100% 59%);
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
            border: 4px solid #252626;
            border-radius: 50%;
        }

        &>p{
            margin-top: auto;
            margin-bottom: auto;
            font-size: 13px;
            font-weight: 100;
        }
    }

    &:hover{
        &>div:first-child{
            &>img{
                transform: scale(1.04);
            }
        }
    }
`
