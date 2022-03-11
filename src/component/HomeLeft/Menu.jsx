import React from 'react';
import styled from 'styled-components';
import {useGlobalState} from '../../state/provider';

function Menu() {
    const {isMenu} = useGlobalState();
    console.log(isMenu);
  return (
    <>
        <Container id="menu" className='menu'>
            <h4>Menu</h4>
            <Content>
                <Left>
                    <Search>
                        <i></i>
                        <input type="text" placeholder='Search' />
                    </Search>

                    <Socials>
                        <h4>Social</h4>
                        <Social>
                            <img src="/icon/left/events.png" alt="" />
                            <div>
                                <span>Events</span>
                                <p>
                                    Organize or find events and other things to do online and nearby.
                                </p>
                            </div>
                        </Social>

                        <Social>
                            <img src="/icon/left/friends.png" alt="" />
                            <div>
                                <span>Friends</span>
                                <p>
                                    Search for friends or people you may know.
                                </p>
                            </div>
                        </Social>

                        <Social>
                            <img src="/icon/left/groups.png" alt="" />
                            <div>
                                <span>Groups</span>
                                <p>
                                    Connect with people who share your interests.
                                </p>
                            </div>
                        </Social>

                        <Social>
                            <img src="/icon/left/news.png" alt="" />
                            <div>
                                <span>News</span>
                                <p>
                                    See relevent posts from people and pages you follow.
                                </p>
                            </div>
                        </Social>

                        <Social>
                            <img src="/icon/left/pages.png" alt="" />
                            <div>
                                <span>Pages</span>
                                <p>
                                    Discover and connect with business on Facebook.
                                </p>
                            </div>
                        </Social>
                    </Socials>

                    <Border></Border>

                    <Socials>
                        <h4>Entertainment</h4>
                        <Entertainment>
                            <img src="/icon/left/gaming.png" alt="" />
                            <div>
                                <span>Gaming video</span>
                                <p>
                                    Watch and connect with your favorite games and streamers.
                                </p>
                            </div>
                        </Entertainment>

                        <Entertainment>
                            <img src="/icon/left/stream.png" alt="" />
                            <div>
                                <span>Play Games</span>
                                <p>
                                    Play your favourite games.
                                </p>
                            </div>
                        </Entertainment>

                        <Entertainment>
                            <img src="/icon/watch.png" alt="" />
                            <div>
                                <span>Watch</span>
                                <p>
                                    A video destination personalized to your interest and connection.
                                </p>
                            </div>
                        </Entertainment>
                    </Socials>
                    <Border></Border>

                    <Socials>
                        <h4>Shopping</h4>
                        <Shop>
                            <img src="/icon/left/pay.png" alt="" />
                            <div>
                                <span>Facebook Pay</span>
                                <p>
                                    A seamless, secure way to pay on the apps you already use.
                                </p>
                            </div>
                        </Shop>

                        <Shop>
                            <img src="/icon/left/market.png" alt="" />
                            <div>
                                <span>Marketplace</span>
                                <p>
                                    Buy and sell in your community
                                </p>
                            </div>
                        </Shop>
                    </Socials>


                </Left>
                <Right>
                    <h2>Create</h2>

                    <Button size1="33px" size2="831px" spos="-409px" url="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/i60edPCbFZG.png?_nc_eui2=AeHBZsGmS1Tz6e0-hvi1THqsuaMyUcIEDQy5ozJRwgQNDE5RI-CMvaqE4AY4dKJVnlmrctmbxNjIZvepcPcDRcRO">
                        <div>
                            <i></i> 
                        </div>
                        Post
                    </Button>

                    <Button size1="33px" size2="1199px" spos="-992px" url="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/_y0SY6GBiui.png?_nc_eui2=AeHWKskjDaYzxn8upsKcInHVWVeV4ytM8HRZV5XjK0zwdKaQ4azgFkdpvyaPwysjIUzCWHZduTm-OCFxDAp9sBZD">
                        <div>
                            <i></i> 
                        </div>
                        Story
                    </Button>

                    <Button size1="33px" size2="831px" spos="-325px" url="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/i60edPCbFZG.png?_nc_eui2=AeHBZsGmS1Tz6e0-hvi1THqsuaMyUcIEDQy5ozJRwgQNDE5RI-CMvaqE4AY4dKJVnlmrctmbxNjIZvepcPcDRcRO">
                        <div>
                            <i></i> 
                        </div>
                        Room
                    </Button>

                    <Border></Border>

                    <Button size1="25px" size2="1182px" spos="-313px" url="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/wlEg5O0mjFt.png?_nc_eui2=AeHvh9Z4jtnjGQBDJWdvu5z3QrI6bPVmJuFCsjps9WYm4azcIn7Q8kY5RNhcNN8IAy0CsmZaizcoTzof4f5rKQnk">
                        <div>
                            <i></i> 
                        </div>
                        Page

                    </Button>

                    <Button size1="33px" size2="831px" spos="-514px" url="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/i60edPCbFZG.png?_nc_eui2=AeHBZsGmS1Tz6e0-hvi1THqsuaMyUcIEDQy5ozJRwgQNDE5RI-CMvaqE4AY4dKJVnlmrctmbxNjIZvepcPcDRcRO">
                        <div>
                            <i></i> 
                        </div>
                         Ad
                    </Button>

                    <Button size1="25px" size2="1182px" spos="-250px" url="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/wlEg5O0mjFt.png?_nc_eui2=AeHvh9Z4jtnjGQBDJWdvu5z3QrI6bPVmJuFCsjps9WYm4azcIn7Q8kY5RNhcNN8IAy0CsmZaizcoTzof4f5rKQnk">
                        <div>
                            <i></i> 
                        </div>
                         Group
                    </Button>

                    <Button size1="25px" size2="1182px" spos="-376px" url="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/wlEg5O0mjFt.png?_nc_eui2=AeHvh9Z4jtnjGQBDJWdvu5z3QrI6bPVmJuFCsjps9WYm4azcIn7Q8kY5RNhcNN8IAy0CsmZaizcoTzof4f5rKQnk">
                        <div>
                            <i></i> 
                        </div>
                         Event
                    </Button>

                    <Button size1="33px" size2="1199px" spos="-950px" url="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/_y0SY6GBiui.png?_nc_eui2=AeHWKskjDaYzxn8upsKcInHVWVeV4ytM8HRZV5XjK0zwdKaQ4azgFkdpvyaPwysjIUzCWHZduTm-OCFxDAp9sBZD">
                        <div>
                            <i></i> 
                        </div>
                         Marketplace listiting
                    </Button>
                </Right>
            </Content>
        </Container>
    </>
  )
}

export default Menu;

const Container = styled.div`
    display: none;
    background-color: #323436;
    padding: 10px 10px 0 10px;
    width: 565px;
    height: 815px;
    top: 0;
    left: 73px;
    overflow: visible;
    position: fixed;
    z-index: 9999;
    border-radius:0 10px 10px 0;

    &>h4{
        font-size: 22px;
        font-weight: 300;
        margin: 5px;
    }
`

const Content = styled.div`
    display: flex;
    overflow: scroll;
`

const Left = styled.div`
    flex-basis: 65%;
    background-color: var(--bg-color);
    height: 735px;
    margin-right: 10px;
    border-radius: 10px;
    padding: 10px;
    overflow: scroll;

    &::-webkit-scrollbar{
        display: none;
    }
`

const Search = styled.div`
    display: flex;
    align-items: center;
    background-color: #323436;
    padding: 8px 10px;
    border-radius: 20px;

    &>i{
        background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/uPOt_EKUTi4.png?_nc_eui2=AeEz29tLkrmCEXSlxXUMa7WcCK8OQsdYw8gIrw5Cx1jDyDSzcNTUSG4G0l969sdr2ZjjZ9z6TdDXY9zn1PSe9Upk);
        background-position: -140px -88px;
        background-size: auto;
        filter: brightness(0) invert(0.7);
        width: 16px;
        height: 16px;
        background-repeat: no-repeat;
        display: inline-block;
        margin-right: 10px;
    }

    &>input{
        background-color: transparent;
        border: none;
        outline: none;
        color: #9ea1b8;
    }
`

const Right = styled.div`
    flex-basis: 40%;
    background-color: var(--bg-color);
    height: 520px;
    border-radius: 10px;
    padding: 10px;

    &>h2{
        font-size: 20px;
        font-weight: 200;
    }
`

const Button = styled.div`
    display: flex;
    align-items: center;
    height: 35px;
    margin-top: 10px;
    padding: 7px 5px;
    border-radius: 5px;
    cursor: pointer;
    &>div{
        background-color: rgb(78 79 80);
        border-radius: 50%;
        height: 35px;
        width: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        &>i{
            background-image: url(${props => props.url});
            background-position: 0px ${props => props.spos};
            background-size: ${props => props.size1} ${props => props.size2};
            filter: brightness(0) invert(1);
            width: 20px;
            height: 20px;
            background-repeat: no-repeat;
            display: inline-block;
        }
    }
    font-size: 15px;
    font-weight: 200;
    line-height: 1.34;

    &:hover{
        background-color: #3a3b3c;
    }
`

const Border = styled.div`
    border-top: 1px solid #323436;
    margin: 15px 0;
`

const Socials = styled.div`
    &>h4{
        margin: 10px 0;
        font-weight: 100;
    }
`

const Social = styled.div`
    display: flex;
    padding: 6px 5px;
    margin-top: 2px;
    border-radius: 5px;
    cursor: pointer;

    &>img{
        width: 36px;
        height: 36px;
        object-fit: cover;
        margin-right: 10px;
    }

    &>div{
        &>p{
            font-size: 12px;
            line-height: 1.34;
            color: #9ea1b8;
        }

        &>span{
            font-size: 14px;
        }
    }

    &:hover{
        background-color: var(--hover-color);
    }
`

const Entertainment = styled(Social)``

const Shop = styled(Entertainment)``
