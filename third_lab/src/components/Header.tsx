import React, {useState} from "react";
import styled, { css } from "styled-components";
import {NavLink} from "react-router-dom";

export function Header(){

    return(
        <Head>
            <Logo>
                <img src="marvel_logo.svg" alt=""/>
            </Logo>
            <Links>
                <Links_Pages><NavLink to="/Characters" style={({isActive}) => isActive? {textDecoration: "underline", textDecorationColor: "#f9c92d"}: {textDecoration: "none", }}><li>Characters</li></NavLink></Links_Pages>
                <Links_Pages><NavLink to="/Comics" style={({isActive}) => isActive? {textDecoration: "underline", textDecorationColor: "#f9c92d"}: {textDecoration: "none", }}><li>Comics</li></NavLink></Links_Pages>
                <Links_Pages><NavLink to="/Series" style={({isActive}) => isActive? {textDecoration: "underline", textDecorationColor: "#f9c92d"}: {textDecoration: "none", }}><li>Characters</li></NavLink></Links_Pages>
            </Links>
        </Head>
    )


}

export const Head = styled.div`
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

export const Links = styled.nav`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 77%;
`

export const Links_Pages = styled.ul`
  padding: 0 15px 0 0;
  font-family: Avenir,serif;
  
  li {
    color: #f9c92d;
    font-size: 22px;
    font-weight: bold;
    list-style: none;
  }
  
`;

export type Props = {
    cur: number;
}



