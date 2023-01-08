import { useState, FC } from 'react';
import {Header} from "./components/Header";
import {Footer} from './components/Footer'


const App: FC = () => {
    const [count, setCount] = useState(0);

    return(
        <div>
            <Header/>
            <Footer/>
        </div>
    );
};

export default App;
