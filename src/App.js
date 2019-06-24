import React from 'react';
import './App.css';
import Goodbye from './goodbye';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Goodbye name='Moataz' age={30}/>
            </header>
        </div>
    );
}

export default App;
