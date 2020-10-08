import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import { NumberToString } from '../lib';

//const App = () => <h1>Input Number to String</h1>
const App = () => {
    const [numero, setNumero] = useState('');

    return(
        <div>
            <NumberToString 
                returnType="monetario"
                onChange={numero => setNumero(numero)}
            />
            <h3>Numero em Extenso: {numero}</h3>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));