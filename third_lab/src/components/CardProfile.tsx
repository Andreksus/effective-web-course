import {CardProps} from "./Card";
import styled from "styled-components";

export function CardProfile(props: CardProps){
    return(
        <div>
            <TitleCard>Card : {props.card.title}</TitleCard>
            <CardBack>

                <ImageCardProfile src={props.card.image} alt="здесь должна быть картинка персонажа"/>
            </CardBack>

        </div>
    );
}

const TitleCard = styled.h1`
  z-index: 1;
  text-align: center;
  font-size: 40px;
  background: #888888;
  margin: 0;
  color: white;
  font-family: Avenir,serif;
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