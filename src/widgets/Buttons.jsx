import React from 'react'


const Button = ({classValue,btnValue})=> {
    const myClass = `btn btn-${classValue}`;
    return(
        <button className={myClass}>{btnValue}</button>
    )
}

export default Button;