import React, {FC} from "react";
import {ArrayCards, Button, Input, Line, SearchCharacters, Title, UpScreen} from "./Screen";
import {Card, CardList} from "../Card";
import {characters} from "../Cards";

export const Characters: FC = () => {
    const numb = characters.length;
    return (
        <div>
            <UpScreen>
                <Title>Characters</Title>
                <ArrayCards>({numb})</ArrayCards>
            </UpScreen>
            <SearchCharacters>
                <Input placeholder='Search for characters by name' type="text"/>
                <Button>SEARCH</Button>
            </SearchCharacters>
            <Line></Line>
            <CardList>
                <Card card = {characters[0]}/>
                <Card card = {characters[1]}/>
                <Card card = {characters[2]}/>
                <Card card = {characters[3]}/>
            </CardList>
        </div>
    );
}