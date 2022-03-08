import React, { useState } from 'react';
import styled from 'styled-components';
import Ads from './parts/Ads';
import ContHead from './parts/ContHead';

function HomeRight() {
  return (
    <>
      <Container>
        <Top>
          <Head>
            <h4>Sponsored</h4>
          </Head>
          <Ads />
          <Ads />
          <Border></Border>
        </Top>

        <Contacts>
          <ContHead />
          <Peoples>
            <Person>
              <div>
                <img src="/icon/avatar.jpeg" alt="" />
                <div></div>
              </div>
              <p>Sagor Ahammed Munna</p>
            </Person>

            <Person>
              <div>
                <img src="/icon/avatar2.jpeg" alt="" />
                <div></div>
              </div>
              <p>Nur Jahan</p>
            </Person>

            <Person>
              <div>
                <img src="/icon/avatar3.png" alt="" />
                <div></div>
              </div>
              <p>Fahimun Islam Lamia</p>
            </Person>

            <Person>
              <div>
                <img src="/icon/avatar4.jpeg" alt="" />
                <div></div>
              </div>
              <p>Rakibul Islam</p>
            </Person>

            <Person>
              <div>
                <img src="/icon/avatar.jpeg" alt="" />
                <div></div>
              </div>
              <p>Sagor Ahammed Munna</p>
            </Person>

            <Person>
              <div>
                <img src="/icon/avatar2.jpeg" alt="" />
                <div></div>
              </div>
              <p>Nur Jahan</p>
            </Person>

            <Person>
              <div>
                <img src="/icon/avatar3.png" alt="" />
                <div></div>
              </div>
              <p>Fahimun Islam Lamia</p>
            </Person>

            <Person>
              <div>
                <img src="/icon/avatar4.jpeg" alt="" />
                <div></div>
              </div>
              <p>Rakibul Islam</p>
            </Person>

            <Person>
              <div>
                <img src="/icon/avatar.jpeg" alt="" />
                <div></div>
              </div>
              <p>Sagor Ahammed Munna</p>
            </Person>

            <Person>
              <div>
                <img src="/icon/avatar2.jpeg" alt="" />
                <div></div>
              </div>
              <p>Nur Jahan</p>
            </Person>

            <Person>
              <div>
                <img src="/icon/avatar3.png" alt="" />
                <div></div>
              </div>
              <p>Fahimun Islam Lamia</p>
            </Person>

            <Person>
              <div>
                <img src="/icon/avatar4.jpeg" alt="" />
                <div></div>
              </div>
              <p>Rakibul Islam</p>
            </Person>

            <Person>
              <div>
                <img src="/icon/avatar.jpeg" alt="" />
                <div></div>
              </div>
              <p>Sagor Ahammed Munna</p>
            </Person>

            <Person>
              <div>
                <img src="/icon/avatar2.jpeg" alt="" />
                <div></div>
              </div>
              <p>Nur Jahan</p>
            </Person>

            <Person>
              <div>
                <img src="/icon/avatar3.png" alt="" />
                <div></div>
              </div>
              <p>Fahimun Islam Lamia</p>
            </Person>

            <Person>
              <div>
                <img src="/icon/avatar4.jpeg" alt="" />
                <div></div>
              </div>
              <p>Rakibul Islam</p>
            </Person>

            <Person>
              <div>
                <img src="/icon/avatar.jpeg" alt="" />
                <div></div>
              </div>
              <p>Sagor Ahammed Munna</p>
            </Person>

            <Person>
              <div>
                <img src="/icon/avatar2.jpeg" alt="" />
                <div></div>
              </div>
              <p>Nur Jahan</p>
            </Person>

            <Person>
              <div>
                <img src="/icon/avatar3.png" alt="" />
                <div></div>
              </div>
              <p>Fahimun Islam Lamia</p>
            </Person>

            <Person>
              <div>
                <img src="/icon/avatar4.jpeg" alt="" />
                <div></div>
              </div>
              <p>Rakibul Islam</p>
            </Person>
          </Peoples>
        </Contacts>
        <New>
          <i></i>
        </New>
      </Container>
    </>
  )
}

export default HomeRight;

const Container = styled.div`
  padding-top: 15px;
  position: relative;
`

const Top = styled.div`
  
`


const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;

  &>h4{
    font-weight: 500;
    font-size: 15px;
    color: #9ea1b8;
  }

`


const Border = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 1px;
  background-color: var(--hover-color2);
`

const Contacts = styled.div`
`

const Peoples = styled.div``

const Person = styled.div`
  display: flex;
  align-items: center;
  padding: 7px;
  border-radius: 7px;
  margin: 1px 0;
  cursor: pointer;

  &>div{
    border: 2px solid #0062E0;
    position: relative;
    display: inline-flex;
    margin-right: 15px;
    border-radius: 50%;
    padding: 2px;
    &>img{
      width: 36px;
      height: 36px;
      object-fit: cover;
      border-radius: 50%;
    }

    &>div{
      bottom: 0;
      right: 0;
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: #31a24c;
      border: 1px solid var(--bg-color);
      border-radius: 50%;
    }
  }

  &>p{
    font-size: 14px;
    font-weight: 100;
  }

  &:hover{
    background-color: var(--hover-color);
  }
`

const New = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: var(--hover-color);
  padding: 15px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;

  &>i{
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/miQJlW-hK6T.png?_nc_eui2=AeGEhDfFoIFIHDsJCFRTcaQJSWfhDA9mzb1JZ-EMD2bNvQoShwp0fWjChhVqq-Mztd0C0VWbpixdg9BZhtn3PTIA);
    background-position: 0px -409px;
    filter: brightness(0) invert(1);
    background-size: auto;
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    display: inline-block;
  }

  &:hover{
    background-color: var(--hover-color2);
  }
`
