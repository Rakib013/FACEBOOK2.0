import React, { useState } from 'react'
import styled from 'styled-components';

function HomeLeft() {
    const [see, setSee] = useState(false);
    const [shSee, setShSee] = useState(false);
  return (
    <>
        <Container>
            <Top see={see}>
                <Content>
                    <img src="/icon/avatar.jpeg" alt="" />
                    <p>Rakibul Islam</p>
                </Content>

                <Content>
                    <img src="/icon/left/friends.png" alt="" />
                    <p>Friends</p>
                </Content>

                <Content>
                    <img src="/icon/left/rgbmes.png" alt="" />
                    <p>Messenger</p>
                </Content>

                <Content>
                    <img src="/icon/left/ad.png" alt="" />
                    <p>Ad Center</p>
                </Content>


                <Content>
                    <img src="/icon/left/groups.png" alt="" />
                    <p>Groups</p>
                </Content>

                <Content>
                    <img src="/icon/left/market.png" alt="" />
                    <p>Marketplace</p>
                </Content>

                {
                    !see && (
                        <More onClick={e=>setSee(!see)}>
                            <div>
                                <svg viewBox="0 0 16 16" width="1em" height="1em" fill='white' class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 rs22bh7c fzdkajry jnigpg78 odw8uiq3">
                                <g fill-rule="evenodd" transform="translate(-448 -544)"><path fill-rule="nonzero" d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"></path>
                                </g></svg> 
                            </div>
                            <p>See More</p>
                        </More>
                    )
                }

                {
                    see && (
                        <>
                            <Content>
                    <img src="/icon/left/memories.png" alt="" />
                    <p>Memories</p>
                </Content>

                <Content>
                    <img src="/icon/left/admange.png" alt="" />
                    <p>Adds manager</p>
                </Content>

                <Content>
                    <img src="/icon/left/bolod.png" alt="" />
                    <p>Blood donates</p>
                </Content>

                <Content>
                    <img src="/icon/left/climate.png" alt="" />
                    <p>Climate Science Center</p>
                </Content>

                <Content>
                    <img src="/icon/left/community.png" alt="" />
                    <p>Ad Center</p>
                </Content>


                <Content>
                    <img src="/icon/left/covid.png" alt="" />
                    <p>COVID-19 information center</p>
                </Content>

                <Content>
                    <img src="/icon/left/emotional.png" alt="" />
                    <p>Emotional</p>
                </Content>

                <Content>
                    <img src="/icon/left/events.png" alt="" />
                    <p>Events</p>
                </Content>

                <Content>
                    <img src="/icon/left/favourite.png" alt="" />
                    <p>Favourite</p>
                </Content>

                <Content>
                    <img src="/icon/left/gaming.png" alt="" />
                    <p>Gaming</p>
                </Content>

                <Content>
                    <img src="/icon/left/pages.png" alt="" />
                    <p>Pages</p>
                </Content>

                <Content>
                    <img src="/icon/left/saved.png" alt="" />
                    <p>Saved</p>
                </Content>
                
                <More onClick={e=>setSee(!see)}>
                    <div>
                    <svg viewBox="0 0 20 20" fill='white' width="1em" height="1em" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 rs22bh7c fzdkajry jnigpg78 odw8uiq3"><path d="M15.47 12.2 10 6.727 4.53 12.2a.75.75 0 0 1-1.06-1.061l6-6a.751.751 0 0 1 1.06 0l6 6a.75.75 0 0 1-1.06 1.061z"></path></svg>
                    </div>
                    <p>See less</p>
                </More>

                </>
                )}
            </Top>
            <Bottom>
                <Border></Border>
                <Head>
                    <h4>Your Shortcuts</h4>
                    <p>Edit</p>
                </Head>
                <Content>
                    <img src="/icon/grp1.png" alt="" />
                    <p>EWU ACM Problem solver community</p>
                </Content>
                <Content>
                    <img src="/icon/grp2.jpeg" alt="" />
                    <p>Programming with meme</p>
                </Content>
                <Content>
                    <img src="/icon/grp1.png" alt="" />
                    <p>Bachelor Point</p>
                </Content>

                {
                    !shSee && (
                        <More onClick={e=>setShSee(!shSee)}>
                            <div>
                                <svg viewBox="0 0 16 16" width="1em" height="1em" fill='white' class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 rs22bh7c fzdkajry jnigpg78 odw8uiq3">
                                <g fill-rule="evenodd" transform="translate(-448 -544)"><path fill-rule="nonzero" d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"></path>
                                </g></svg> 
                            </div>
                            <p>See More</p>
                        </More>
                    )
                }

                {
                    shSee && (
                        <>
                            <More onClick={e=>setShSee(!shSee)}>
                                <div>
                                <svg viewBox="0 0 20 20" fill='white' width="1em" height="1em" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 rs22bh7c fzdkajry jnigpg78 odw8uiq3"><path d="M15.47 12.2 10 6.727 4.53 12.2a.75.75 0 0 1-1.06-1.061l6-6a.751.751 0 0 1 1.06 0l6 6a.75.75 0 0 1-1.06 1.061z"></path></svg>
                                </div>
                                <p>See less</p>
                            </More>
                        </>
                    )
                }

            </Bottom>
        </Container>
    </>
  )
}

export default HomeLeft;

const Container = styled.div`
    padding: 20px 0 0px 10px;
`

const Top = styled.div`
    overflow: ${props => props.see ? '' : 'hidden'};
`

const Content = styled.div`
    display: flex;
    align-items: center;
    padding: 5px 0 10px 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;

    &>img{
        margin-right: 5%;
        width: 36px;
        height: 36px;
        object-fit: cover;
        border-radius: 50%;
    }

    &>p{
        width: 70%;
        font-size: 14px;
        font-weight: 200;
    }
    
    &:hover{
        background-color: var(--hover-color);
    }
`

const More = styled.div`
    display: flex;
    align-items: center;
    color: #e2ebfd;
    padding: 5px 0 10px 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &>div{
        background-color: var(--hover-color2);
        display: flex;
        align-items: center;
        padding: 10px;
        margin-right: 5%;
        border-radius: 50%;
    }
    
    &:hover{
        background-color: var(--hover-color);
    }
`

const Border = styled.div`
    margin-top: 5px;
    width: 100%;
    height: 1px;
    background-color: var(--hover-color2);
`
const Head = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &>h4{
        font-weight: 500;
        font-size: 18px;
        color: #9ea1b8;
    }

    &>p{
        padding: 8px;
        font-size: 15px;
        font-weight: 200;
        border-radius: 5px;
        color: #4d93ee;
        cursor: pointer;
        transition: 0.3s;
        opacity: 0;
        
        &:hover{
            background-color: rgba(199, 217, 255, 0.1);
        }
    }
`

const Bottom = styled.div`
    ${Content}{
        &>img{
            width: 40px;
            height: 40px;
            object-fit: cover;
            border-radius: 10px;
        }
    }

    &:hover{
        ${Head}{
            &>p{
                opacity: 100;
            }
        }
    }
`