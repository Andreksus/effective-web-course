import {CardProps} from "./Card";
import styled from "styled-components";
import {Series} from "./pages/Series";
import {Characters} from "./pages/Characters";
import React from "react";
import {Link} from "react-router-dom";

export function CardProfile(props: CardProps){
    let firstRef;
    let secondRef;

    if (props.card.category === "Characters"){
        firstRef = "Comics";
        secondRef = "Series";
    } else if (props.card.category === "Comics"){
        firstRef = "Characters";
        secondRef = "Series";
    } else if (props.card.category === "Series"){
        firstRef = "Characters";
        secondRef = "Comics";
    }

    return(
        <div>
            <TitleCard>Card : {props.card.title}</TitleCard>
            <CardBack>
                <ImageCardProfile src={props.card.image} alt="здесь должна быть картинка персонажа"/>
            </CardBack>
            <CardProfileFooter>
                <Description>
                    <TitleCard style={{color: "black", background: "none"}}>Description</TitleCard>
                    <h1 style={{color: "#ed1a3b", fontFamily: "Cambria"}}>{props.card.description}</h1>
                </Description>
                <Description>
                    <TitleCard style={{color: "black", background: "none"}}>{firstRef}</TitleCard>
                    <Ref href={props.card.refs[0][0]}>{props.card.refs[0][1][0]}</Ref>
                    <Ref href={props.card.refs[0][0]}>{props.card.refs[0][1][1]}</Ref>
                    <Ref href={props.card.refs[0][0]}>{props.card.refs[0][1][2]}</Ref>
                </Description>
                <Description>
                    <TitleCard style={{color: "black", background: "none"}}>{secondRef}</TitleCard>
                    <Ref href={props.card.refs[1][0]}>{props.card.refs[1][1][0]}</Ref>
                    <Ref href={props.card.refs[1][0]}>{props.card.refs[1][1][1]}</Ref>
                </Description>
            </CardProfileFooter>
        </div>
    );
}

const Ref = styled.a`
  text-decoration: none;
  font-size: 20px;
  color: #1a1a1a;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  //background: #888888;
`

const CardProfileFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const TitleCard = styled.h1`
  z-index: 1;
  text-align: center;
  font-size: 40px;
  background: #888888;
  margin: 0;
  color: white;
  font-family: Cambria, sans-serif;
  font-weight: bold;
`

const CardBack = styled.div`
  text-align: center;
  height: 400px;
  background: #888888;
  overflow: hidden;
`

const ImageCardProfile = styled.img`
  height: 100%;
  border: 4px solid black;
`