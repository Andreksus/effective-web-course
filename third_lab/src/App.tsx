import React from 'react';
import {Footer} from './components/Footer'
import {Header} from './components/Header'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Characters} from "./components/pages/Characters";
import {Comics} from "./components/pages/Comics";
import {Series} from "./components/pages/Series";
import {CardProfile} from "./components/CardProfile";
import {characters, comics, series} from "./components/Cards";

const App = () => {
    const charactersTitle = 'Characters'
    const comicsTitle = 'Comics'
    const seriesTitle = 'Series'


    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={'/Characters/*'} element={<Characters/>}/>
                <Route path={'/Comics'} element={<Comics/>}/>
                <Route path={'/Series'} element={<Series/>}/>

                <Route path={'/' + charactersTitle + '/' + JSON.stringify(0)} element={<CardProfile card={characters[0]}/>}/>
                <Route path={'/' + charactersTitle + '/' + JSON.stringify(1)} element={<CardProfile card={characters[1]}/>}/>
                <Route path={'/' + charactersTitle + '/' + JSON.stringify(2)} element={<CardProfile card={characters[2]}/>}/>
                <Route path={'/' + charactersTitle + '/' + JSON.stringify(3)} element={<CardProfile card={characters[3]}/>}/>

                <Route path={'/' + comicsTitle + '/' + JSON.stringify(0)} element={<CardProfile card={comics[0]}/>}/>
                <Route path={'/' + comicsTitle + '/' + JSON.stringify(1)} element={<CardProfile card={comics[1]}/>}/>
                <Route path={'/' + comicsTitle + '/' + JSON.stringify(2)} element={<CardProfile card={comics[2]}/>}/>

                <Route path={'/' + seriesTitle + '/' + JSON.stringify(0)} element={<CardProfile card={series[0]}/>}/>
                <Route path={'/' + seriesTitle + '/' + JSON.stringify(1)} element={<CardProfile card={series[1]}/>}/>
                <Route path={'/' + seriesTitle + '/' + JSON.stringify(2)} element={<CardProfile card={series[2]}/>}/>
                <Route path={'/' + seriesTitle + '/' + JSON.stringify(3)} element={<CardProfile card={series[3]}/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;
