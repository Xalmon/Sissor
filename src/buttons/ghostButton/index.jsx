import React from 'react';
import style from "./ghostButton.module.css";

const GhostButton = ({ text, padding, callBack, color }) => {
    return (
        <div>
            <button className={style.btn} style={{ padding }} onClick={callBack}>
                <span>{text}</span>
            </button>
        </div>
    );
}

export default GhostButton;
