import React from 'react';

function Button(props) {
    let { callback, val, text, styleName, number } = props;
    return (
        <div>
            <button value={`${number}`} className={`button ${styleName} `} onClick={() => callback(val)}>{text}</button>
        </div> 
    )
}

export default Button;