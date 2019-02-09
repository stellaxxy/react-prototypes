import React from 'react';
import ReactDOM from 'react-dom';


function luckyNumber(){
    let randomNum = Math.floor(Math.random()*1000 + 1);
    return randomNum;
}

let user = {
    name: 'Arial',
    luckyNumber: luckyNumber()
};

function Greeting(props){
    return(
        <div className="container">
            <h1>Hello! Welcome {props.user.name}!</h1>
            <h2 className="text-muted">{props.user.name}'s lucky number is {props.user.luckyNumber}</h2>
        </div>
    )
}

ReactDOM.render(
    <Greeting user={user}/>,
    document.getElementById('root')
);
