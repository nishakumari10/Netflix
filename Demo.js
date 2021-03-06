import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

const Demo= (props)=>{
    return <div className="maindiv">
        <h1>Hello{props.name}</h1>
        <p>welcome to React js</p>
    </div>
}
export default Demo;



