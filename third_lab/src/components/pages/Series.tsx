import React, {FC} from "react";
import {comics, series} from "../Cards";
import {ArrayCards, Button, Input, Line, SearchCharacters, Title, UpScreen} from "./Screen";
import {Card, CardList} from "../Card";

export const Series: FC = () => {
    const numb = series.length;
    return (
        <div>
            <UpScreen>
                <Title>Series</Title>
                <ArrayCards>({numb})</ArrayCards>
            </UpScreen>
            <SearchCharacters>
                <Input placeholder='Search for characters by name' type="text"/>
                <Button>SEARCH</Button>
            </SearchCharacters>
            <Line></Line>
            <CardList>
                <Card card = {series[0]}/>
                <Card card = {series[1]}/>
                <Card card = {series[2]}/>
                <Card card = {series[3]}/>
            </CardList>
        </div>
    );
}