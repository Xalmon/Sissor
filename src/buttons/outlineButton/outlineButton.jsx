import React from 'react';

import style from "./outlineButton.module.css";

const OutlineButton = ({text, color}) => {
   
    return (
        <div>
            <button className={style.btn} style={{background: color}}>
                <span>{text}</span>
            </button>
        </div>
    );
}
export default OutlineButton;