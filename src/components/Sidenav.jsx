import React from 'react'
import Button from '../widgets/Buttons'
import Icons from '../widgets/Icons'
import '../styles/sidenav.css';

const Sidenav = () => {
  return (
    <div className='sidenav_container'>
      <div className="btnsContainer">
        <Button classValue="success hamBergerMenu" btnValue={<Icons iconClass="fa-solid fa-bars" />} />
      </div>
      <div className="btnsContainer profiles_container">
        <Button btnValue={<Icons iconClass="fa-regular fa-user greenIcon" />} />
        <Button btnValue={<Icons iconClass="fa-solid fa-phone" />} />
        <Button btnValue={<Icons iconClass="fa-solid fa-paper-plane" />} />
        <Button btnValue={<Icons iconClass="fa-solid fa-suitcase" />} />
        <Button btnValue={<Icons iconClass="fa-solid fa-glasses" />} />
      </div>
      <div className="btnsContainer">
        <Button btnValue={<Icons iconClass="fa-solid fa-cloud-arrow-down greenIcon" />} />
      </div>
    </div>
  )
}

export default Sidenav