import React, {useState, FC, createElement} from 'react';
import {Footer} from './components/Footer'
import {Head, Header, Links, Links_Pages, Logo, Props} from './components/Header'
import {Screen} from './components/pages/Screen'
import styled from "styled-components";
import {BrowserRouter, NavLink, Route, Router, Routes} from "react-router-dom";

const App = () => {
    const [idScreen, screenChange] = useState(1);


    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                {/*<Header/>*/}
                <Route path={'/Characters'} element={<Screen/>}/>
                <Route path={'/Comics'} element={<Screen/>}/>
                <Route path={'/Series'} element={<Screen/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;
