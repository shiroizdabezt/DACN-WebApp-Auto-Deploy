import React from 'react'
import './DescriptionBox.css'


const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Review</div>
      </div>
      <div className='descriptionbox-descriptin'>
        <p>Toi ten la le xuan linh toi co vo ten la ai nu va 1 co vo le ten la ngoc diem</p>
        <p>Toi la lxl toi bu cac</p>
      </div>
    </div>
  )
}

export default DescriptionBox