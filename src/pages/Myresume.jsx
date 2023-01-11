import React from 'react'
import Midsection from '../components/Midsection'
import Mysection from '../components/Mysection'
import Sidenav from '../components/Sidenav'
import '../styles/myresume.css'


const Myresume = () => {
  return (
    <div className="mainContainer">
      <Sidenav />
      <Midsection />
      <Mysection />
    </div>
  )
}

export default Myresume