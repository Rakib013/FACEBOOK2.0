import React from 'react';
import styled from 'styled-components';

function Comments({viewComments}) {
    return (
        <Commentss>
            <>
                {
                    viewComments && (
                        <Comment>
                            <div>
                                <img src="/icon/nushrat.png" alt="" />
                                <div>
                                    <div>
                                        <h5>Taseen Ahnaf</h5>
                                        <p>Vai eta kothai?</p>
                                    </div>
                                    <div>
                                        <p>Like</p>
                                        <p>Reply</p>
                                        <p>2h</p>
                                    </div>
                                </div>
                            </div>

                            <Replyes>
                                <Reply>
                                    <img src="/icon/nushrat.png" alt="" />
                                    <div>
                                        <div>
                                            <h5>Taseen Ahnaf</h5>
                                            <p>Ore vai eta jatrabari. jaia ja dekhchi ami crash.</p>
                                        </div>
                                        <div>
                                            <p>Like</p>
                                            <p>Reply</p>
                                            <p>2h</p>
                                        </div>
                                    </div>
                                </Reply>

                                <Reply>
                                    <img src="/icon/nushrat.png" alt="" />
                                    <div>
                                        <div>
                                            <h5>Taseen Ahnaf</h5>
                                            <p>Ore vai eta jatrabari</p>
                                        </div>
                                        <div>
                                            <p>Like</p>
                                            <p>Reply</p>
                                            <p>2h</p>
                                        </div>
                                    </div>
                                </Reply>

                                <Reply>
                                    <img src="/icon/nushrat.png" alt="" />
                                    <div>
                                        <div>
                                            <h5>Taseen Ahnaf</h5>
                                            <p>Ore vai eta jatrabari. jaia ja dekhchi ami crash. Yo, Yo, King</p>
                                        </div>
                                        <div>
                                            <p>Like</p>
                                            <p>Reply</p>
                                            <p>2h</p>
                                        </div>
                                    </div>
                                </Reply>
                                <CommentPost style={{ marginLeft: '50px' }}>
                                    <img src="/icon/avatar.jpeg" alt="" />
                                    <div>
                                        <input type="text" placeholder='Write a reply' />
                                        <Icon spos="-285px" url="https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/BD8jnr5MFVK.png?_nc_eui2=AeGb6jbbWWYXRCdM6-3ATFGhu64OwPv9RGK7rg7A-_1EYuWZ6609xuoV1NzpqI9QdyRdkHwyF2JYR5ZoQ4qOzpbr"></Icon>
                                        <Icon spos="-404px" url="https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/BD8jnr5MFVK.png?_nc_eui2=AeGb6jbbWWYXRCdM6-3ATFGhu64OwPv9RGK7rg7A-_1EYuWZ6609xuoV1NzpqI9QdyRdkHwyF2JYR5ZoQ4qOzpbr"></Icon>
                                        <Icon spos="-353px" url="https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/BD8jnr5MFVK.png?_nc_eui2=AeGb6jbbWWYXRCdM6-3ATFGhu64OwPv9RGK7rg7A-_1EYuWZ6609xuoV1NzpqI9QdyRdkHwyF2JYR5ZoQ4qOzpbr"></Icon>
                                        <Icon spos="-421px" url="https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/BD8jnr5MFVK.png?_nc_eui2=AeGb6jbbWWYXRCdM6-3ATFGhu64OwPv9RGK7rg7A-_1EYuWZ6609xuoV1NzpqI9QdyRdkHwyF2JYR5ZoQ4qOzpbr"></Icon>
                                        <Icon spos="-472px" url="https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/BD8jnr5MFVK.png?_nc_eui2=AeGb6jbbWWYXRCdM6-3ATFGhu64OwPv9RGK7rg7A-_1EYuWZ6609xuoV1NzpqI9QdyRdkHwyF2JYR5ZoQ4qOzpbr"></Icon>
                                    </div>
                                </CommentPost>
                            </Replyes>
                        </Comment>
                    )
                }

                <Comment>
                    <div>
                        <img src="/icon/nushrat.png" alt="" />
                        <div>
                            <div>
                                <h5>Taseen Ahnaf</h5>
                                <p>Vai eta kothai re?</p>
                            </div>
                            <div>
                                <p>Like</p>
                                <p>Reply</p>
                                <p>2h</p>
                            </div>
                        </div>
                    </div>
                </Comment>
            </>


            <CommentPost>
                <img src="/icon/avatar.jpeg" alt="" />
                <div>
                    <input type="text" placeholder='Write a comment' />
                    <Icon spos="-285px" url="https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/BD8jnr5MFVK.png?_nc_eui2=AeGb6jbbWWYXRCdM6-3ATFGhu64OwPv9RGK7rg7A-_1EYuWZ6609xuoV1NzpqI9QdyRdkHwyF2JYR5ZoQ4qOzpbr"></Icon>
                    <Icon spos="-404px" url="https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/BD8jnr5MFVK.png?_nc_eui2=AeGb6jbbWWYXRCdM6-3ATFGhu64OwPv9RGK7rg7A-_1EYuWZ6609xuoV1NzpqI9QdyRdkHwyF2JYR5ZoQ4qOzpbr"></Icon>
                    <Icon spos="-353px" url="https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/BD8jnr5MFVK.png?_nc_eui2=AeGb6jbbWWYXRCdM6-3ATFGhu64OwPv9RGK7rg7A-_1EYuWZ6609xuoV1NzpqI9QdyRdkHwyF2JYR5ZoQ4qOzpbr"></Icon>
                    <Icon spos="-421px" url="https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/BD8jnr5MFVK.png?_nc_eui2=AeGb6jbbWWYXRCdM6-3ATFGhu64OwPv9RGK7rg7A-_1EYuWZ6609xuoV1NzpqI9QdyRdkHwyF2JYR5ZoQ4qOzpbr"></Icon>
                    <Icon spos="-472px" url="https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/BD8jnr5MFVK.png?_nc_eui2=AeGb6jbbWWYXRCdM6-3ATFGhu64OwPv9RGK7rg7A-_1EYuWZ6609xuoV1NzpqI9QdyRdkHwyF2JYR5ZoQ4qOzpbr"></Icon>
                </div>
            </CommentPost>
        </Commentss>
    )
}

export default Comments;


const Commentss = styled.div`
    
`

const Comment = styled.div`
    &>div{
        display: flex;
        margin-top: 10px;
    &>img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 10px;
    }

    &>div{
        &>div:first-child{
            background-color: var(--hover-color);
            padding: 10px;
            border-radius: 15px;

            &>h5{
                font-weight: 400;
                cursor: pointer;

                &:hover{
                    text-decoration: underline;
                }
            }

            &>p{
                font-weight: 100;
                font-size: 12px;
                color: #bbb8b8;
            }
        }

        &>div:nth-child(2){
            display: flex;
            padding: 0 10px;

            &>p{
                font-size: 12px;
                color: #828282;
                &:first-child{
                    margin-right: 10px;
                    cursor: pointer;

                    &:hover{
                        text-decoration: underline;
                    }
                }
                &:nth-child(2){
                    cursor: pointer;
                    &:hover{
                        text-decoration: underline;
                    }
                }
                &:last-child{
                    margin-left: auto;
                }
            }
        }
    }
    }
    
`

const CommentPost = styled.form`
    display: flex;
    align-items: center;
    margin-top: 10px;

    &>img{
        width: 36px;
        height: 36px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 15px;
    }

    &>div{
        width: 100%;
        background-color: var(--hover-color);
        height: 30px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2px 10px;

        &>input{
            color: #828282;
            width: 100%;
            background-color: transparent;
            border: none;
            outline: none;
        }
        
    }
`

const Icon = styled.i`
    background-image: url(${props => props.url});
    background-size: auto;
    background-position: 0px ${props => props.spos};
    filter: brightness(0) invert(0.7);
    width: 22px;
    height: 16px;
    background-repeat: no-repeat;
    display: inline-block;
    margin-right: 10px;
    cursor: pointer;

    &:hover{
        filter: brightness(0) invert(1);
    }
`

const Reply = styled.div`
    display: flex;
    margin-top: 3px;
    margin-left: 50px;
    &>img{
        width: 25px;
        height: 25px;
        border-radius: 50%;
    }

    &>div{
        display: flex;
        flex-direction: column;
        &>div:first-child{
            background-color: var(--hover-color);
            padding: 10px;
            border-radius: 15px;

            &>h5{
                font-weight: 400;
                cursor: pointer;

                &:hover{
                    text-decoration: underline;
                }
            }

            &>p{
                font-weight: 100;
                font-size: 12px;
                color: #bbb8b8;
            }
        }

        &>div:nth-child(2){
            display: flex;
            padding: 0 10px;

            &>p{
                font-size: 12px;
                color: #828282;
                &:first-child{
                    margin-right: 10px;
                    cursor: pointer;

                    &:hover{
                        text-decoration: underline;
                    }
                }
                &:nth-child(2){
                    cursor: pointer;
                    &:hover{
                        text-decoration: underline;
                    }
                }
                &:last-child{
                    margin-left: auto;
                }
            }
        }
    }
`

const Replyes = styled.div`
    display: flex;
    flex-direction: column;
`