import React, { useState } from 'react';
import styled from 'styled-components';
import Comments from './Comments';

function PicPost() {
    const [viewComments, setViewComments] = useState(false);
  return (
    <>
        <Container>
            <Content>
                <User>
                    <img src="/icon/nushrat.png" alt="" />
                    <div>
                        <p>Nushrat Jahan</p>
                        <span>11h . <svg viewBox="0 0 16 16" fill='#828282' width="1em" height="1em" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 py1f6qlh em6zcovv cyypbtt7 fwizqjfa" title="Shared with Public"><title>Shared with Public</title><g fill-rule="evenodd" transform="translate(-448 -544)"><g><path d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434" transform="translate(354 143.5)"></path><path d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096" transform="translate(354 143.5)"></path><path fill-rule="nonzero" d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z" transform="translate(354 143.5)"></path></g></g></svg></span>
                    </div>

                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </User>

                <Post>
                    <img src="/icon/avatar.jpeg" alt="" />
                </Post>

                <Bottom>
                    <Info>
                        <img src="/icon/post/like.svg" alt="" />
                        <img src="/icon/post/love.svg" alt="" />
                        <img src="/icon/post/wow.svg" alt="" />

                        <p>
                            Sadman ahammed choudhury, Sheikh Maruf and 4 others
                        </p>

                        <span onClick={e=>setViewComments(!viewComments)}>
                            3 Comments
                        </span>
                    </Info>
                    <Border></Border>
                    <Action>
                        <Button spos="-247px" url="https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/BD8jnr5MFVK.png?_nc_eui2=AeGb6jbbWWYXRCdM6-3ATFGhu64OwPv9RGK7rg7A-_1EYuWZ6609xuoV1NzpqI9QdyRdkHwyF2JYR5ZoQ4qOzpbr">
                            <i></i>
                            Like
                        </Button>
                        <Button spos="-209px" url="https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/BD8jnr5MFVK.png?_nc_eui2=AeGb6jbbWWYXRCdM6-3ATFGhu64OwPv9RGK7rg7A-_1EYuWZ6609xuoV1NzpqI9QdyRdkHwyF2JYR5ZoQ4qOzpbr">
                            <i></i>
                            Comment
                        </Button>
                        <Button spos="-266px" url="https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/BD8jnr5MFVK.png?_nc_eui2=AeGb6jbbWWYXRCdM6-3ATFGhu64OwPv9RGK7rg7A-_1EYuWZ6609xuoV1NzpqI9QdyRdkHwyF2JYR5ZoQ4qOzpbr">
                            <i></i>
                            Share
                        </Button>
                    </Action>
                    <Border></Border>

                    <Comments viewComments={viewComments} />
                </Bottom>

            </Content>
        </Container>
    </>
  )
}

export default PicPost

const Container = styled.div`
    background-color: var(--box-color);
    width: 655px;
    margin-top: 20px;
    overflow: hidden;
    border-radius: 10px;
`

const Content = styled.div`
    
`

const User = styled.div`
    padding: 7px 20px;
    display: flex;
    &>img{
        border: 1px solid #e6e6e6;
        padding: 1px;
        width: 40px;
        height: 40px;
        object-fit: cover;
        border-radius: 50%;
        margin-right: 10px;
    }

    &>div{
        display: flex;
        flex-direction: column;

        &>p{
            font-size: 14px;
            cursor: pointer;
            &:hover{
                text-decoration: underline;
            }
        }

        &>span{
            display: flex;
            align-items: center;
            color: #828282;
            font-size: 12px;

            &>svg{
                margin-left: 8px;
            }
        }
    }

    &>div:last-child{
        margin-left: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        transition: 0.3s;
        
        &>span{
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background-color: var(--hover-color2);
            margin: 0 1px;
            transition: 0.3s;
        }
        
        &:hover{   
            background-color: var(--hover-color);
            &>span{
                background-color: white;
            }
        }
    }
`

const Post = styled.div`
    &>img{
        object-fit: cover;
        width: 100%;
    }
`

const Bottom = styled.div`
    padding: 10px 20px;
`

const Info = styled.div`
    display: flex;
    align-items: center;

    &>p{
        font-size: 14px;
        color: #828282;
        margin-left: 10px;
        font-weight: 100;
        cursor: pointer;

        &:hover{
            text-decoration: underline;
        }
    }

    &>img{
        width: 18px;
        height: 18px;
        border-radius: 50%;
        cursor: pointer;
        margin-right: -4px;
    }

    &>span{
        margin-left: auto;
        color: #828282;
        cursor: pointer;

        &:hover{
            text-decoration: underline;
        }
    }
`

const Border = styled.div`
    width: 100%;
    height: 1px;
    margin: 5px 0;
    background-color: var(--hover-color);
`

const Action = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #828282;
    width: 100%;
    cursor: pointer;
    margin-right: 2px;
    height: 30px;
    border-radius: 5px;

    &>i{
        background-image: url(${props => props.url});
        background-position: 0px ${props => props.spos};
        background-size: auto;
        -webkit-filter: invert(62%) sepia(98%) saturate(12%) hue-rotate(175deg) brightness(90%) contrast(96%);
        width: 18px;
        height: 18px;
        background-repeat: no-repeat;
        display: inline-block;
        margin-right: 5px;
    }

    &:hover{
        background-color: var(--hover-color);
    }
`
