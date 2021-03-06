import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards";
import Sdata from "./Sldata";
import "./index.css";

function ncard(val) {


}

ReactDOM.render(
    <>
    <h1 className="heading_style">List of top  Netflix in 2020</h1>

{Sdata.map(function ncard(val){
    return(
        <Card
        imgsrc={val.imgsrc}
        title={val.title}
       sname={val.sname}
        link={val.link}
/> 

    );
}
)}
</>,
    document.getElementById("root")
);