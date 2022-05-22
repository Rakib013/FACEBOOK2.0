import React from 'react';
import styled from 'styled-components';

function Notification() {
  return (
    <>
        <Container id="notification">
            <Title>
                <h2>Notification</h2>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </Title>
            <Buttons>
                <Button isActive={true}>
                    All
                </Button>
                <Button isActive={false}>
                    Unread
                </Button>
            </Buttons>

            <SeeButton>
                <div>
                    Earlier
                </div>
                <div>
                    See all
                </div>
            </SeeButton>

            <NotificationList>
                <NotificationItem>
                    <div>
                        <img src="/icon/fara.jpeg" alt="" />
                        <i></i>
                    </div>
                    <div>
                        <b>Ilman Farabi</b> commented on <b> Nur jahan </b> Post.
                    </div>
                </NotificationItem>

                <NotificationItem>
                    <div>
                        <img src="/icon/fara.jpeg" alt="" />
                        <i></i>
                    </div>
                    <div>
                        <b>Ilman Farabi</b> commented on <b> Nur jahan </b> Post.
                    </div>
                </NotificationItem>

                <NotificationItem>
                    <div>
                        <img src="/icon/fara.jpeg" alt="" />
                        <i></i>
                    </div>
                    <div>
                        <b>Ilman Farabi</b> commented on <b> Nur jahan </b> Post.
                    </div>
                </NotificationItem>

                <NotificationItem>
                    <div>
                        <img src="/icon/fara.jpeg" alt="" />
                        <i></i>
                    </div>
                    <div>
                        <b>Ilman Farabi</b> commented on <b> Nur jahan </b> Post.
                    </div>
                </NotificationItem>

                <NotificationItem>
                    <div>
                        <img src="/icon/fara.jpeg" alt="" />
                        <i></i>
                    </div>
                    <div>
                        <b>Ilman Farabi</b> commented on <b> Nur jahan </b> Post.
                    </div>
                </NotificationItem>

                <NotificationItem>
                    <div>
                        <img src="/icon/fara.jpeg" alt="" />
                        <i></i>
                    </div>
                    <div>
                        <b>Ilman Farabi</b> commented on <b> Nur jahan </b> Post.
                    </div>
                </NotificationItem>

                <NotificationItem>
                    <div>
                        <img src="/icon/fara.jpeg" alt="" />
                        <i></i>
                    </div>
                    <div>
                        <b>Ilman Farabi</b> commented on <b> Nur jahan </b> Post.
                    </div>
                </NotificationItem>

                <NotificationItem>
                    <div>
                        <img src="/icon/fara.jpeg" alt="" />
                        <i></i>
                    </div>
                    <div>
                        <b>Ilman Farabi</b> commented on <b> Nur jahan </b> Post.
                    </div>
                </NotificationItem>

                <NotificationItem>
                    <div>
                        <img src="/icon/fara.jpeg" alt="" />
                        <i></i>
                    </div>
                    <div>
                        <b>Ilman Farabi</b> commented on <b> Nur jahan </b> Post.
                    </div>
                </NotificationItem>

                <NotificationItem>
                    <div>
                        <img src="/icon/fara.jpeg" alt="" />
                        <i></i>
                    </div>
                    <div>
                        <b>Ilman Farabi</b> commented on <b> Nur jahan </b> Post.
                    </div>
                </NotificationItem>

                <NotificationItem>
                    <div>
                        <img src="/icon/fara.jpeg" alt="" />
                        <i></i>
                    </div>
                    <div>
                        <b>Ilman Farabi</b> commented on <b> Nur jahan </b> Post.
                    </div>
                </NotificationItem>

                <NotificationItem>
                    <div>
                        <img src="/icon/fara.jpeg" alt="" />
                        <i></i>
                    </div>
                    <div>
                        <b>Ilman Farabi</b> commented on <b> Nur jahan </b> Post.
                    </div>
                </NotificationItem>

                <NotificationItem>
                    <div>
                        <img src="/icon/fara.jpeg" alt="" />
                        <i></i>
                    </div>
                    <div>
                        <b>Ilman Farabi</b> commented on <b> Nur jahan </b> Post.
                    </div>
                </NotificationItem>

                <NotificationItem>
                    <div>
                        <img src="/icon/fara.jpeg" alt="" />
                        <i></i>
                    </div>
                    <div>
                        <b>Ilman Farabi</b> commented on <b> Nur jahan </b> Post.
                    </div>
                </NotificationItem>

                <NotificationItem>
                    <div>
                        <img src="/icon/fara.jpeg" alt="" />
                        <i></i>
                    </div>
                    <div>
                        <b>Ilman Farabi</b> commented on <b> Nur jahan </b> Post.
                    </div>
                </NotificationItem>

                <NotificationItem>
                    <div>
                        <img src="/icon/fara.jpeg" alt="" />
                        <i></i>
                    </div>
                    <div>
                        <b>Ilman Farabi</b> commented on <b> Nur jahan </b> Post.
                    </div>
                </NotificationItem>

                <NotificationItem>
                    <div>
                        <img src="/icon/fara.jpeg" alt="" />
                        <i></i>
                    </div>
                    <div>
                        <b>Ilman Farabi</b> commented on <b> Nur jahan </b> Post.
                    </div>
                </NotificationItem>

                <NotificationItem>
                    <div>
                        <img src="/icon/fara.jpeg" alt="" />
                        <i></i>
                    </div>
                    <div>
                        <b>Ilman Farabi</b> commented on <b> Nur jahan </b> Post.
                    </div>
                </NotificationItem>
            </NotificationList>
        </Container>
    </>
  )
}

export default Notification;

const Container = styled.div`
    display: none;
    width: 350px;
    background-color: #323436;
    top: 0;
    left: 72px;
    z-index: 999999;
    position: fixed;
    padding: 0 20px;
    height: 100%;
    overflow-y: scroll;
`

const Title = styled.div`
    padding: 20px 0 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &>h2{
        font-size: 22px;
        font-weight: 600;
    }

    &>div{
        display: flex;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        justify-content: center;
        align-items: center;
        transition: 0.3s;
        &>span{
            width: 4px;
            height: 4px;
            background-color: #9ba1a8;
            display: block;
            border-radius: 50%;
            margin: 0 1px;
        }
        &:hover{
            background-color: #585a5c;
            cursor: pointer;
        }
    }
`

const Buttons = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
`

const Button = styled.div`
    background-color: ${props => props.isActive ? '#3a4d72' : '#4f5255'};
    margin-right: 10px;
    padding: 5px 10px;
    border-radius: 50px;
    color: ${props => props.isActive ? '#62a4f9' : '#9ba1a8'};
    cursor: pointer;
    font-size: 14px;
`

const SeeButton = styled.div`
    display: flex;
    justify-content: space-between;

    &>div:last-child{
        padding: 3px 5px;
        border-radius: 5px;
        color: #70abf8;
        font-size: 14px;
        transition: 0.3s;
        font-weight: 100;
        
        &:hover{
            background-color: #606672;
            cursor: pointer;
        }
    }
`

const NotificationList = styled.div`
    margin-top: 10px;
`

const NotificationItem = styled.div`
    display: flex;
    margin-bottom: 10px;
    &>div:first-child{
        display: flex;
        position: relative;


        &>img{
            height: 56px;
            width: 56px;
            object-fit: cover;
            border-radius: 50%;
        }
        &>i{
            height: 28px;
            width: 28px;
            background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yL/r/h2iqxBqDts0.png?_nc_eui2=AeFBkJUKoyPUzqp2xh7Vq3Aca0x3MbGzqF5rTHcxsbOoXgCbLnUdoXUpXmwYCdOokAgUgYMS89yr7oSjHN08Ovmx);
            background-position: 0px -696px;
            background-size: auto;
            background-repeat: no-repeat;
            display: inline-block;
            position: absolute;
            bottom: 0;
            right: 0;
        }
    }

    &>div:last-child{
        margin-left: 10px;
        font-size: 14px;
    }
`
