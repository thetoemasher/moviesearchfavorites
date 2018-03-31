import React from 'react';

function Button(props) {
    let {callback, val, text, styleName} = props;
    return (
        <div>
            <button className={`button ${styleName} `} onClick={() => callback(val)}>{text}</button>
        </div> 
    )
}

export default Button;