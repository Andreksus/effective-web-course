import {ICard} from "../types/ICard";
import styled from "styled-components";
import {Link, LinkProps, NavLink, NavLinkProps} from "react-router-dom";
export interface CardProps {
    card: ICard
}


export function Card(props: CardProps){

    return (
        <CardBody>
            <NavLink style={CardLink} to={JSON.stringify(props.card.id)}>
                <CardsImage>
                    <Image src={props.card.image} alt="здесь должна быть картинка персонажа"/>
                </CardsImage>
                <Title>{props.card.title}</Title>
                <Description>{props.card.description}</Description>
            </NavLink>
        </CardBody>
    );
}

const CardLink = {
    textDecoration: "none",
    color: "#666",
}

const CardBody = styled.div`
  text-decoration: none;
  color: #666;
  border: 1px solid #cacaca;
  overflow: hidden;
  height: 300px;
  width: 265px;
  margin-right: 2%;
`

export const Image = styled.img`
  width: 100%;
  //height: 100%;
`

export const CardList = styled.div`
  margin: 40px 0 100px 2%;
  display: flex;
`

const CardsImage = styled.div`
  overflow: hidden;
  height: 180px;
  //background: #646cff;
`

const Title = styled.h3`
  font-weight: bolder;
  color: #ba2d45;
  padding-left: 5%;
  font-size: 18px;
  font-family: Calibri,serif;
`

const Description = styled.p`
  padding: 0 5% 0 5%;
  margin-top: -20px;
  font-size: 15px;
  font-family: Calibri, serif;
  opacity: 50%;
`