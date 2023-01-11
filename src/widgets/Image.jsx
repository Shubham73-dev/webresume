import React from 'react'

const Image = ({ chooseImage, alternateText }) => {
    const imageUrl = require(`../assets/images/${chooseImage}.jpg`);
    const myAlt = `${alternateText}`
    return (
        <img src={imageUrl} alt={myAlt} />
    )
}

export default Image