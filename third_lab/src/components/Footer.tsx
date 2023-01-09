import styled from "styled-components";
import {Logo} from "./Header";
import React from "react";

export function Footer(){
    let CURRENT_YEAR = new Date().getFullYear();
    return (
        <FooterBody>
            <Logo>
                <img src="marvel_logo.svg" alt=""/>
            </Logo>
            <Text>Data provided by Marvel.© {CURRENT_YEAR} MARVEL</Text>
            <LinkToMarvelPage href="https://developer.marvel.com/">developer.marvel.com</LinkToMarvelPage>
        </FooterBody>
    );
}

const FooterBody = styled.div`
  bottom: 0;
  position: absolute;
  background: #555555;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Text = styled.p`
  padding-left: 18px;
  padding-bottom: 5px;
  color: white;
  margin: -13px 0 0 0;
`

const LinkToMarvelPage = styled.a`
  margin-left: 18px;
  text-decoration: none;
  color: white;
  max-width: 148px;
`