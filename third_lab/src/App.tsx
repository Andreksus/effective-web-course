import { useState, FC } from 'react';
import {Header} from "./components/Header";



const App: FC = () => {
    const [count, setCount] = useState(0);

    return(
        <Header/>
    );
};

export default App;
