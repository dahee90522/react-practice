import React from 'react';
import style from './Box2.module.css';

function Box({size}){
    if(size==='big'){
        return <div className = {`${style.box} ${style.big}`}>큰 박스</div>;
    }
    else{
        return (
            <div className = {`${style.box} ${style.small}`}>작은 박스</div>;
        );
    }
}
console.log("box ", style);
export default Box;