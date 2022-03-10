import React from 'react';
import styled from 'styled-components';

function Room() {
  return (
    <>
        <Container>
            <Users>
                <Button>
                    <i></i>
                    Create Room
                </Button>
                <User>
                    <img src="/icon/avatar.jpeg" alt="" />
                    <div></div>
                </User>

                <User>
                    <img src="/icon/nushrat.png" alt="" />
                    <div></div>
                </User>

                <User>
                    <img src="/icon/avatar2.jpeg" alt="" />
                    <div></div>
                </User>

                <User>
                    <img src="/icon/avatar3.png" alt="" />
                    <div></div>
                </User>

                <User>
                    <img src="/icon/avatar.jpeg" alt="" />
                    <div></div>
                </User>

                <User>
                    <img src="/icon/nushrat.png" alt="" />
                    <div></div>
                </User>

                <User>
                    <img src="/icon/avatar2.jpeg" alt="" />
                    <div></div>
                </User>

                <User>
                    <img src="/icon/avatar3.png" alt="" />
                    <div></div>
                </User>

                <User>
                    <img src="/icon/avatar.jpeg" alt="" />
                    <div></div>
                </User>

                <User>
                    <img src="/icon/nushrat.png" alt="" />
                    <div></div>
                </User>

                <User>
                    <img src="/icon/avatar2.jpeg" alt="" />
                    <div></div>
                </User>

                <User>
                    <img src="/icon/avatar3.png" alt="" />
                    <div></div>
                </User>
            </Users>
        </Container>
    </>
  )
}

export default Room;

const Container = styled.div`
    width: 615px;
    background-color: var(--box-color);
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    padding: 15px 20px;
    border-radius: 10px;
`

const Button = styled.div`
    display: flex;
    border: 2px solid rgb(45 136 255 / 20%);
    border-radius: 100px;
    align-items: center;
    font-size: 14px;
    padding: 0 10px;
    height: 35px;
    min-width: 130px;
    cursor: pointer;
    transition: 0.3s;

    &>i{
        background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/ym/r/5zaboDASSye.png?_nc_eui2=AeEuQeR48Pnr7UgWuI0ZdPQEBQyVXafYdJoFDJVdp9h0mkXMm65pZh2Jbhhm0tvONZR6UbHd_YZJgtpVtGjPsP76);
        background-position: 0 -219px;
        background-size: auto;
        width: 24px;
        height: 24px;
        background-repeat: no-repeat;
        display: inline-block;
        margin-right: 8px;
    }

    &:hover{
        background-color: rgb(45 136 255 / 20%);
    }
`

const Users = styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    
    &::-webkit-scrollbar{
        display: none;
    }
`

const User = styled.div`
    position: relative;
    display: inline-flex;
    cursor: pointer;
    margin: 0 10px;

    &>img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
    }
    &>div{
        bottom: 3px;
        right: 0;
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 1px solid var(--bg-color);
        background-color: #31a24c;
    }
`