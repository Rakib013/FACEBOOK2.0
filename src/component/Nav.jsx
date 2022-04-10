import { useState } from "react";
import styled from "styled-components"



function Nav() {
    const [home, setHome] = useState(true);
    const [nActive, setNActive] = useState(false);
    const [mActive, setMActive] = useState(false);
    const [mnActive, setMnActive] = useState(false);
    
    const handleMenu = (e) => {
        if(mnActive){
            document.getElementById("menu").style.display = "none";
        }else{
            document.getElementById("menu").style.display = "block";
        }
    }

    const handleNotification = (e) => {
        if(nActive){
            document.getElementById("notification").style.display = "none";
        }else{
            document.getElementById("notification").style.display = "block";
        }
    }

  return (
    <>
        <Container>
            <Top>
                <Logo style={{padding: '0px', marginBottom: '0.5rem', marginTop: '0'}}>
                    <svg viewBox="0 0 36 36" class="" fill="url(#jsc_c_30)" height="40" width="40">
                        <defs>
                        <linearGradient x1="50%" x2="50%" y1="97.0782153%" y2="0%" id="jsc_c_30">
                        <stop offset="0%" stop-color="#0062E0"></stop>
                        <stop offset="100%" stop-color="#19AFFF"></stop>
                        </linearGradient>
                        </defs>
                        <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
                        <path class="p361ku9c" fill='white' d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"></path>
                    </svg>
                </Logo>

                <Logo fill={home ? "#3c80da" : "white"} color={home ? '#3a4d72' : '#3e3f3f'} onClick={e=> {
                    setHome(!home);
                    setNActive(false);
                    setMActive(false);
                    setMnActive(false);
                }}>
                    <img src="/icon/left/home.png" alt="" />
                </Logo>

                <Logo color="#3e3f3f">
                    <i></i>
                </Logo>

                <Logo onClick={e=> {
                    handleNotification();
                    setNActive(!nActive);
                    setMActive(false);
                    setMnActive(false);
                }} color={nActive ? '#3a4d72' : '#3e3f3f'}>
                    <svg viewBox="0 0 28 28" fill={nActive ? "#3c80da" : "white"}   alt="" class="svg" height="20" width="20">
                        <path d="M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z">
                        </path>
                    </svg>
                    <span>
                        9
                    </span>
                </Logo>

                <Logo onClick={e=> {
                    setMActive(!mActive);
                    setMnActive(false);
                    setNActive(false);
                }} color={mActive ? '#3a4d72' : '#3e3f3f'}>
                    <svg viewBox="0 0 28 28" alt="" fill={mActive ? "#3c80da" : "white"} class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 rs22bh7c fzdkajry" height="20" width="20"><path d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z"></path></svg>
                </Logo>

                <Logo onClick={e=>{
                    handleMenu();
                    setMnActive(!mnActive);
                    setMActive(false);
                    setNActive(false);
                }} color={mnActive ? '#3a4d72' : '#3e3f3f'}>
                    <svg viewBox="0 0 44 44" fill={mnActive ? "#3c80da" : "white"} width="1.2em" height="1.2em" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 rs22bh7c fzdkajry jnigpg78 odw8uiq3"><circle cx="7" cy="7" r="6"></circle><circle cx="22" cy="7" r="6"></circle><circle cx="37" cy="7" r="6"></circle><circle cx="7" cy="22" r="6"></circle><circle cx="22" cy="22" r="6"></circle><circle cx="37" cy="22" r="6"></circle><circle cx="7" cy="37" r="6"></circle><circle cx="22" cy="37" r="6"></circle><circle cx="37" cy="37" r="6"></circle></svg>
                </Logo>
            </Top>
            <Border></Border>
            <Bottom>
                <Content active={true}>
                    <Watch>
                        <img src="/icon/watch.png" alt="" />
                        <span>
                            9+
                        </span>
                    </Watch>
                </Content>

                <Content>
                    <Watch>
                        <img src="/icon/grp1.png" alt="" />
                        <span>
                            9
                        </span>
                    </Watch>
                </Content>

                <Content>
                    <Watch>
                        <img src="/icon/grp2.jpeg" alt="" />
                        <span>
                            1
                        </span>
                    </Watch>
                </Content>

                <Content>
                    <Watch>
                        <img src="/icon/grp1.png" alt="" />
                        <span>
                            8
                        </span>
                    </Watch>
                </Content>

                <Content>
                    <Watch>
                        <img src="/icon/grp2.jpeg" alt="" />
                        <span>
                            4
                        </span>
                    </Watch>
                </Content>

                <Content>
                    <Watch>
                        <img src="/icon/grp1.png" alt="" />
                        <span>
                            6
                        </span>
                    </Watch>
                </Content>

                <Dots>
                    <span></span>
                    <span></span>
                    <span></span>
                </Dots>
            </Bottom>
        </Container>
    </>
  )
}

export default Nav;

const Container = styled.div`
    background-color: var(--box-color);
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    border-right: 0.1px solid #3e3f3f;
`


const Top = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
`

const Logo = styled.div`
    display: flex;
    margin: 0.5rem 0;
    cursor: pointer;
    background-color: ${props=>props.color};
    padding: 10px;
    border-radius: 50%;
    transition: 0.2s;
    position: relative;

    &>i{
        background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/uPOt_EKUTi4.png?_nc_eui2=AeEz29tLkrmCEXSlxXUMa7WcCK8OQsdYw8gIrw5Cx1jDyDSzcNTUSG4G0l969sdr2ZjjZ9z6TdDXY9zn1PSe9Upk);
        background-position: -140px -88px;
        background-size: auto;
        filter: brightness(0) invert(1);
        width: 16px;
        height: 16px;
        background-repeat: no-repeat;
        display: inline-block;
    }

    &:hover{
        background-color: #4c575f;
    }

    &>span{
        top: -1px;
        right: 2px;
        position: absolute;
        width: 15px;
        height: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: red;
        border-radius: 50%;
        font-size: 11px;
    }

    &>img{
        filter: brightness(0) invert(1);
    }
`

const Border = styled.div`
    margin: 0% 20% 20% 20%;
    background-color: #3e3f3f;
    height: 1.2px;
`

const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    bottom: 0;
`

const Content = styled.div`
    border-left: ${props => (props.active ? "7px solid #0a66c2" : "None")};
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
`


const Watch = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    width: 70%;
    cursor: pointer;
    transition: 0.2s;
    position: relative;
    border-radius: 10px;

    &>img{
        width: 36px;
        height: 36px;
        object-fit: cover;
        border-radius: 10px;
    }

    &>span{
        top: 3px;
        right: 3px;
        position: absolute;
        background-color: red;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }
    
    &:hover{
        background-color: var(--hover-color);
    }
`

const Dots = styled.div`
    &>span{
        display: inline-block;
        width: 3px;
        height: 3px;
        background-color: white;
        border-radius: 50%;
        margin-right: 2px;
    }
    border-radius: 50%;
    padding: 17px 10px;
    display: flex;
    align-items: center;
    background-color: var(--hover-color);
    transition: 0.2s;
    cursor: pointer;

    &:hover{
        background-color: var(--hover-color2);
    }
`