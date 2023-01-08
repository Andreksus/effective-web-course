import React from "react";
import styled, { css } from "styled-components";

export function Header(){
    return(
        <Head>
            <Logo>
                <img src="marvel_logo.svg" alt=""/>
            </Logo>
            <Links>
                <Links_Pages><A cur={0} href="#">Characters</A></Links_Pages>
                <Links_Pages><A cur={0} href="#">Comics</A></Links_Pages>
                <Links_Pages><A cur={0} href="#">Series</A></Links_Pages>
            </Links>
        </Head>
    )
}

const Head = styled.div`
  background: #ed1a3b;
  display: flex;
  flex-direction: row;
`

export const Logo = styled.div`
  padding-top: 20px;
  padding-left: 15px;
  padding-bottom: 0;
  height: 60px;
  width: 100px;
`

const Links = styled.nav`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 77%;
`

const Links_Pages = styled.li`
  padding: 0 0 0 15px;
  font-family: Avenir,serif;
`

type Props = {
    cur: number;
}

const A = styled.a<Props>`
  color: #f9c92d;
  font-size: 22px;
  text-decoration: ${props => props.cur === 1 ? 'underline' : 'none'};
  font-weight: bold;
`
