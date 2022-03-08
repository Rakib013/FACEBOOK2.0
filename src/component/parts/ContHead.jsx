import React from 'react'
import styled from 'styled-components';


function ContHead() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <TopHead>
    <Head>
      <h4>Contacts</h4>
      <div>
          <div>
              <svg viewBox="0 0 16 16" fill='#9ea1b8' width="1em" height="1em" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 py1f6qlh em6zcovv gl3lb2sf hhz5lgdu"><g fill-rule="evenodd" transform="translate(-448 -544)"><path d="M457.25 552.5H455v2.25a.75.75 0 0 1-1.5 0v-2.25h-2.25a.75.75 0 0 1 0-1.5h2.25v-2.25a.75.75 0 0 1 1.5 0V551h2.25a.75.75 0 0 1 0 1.5m6.38-4.435a.62.62 0 0 0-.64.047l-2.49 1.634v-1.394a1.854 1.854 0 0 0-1.852-1.852l-8.796.002a1.854 1.854 0 0 0-1.851 1.852v6.793c0 1.021.83 1.852 1.852 1.852l1.147-.002h7.648a1.854 1.854 0 0 0 1.852-1.851v-1.392l2.457 1.61a.641.641 0 0 0 .673.071.663.663 0 0 0 .37-.601v-6.167c0-.26-.142-.49-.37-.602"></path></g></svg>
          </div>

          <div>
              <i></i>
          </div>

          <div onClick={e=>setIsOpen(!isOpen)}>
              <span></span>
              <span></span>
              <span></span>
          </div>
      </div>
    </Head>
    {
      isOpen && (
        <Options>
          <OpHead>
              <h4>Chat Settings</h4>
              <p>Customize your massenger experience</p>
          </OpHead>

          <Border></Border>

          <Settings>
            <Setting sPos="-84px" url="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/4tim0uzjTIo.png?_nc_eui2=AeH-v18i2t05izcjWN2RcpPZIcMkKNLj5wghwyQo0uPnCIdOWyV4ebQJ6un_4pu-F-3jox6YCWvlceD5kV_oZLvq">
              <div>
                <i></i>
                <p>Incoming Call Sounds</p>
              </div>
              <div>
                <span></span>
              </div>
            </Setting>
            <Setting sPos="0px" url="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/4tim0uzjTIo.png?_nc_eui2=AeH-v18i2t05izcjWN2RcpPZIcMkKNLj5wghwyQo0uPnCIdOWyV4ebQJ6un_4pu-F-3jox6YCWvlceD5kV_oZLvq">
              <div>
                <i></i>
                <p>Message Sounds</p>
              </div>
              <div>
                <span></span>
              </div>
            </Setting>
            <Setting sPos="-21px" url="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/4tim0uzjTIo.png?_nc_eui2=AeH-v18i2t05izcjWN2RcpPZIcMkKNLj5wghwyQo0uPnCIdOWyV4ebQJ6un_4pu-F-3jox6YCWvlceD5kV_oZLvq">
              <div>
                <i></i>
                <div>
                  <p>Pop up new messages</p>
                  <span>Automatically open new messages</span>
                </div>
              </div>
              <div>
                <span></span>
              </div>
            </Setting>
          </Settings>

          <Border></Border>

          <Setting sPos="-63px" url="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/4tim0uzjTIo.png?_nc_eui2=AeH-v18i2t05izcjWN2RcpPZIcMkKNLj5wghwyQo0uPnCIdOWyV4ebQJ6un_4pu-F-3jox6YCWvlceD5kV_oZLvq">
            <div>
              <i></i>
              <p>Show controls</p>
            </div>
            <div>
              <span></span>
            </div>
          </Setting>

          <Border></Border>

          <OpBottom sPos="-42px" url="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/4tim0uzjTIo.png?_nc_eui2=AeH-v18i2t05izcjWN2RcpPZIcMkKNLj5wghwyQo0uPnCIdOWyV4ebQJ6un_4pu-F-3jox6YCWvlceD5kV_oZLvq">
            <div>
              <i></i>
              <p>Turn off active status</p>
            </div>
          </OpBottom>

          <OpBottom sPos="-63px" url="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/4tim0uzjTIo.png?_nc_eui2=AeH-v18i2t05izcjWN2RcpPZIcMkKNLj5wghwyQo0uPnCIdOWyV4ebQJ6un_4pu-F-3jox6YCWvlceD5kV_oZLvq">
            <div>
              <i></i>
              <p>Message delivery settings</p>
            </div>
          </OpBottom>

          <OpBottom sPos="-21px" url="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/4tim0uzjTIo.png?_nc_eui2=AeH-v18i2t05izcjWN2RcpPZIcMkKNLj5wghwyQo0uPnCIdOWyV4ebQJ6un_4pu-F-3jox6YCWvlceD5kV_oZLvq">
            <div>
              <i></i>
              <p>Block settings</p>
            </div>
          </OpBottom>
      </Options>
      )
    }
  </TopHead>
  )
}

export default ContHead;


const TopHead = styled.div`
  z-index: 999;
  position: relative;
`


const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  position: relative;

  &>h4{
    font-weight: 500;
    font-size: 15px;
    color: #9ea1b8;
  }

  &>div{
    display: flex;
    align-items: center;
    position: relative;

    &>div{
      display: flex;
      align-items: center;
      padding: 10px;
      margin: 0 5px;
      border-radius: 50%;
      transition: opacity 0.3s ease-in-out;
      cursor: pointer;
      &>i{
        background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/uPOt_EKUTi4.png?_nc_eui2=AeEz29tLkrmCEXSlxXUMa7WcCK8OQsdYw8gIrw5Cx1jDyDSzcNTUSG4G0l969sdr2ZjjZ9z6TdDXY9zn1PSe9Upk);
        background-position: -140px -88px;
        background-size: auto;
        filter: brightness(0) invert(1);
        width: 16px;
        height: 16px;
        background-repeat: no-repeat;
        display: inline-block;
        cursor: pointer;
      }
      
      &>span{
        background-color: white;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        margin:0 auto;
      }
      
      &:last-child{
        width: 16px;
        height: 16px;
        border-radius: 50%;
        align-items: center;
        padding: 10px;
        position: relative;
      }

      &:hover{
        background-color: rgba(199, 217, 255, 0.1);  
      }
    }
  }
`

const Options = styled.div`
  position: fixed;
  right: 10px;
  width: 350px;
  padding: 15px;
  background-color: #252626;
  border-radius: 10px;

  &::after{
    content: " ";
    position: absolute;
    right: 10px;
    top: -10px;
    border-top: none;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-bottom: 15px solid #252626;
  }
`

const OpHead = styled.div`
    &>h4{
        font-size: 15px;
        font-weight: 200;
        margin-bottom: 5px;
    }

    &>p{
        font-size: 12px;
        color: #9ea1b8;
        font-weight: 100;
        margin-bottom: 10px;
    }
`

const Border = styled.div`
  margin: 5px 0;
  border-top: 1px solid #505353;
`


const Settings = styled.div``

const Setting = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 2px 0;
  border-radius: 7px;
  cursor: pointer;
  transition:  0.3s;

  &>div{
    display: flex;
    align-items: center;
    &>i{
      background-image: url(${props => props.url});
      background-position: 0px ${props => props.sPos};
      background-size: auto;
      filter: brightness(0) invert(1);
      width: 20px;
      height: 20px;
      background-repeat: no-repeat;
      display: inline-block;
      margin-right: 10px;
    }
    &>p{
      font-size: 14px;
      font-weight: 100;
    }
    
    &:last-child{
      background-color: #3088f7;
      width: 50px;
      height: 25px;
      border-radius: 20px;
      cursor: pointer;
      
      &>span{
        background-color: #e7e7ec;
        width: 20px;
        height: 20px;
        margin-left: 3px;
        margin-right: 3px;
        border-radius: 50%;
        margin-left: auto;
      }
    }
  }
  
  &:last-child{
    &>div{
      &>div{
        &>p{
          font-size: 14px;
          font-weight: 100;
        }
        &>span{
          font-size: 12px;
          color: #9ea1b8;
          font-weight: 100;
        }
      }
    }
  }
  
  &:hover{
    background-color: #39393a;
  }
`

const OpBottom = styled.div`
  padding: 10px;
  margin: 2px 0;
  border-radius: 5px;
  transition: 0.2s;
  cursor: pointer;

  &>div{
    display: flex;
    align-items: center;
    &>i{
      background-image: url(${props => props.url});
      background-position: 0px ${props => props.sPos};
      background-size: auto;
      filter: brightness(0) invert(1);
      width: 20px;
      height: 20px;
      background-repeat: no-repeat;
      display: inline-block;
      margin-right: 10px;
    }
    &>p{
      font-size: 14px;
      font-weight: 100;
    }
  }

 &:hover{
  background-color: #39393a;
 }
`
