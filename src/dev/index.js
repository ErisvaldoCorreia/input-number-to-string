import React from 'react';
import ReactDOM from 'react-dom';

import { NumberToString } from '../lib';

//const App = () => <h1>Input Number to String</h1>
const App = () => {
    return(
        <NumberToString />
    )
}

ReactDOM.render(<App />, document.getElementById("root"));