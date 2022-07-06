import React from 'react';
import ReactDOM from 'react-dom/client';

function APP(){
    return ( <h1>Hola Mundo!!!</h1> );
}

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <APP/>
    </React.StrictMode>
)

