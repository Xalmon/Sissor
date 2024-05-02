import React from "react";
import style from "./filledButton.module.css"

const FilledButton = ({text, color, padding, borderRadius}) => {
    return (
        <button className={style.btn} style={{background: color, padding: padding, borderRadius: borderRadius}}>
            <span>{text}</span>
        </button>
    )
}

export default FilledButton