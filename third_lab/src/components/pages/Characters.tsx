import React, {FC} from "react";
import {ArrayCards, Button, Input, Line, Screen, SearchCharacters, Title, UpScreen} from "./Screen";
import {Card, CardList} from "../Card";
import {characters} from "../Cards";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Comics} from "./Comics";

export const Characters: FC = () => {
    const numb = characters.length;
    const match = '/Characters/';

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
                <Link to={"0"}><Card card = {characters[0]}/></Link>
                <Card card = {characters[0]}/>
                <Card card = {characters[1]}/>
                <Card card = {characters[2]}/>
                <Card card = {characters[3]}/>
            </CardList>
        </div>
    );
}