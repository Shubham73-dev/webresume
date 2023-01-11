import React from 'react'
import Image from '../widgets/Image'
import '../styles/midsection.css'

const Midsection = () => {
    return (
        <div className="imgContainer">
            <Image chooseImage="myimage" alternateText="my image" />
        </div>

    )
}

export default Midsection