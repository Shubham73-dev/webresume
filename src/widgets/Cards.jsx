import React from 'react'
import '../styles/cards.css'

const Cards = ({serviceIconClass,serviceTitle,paraDetails}) => {
  return (
    <div class="card">
        <i className={serviceIconClass}></i>
        {/* <br/> */}
        <h3>{serviceTitle}</h3>
        <p>{paraDetails}</p>
    </div>
  )
}

export default Cards