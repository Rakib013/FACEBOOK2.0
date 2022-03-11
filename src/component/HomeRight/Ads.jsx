import React, { useState } from 'react';
import styled from 'styled-components';

function Ads() {
    const [adOption, setAdOption] = useState(false);
  return (
    <Adds>
        <Ad option={adOption}>
            <img src="/icon/grp1.png" alt="" />
            <div>
              <span>Click here to explore more and more and more</span>
              <a href="youtube.com">Youtube.com</a>
              <div onClick={e=>setAdOption(!adOption)}>
                  <span></span><span></span><span></span>
              </div>
            </div>
        </Ad>
        {
            adOption && (
            <Options>
                <Option sPos='-635px' url={"https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/KT-JCP_OuLi.png?_nc_eui2=AeG3PWmDjqb97RsSSEQWE7K2p0kRRE7k3M6nSRFETuTczm3gyHx1mjVZvE1c86hlM_G6URPZsUeoQy2xc5x4olSg"}>
                <i></i>
                <div>
                    <span>Hide Ad</span>
                    <p>Never see this ad again.</p>
                </div>
                </Option>

                <Option sPos='-887px' url={"https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/KT-JCP_OuLi.png?_nc_eui2=AeG3PWmDjqb97RsSSEQWE7K2p0kRRE7k3M6nSRFETuTczm3gyHx1mjVZvE1c86hlM_G6URPZsUeoQy2xc5x4olSg"}>
                <i></i>
                <div>
                    <span>Report Ad</span>
                    <p>Tell us about the problem with ths ad.</p>
                </div>
                </Option>
                <Option sPos='-493px' url={"https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/IUsLKu7QZiy.png?_nc_eui2=AeES2afp9N45oF3q9CgxOuxXChqp5KWbnlgKGqnkpZueWF_FlbhWIVr2B5xlokkGGgslKjfjgcOZffEHGSc3VlSj"}>
                <i></i>
                <div>
                    <span>Why am i seeing this ad?</span>
                </div>
                </Option>
            </Options>
            )
        }
        </Adds>
  )
}

export default Ads;


const Adds = styled.div`
  position: relative;
`


const Ad = styled.div`
  border-radius: 5px;
  padding: 8px;
  display: flex;
  align-items: center;
  margin-bottom: 3px;
  position: relative;
  cursor: pointer;
  
  &>img{
    width: 40%;
    height: 80px;
    object-fit: cover ;
    border-radius: 5px;
    margin-right: 5%;
  }
  
  &>div{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    position: relative;
    
    &>a{
      font-size: 12px;
      text-decoration: none;
      font-weight: 100;
      color: #9ea1b8;
    }
    
    &>span{
      font-size: 13px;
      font-weight: 200;
    }
    
    &>div{
      position: absolute;
      right: 0;
      top: -20px;
      display: flex;
      opacity: ${props=> props.option ? 1 : 0};
      width: 40px;
      height: 40px;
      background-color: var(--hover-color);
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      transition: opacity 0.3s ease-in-out;
      
      
      &>span{
        width: 4px;
        height: 4px;
        background-color: white;
        border-radius: 50%;
        margin-right: 3px;
      }
      
      &:hover{
        background-color: var(--hover-color2);
      }
    }
  }
  
  &:hover{
    &>div{
      &>div{
        opacity: 1;
      }
    }
    background-color: rgba(199, 217, 255, 0.1);
  }
`


const Options = styled.div`
  top: 10px;
  right: -35px;
  position: absolute;
  z-index: 9999;
  width: 300px;
  background-color: var(--box-color);
  color: #fff;
  padding: 10px;
  margin: 40px;
  float: left;
  margin-top: 40px;
  border-radius: 10px;
  -webkit-box-shadow: 1px 1px 7px -1px #ffffff; 
  box-shadow: 1px 1px 7px -10px #ffffff;
  transition: opacity 0.3s ease-in-out;

  &::after{
    content: " ";
    position: absolute;
    right: 10px;
    top: -15px;
    border-top: none;
    border-right: 15px solid transparent;
    border-left: 15px solid transparent;
    border-bottom: 15px solid var(--box-color);
  }
`

const Option = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;
  
  &>i{
    background-image: url(${props=>props.url});
    background-position: 0 ${props=>props.sPos} ;
    filter: brightness(0) invert(1);
    background-size: auto;
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    display: inline-block;
    margin-right: 5%;
  }
  
  &>div{
    &>span{
      font-size: 13px;
    }
    &>p{
      font-size: 10px;
      color: #9ea1b8;
    }
  }
  
  &:hover{
    background-color: rgba(179, 203, 255, 0.1);
  }
`

