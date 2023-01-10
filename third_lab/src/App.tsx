import React, {useState, FC, createElement} from 'react';
import {Footer} from './components/Footer'
import {Head, Header, Links, Links_Pages, Logo, Props} from './components/Header'
import {Screen} from './components/pages/Screen'
import styled from "styled-components";
import {BrowserRouter, NavLink, Route, Router, Routes} from "react-router-dom";
import {Card, CardList} from "./components/Card";
import {Characters} from "./components/pages/Characters";
import {Comics} from "./components/pages/Comics";
import {Series} from "./components/pages/Series";

const App = () => {
    const [idScreen, screenChange] = useState(1);

    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={'/Characters/*'} element={<Characters/>}/>
                <Route path={'/Comics'} element={<Comics/>}/>
                <Route path={'/Series'} element={<Series/>}/>
                <Route path={"/Characters/0"} element={<Comics/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;
