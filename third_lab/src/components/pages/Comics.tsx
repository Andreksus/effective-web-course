import React, {FC} from "react";
import {comics} from "../Cards";
import {ArrayCards, Button, Input, Line, SearchCharacters, Title, UpScreen} from "./Screen";
import {Card, CardList} from "../Card";

export const Comics: FC = () => {
    const numb = comics.length;
    return (
        <div>
            <UpScreen>
                <Title>Comics</Title>
                <ArrayCards>({numb})</ArrayCards>
            </UpScreen>
            <SearchCharacters>
                <Input placeholder='Search for characters by name' type="text"/>
                <Button>SEARCH</Button>
            </SearchCharacters>
            <Line></Line>
            <CardList>
                <Card card = {comics[0]}/>
                <Card card = {comics[1]}/>
                <Card card = {comics[2]}/>
            </CardList>
        </div>
    );
}