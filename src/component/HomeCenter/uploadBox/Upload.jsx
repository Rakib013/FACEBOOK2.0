import React from 'react';
import styled from 'styled-components';

function Upload() {
    const popup = (e) => {
        document.getElementById('upload').style.display = 'none';
    }
  return (
    <>
        <Container id="upload">
            <Content>
                <Top>
                    <h4>Create Post</h4>
                    <div onClick={popup}>
                        <i></i>
                    </div>
                </Top>

                <User>
                    <img src="./icon/khamba.jpg" alt="" />
                    <div>
                        <h5>Khamba</h5>
                        <div>
                            <img src="/icon/public.png" alt="" />
                            Public
                            <i></i>
                        </div>
                    </div>
                </User>

                <Context>
                    <div>
                        <textarea placeholder="What's on your mind?" name="" id="" ></textarea>
                        <i></i>
                    </div>
                    
                    <Box>
                        <Button>
                            <div>
                                <div>
                                    <i></i>
                                </div>
                                <h4>Add Photos/Videos</h4>
                                <span>or drag and drop</span>
                            </div>
                        </Button>
                    </Box>
                    <Bottom>
                        <h4>Add to your post</h4>

                        <div>
                            <Action pos="-208px" ul="https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/0wAnBf1VLoF.png?_nc_eui2=AeGNwyi0lmqABhNs5AW38mDogSkrYW-PEX6BKSthb48Rfi2uky22pzQngO07c6TYXKK4Py2rc5PhVXT87ituRpMK">
                                <i></i>
                            </Action>

                            <Action pos="-183px" ul="https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/0wAnBf1VLoF.png?_nc_eui2=AeGNwyi0lmqABhNs5AW38mDogSkrYW-PEX6BKSthb48Rfi2uky22pzQngO07c6TYXKK4Py2rc5PhVXT87ituRpMK">
                                <i></i>
                            </Action>

                            <Action pos="-158px" ul="https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/0wAnBf1VLoF.png?_nc_eui2=AeGNwyi0lmqABhNs5AW38mDogSkrYW-PEX6BKSthb48Rfi2uky22pzQngO07c6TYXKK4Py2rc5PhVXT87ituRpMK">
                                <i></i>
                            </Action>

                            <Action pos="-225px" ul="https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/HyeXO0sd7uk.png?_nc_eui2=AeGj4mkoo6FpJZ4XkleN4zVx35jAF9obhc_fmMAX2huFzwELVn8DCnyROCRj10GUduH959YnXV-zO2fQeJF0wGtm">
                                <i></i>
                            </Action>
                        </div>
                    </Bottom>

                    <Submit>
                        Post
                    </Submit>
                </Context>

            </Content>
        </Container>
    </>
  )
}

export default Upload;

const Container = styled.div`
    position: fixed;
    background-color: rgba(0,0,0,0.5);
    z-index: 9999999999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    display: none;
`

const Content = styled.div`
    background-color: rgb(37 38 38);
    width: 35%;
    border-radius: 10px;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 10px 0 0;

    &>h4{
        margin-left: auto;
    }

    &>div{
        cursor: pointer;
        margin-left: auto;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        height: 40px;
        background-color: rgb(64 65 65);
        &>i{
            background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/oDuNIMnwGU7.png?_nc_eui2=AeEimRv7vk86OY0i_y9Vq7j7waVvHGYZE2PBpW8cZhkTY3locNtkwzmSoaFDOmoJK3HT6Vht613quQKMX8l3o0VQ);
            background-position: -126px -67px;
            background-size: auto;
            filter: brightness(0) invert(1);
            width: 20px;
            height: 20px;
            background-repeat: no-repeat;
            display: inline-block;
        }

        &:hover{
            background-color: rgb(90 90 90);
            transition: 0.2s;
        }
    }
`

const User = styled.div`
    display: flex;
    align-items: center;
    border-top: 0.2px solid #474646;
    padding: 10px;
    margin-top: 4px;
    &>img{
        width: 45px;
        height: 45px;
        object-fit: cover;
        border-radius: 50%;
    }

    &>div{
        margin-left: 10px;

        &>h5{
            font-size: 14px;
            font-weight: 300;
        }

        &>div{
            cursor: pointer;
            display: flex;
            align-items: center;
            background-color: rgb(64 65 65);
            font-size: 12px;
            font-weight: 100;
            padding: 3px;
            border-radius: 3px;
            &>img{
                margin-right: 3px;
                filter: brightness(0) invert(1);
            }
            &>i{
                background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/oDuNIMnwGU7.png?_nc_eui2=AeEimRv7vk86OY0i_y9Vq7j7waVvHGYZE2PBpW8cZhkTY3locNtkwzmSoaFDOmoJK3HT6Vht613quQKMX8l3o0VQ);
                background-position: -65px -126px;
                background-size: auto;
                width: 12px;
                filter: brightness(0) invert(1);
                height: 12px;
                background-repeat: no-repeat;
                display: inline-block;
                margin-left: 5px;
            }
        }
    }
`

const Context = styled.div`
    height: 100%;
    padding: 10px;
    overflow-y: scroll;

    &>div{
        display: flex;
        &>i{
            height: 24px;
            width: 24px;
            background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yw/r/IZRtTrFxama.png?_nc_eui2=AeHsqAXLeMOmFJ_ttEvlHcG4iiRa0ys3w_6KJFrTKzfD_pp0O7mtGewKAEZRzxtjIpXqFgMwJWG--szxtjEm7xoU);
            background-position: 0px -25px;
            background-size: auto;
            background-repeat: no-repeat;
            display: inline-block;
        }
        &>textarea{
            width: 100%;
            background-color: transparent;
            border: none;
            outline: none;
            height: 50px;
        }
    }

`

const Box = styled.div`
    border: 1px solid #474646;
    height: 200px;
    border-radius: 5px;
`

const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px;
    height: 92%;
    width: 100%;
    background-color: #2f2f2f;
    cursor: pointer;

    &>div{
        display: flex;
        flex-direction: column;
        align-items: center;
        &>div{
            width: 40px;
            height: 40px;
            background-color: #4f4f50;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            &>i{
                background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yw/r/IZRtTrFxama.png?_nc_eui2=AeHsqAXLeMOmFJ_ttEvlHcG4iiRa0ys3w_6KJFrTKzfD_pp0O7mtGewKAEZRzxtjIpXqFgMwJWG--szxtjEm7xoU);
                background-position: 0px -96px;
                background-size: auto;
                width: 20px;
                height: 20px;
                filter: brightness(0) invert(1);
                background-repeat: no-repeat;
                display: inline-block;
            }
        }
        &>h4{
            font-size: 16px;
            font-weight: 100;
        }
        &>span{
            font-size: 12px;
            font-weight: 100;
        }
    }

    &:hover{
        background-color: #3c3c3d;
        transition: 0.2s;
    }
`

const Bottom = styled.div`
    margin: 10px 0 10px 0;
    border: 1px solid #464647;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;

    &>h4{
        font-weight: 100;
        cursor: pointer;
    }

    &>div{
        display: flex;
        margin-left: auto;
        align-items: center;
    }
`

const Action = styled.div`
    margin-right: 5px;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    &>i{
        height: 24px;
        width: 24px;
        background-image: url(${props=>props.ul});
        background-position: 0px ${props=>props.pos};
        background-size: auto;
        background-repeat: no-repeat;
        display: inline-block;
    }
    
    &:hover{
        transition: 0.2s;
        background-color: #4f4f50;
    }
`

const Submit = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #449fd0;
    padding: 7px;
    border-radius: 5px;
    cursor: pointer;
`