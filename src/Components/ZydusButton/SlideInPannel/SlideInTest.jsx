import React from 'react'
import "../../../Styles/SlideInPannel.css"
import Worth from "../../../assets/test-worth.webp"
import Anime from "../../../assets/test-animation.webp"
import Tube from "../../../assets/test-tube.webp"

const SlideInTest = ({ isOpen, onClose }) => {
  return (
    <div className={`slide-page-y ${isOpen ? "open" : ""}`}>
      <div className="back-button" onClick={onClose}>
        <p>← Back</p>
      </div>
      <div className="test-data">
        <h2>Understand yourself better with data</h2>
        <div className="test-data-price">
          <p>Your next steps:</p>
          <img src={Worth} alt="test-worth" />
          <div className="discount-price">
            <p>Price for you <span>₹599</span> <s>₹2499</s></p>
            <p>This is our investment in you. Now its your turn!</p>
          </div>
        </div>
        <button className='book-diagnostics'>Book Diagnostics →</button>
        <div className="test-bundle">
          <h2>What is included in the test?</h2>
          <p>These tests are included in the CKD diagnostics bundle</p>
          <div className="all-tests">
            <span><img src={Tube} alt="testtube" /> FBS</span>
            <span><img src={Tube} alt="testtube" /> HBA1C Test</span>
            <span><img src={Tube} alt="testtube" /> Liver Profile</span>
          </div>
        </div>
        <img src={Anime} alt="test-animation" />
      </div>
    </div>
  )
}

export default SlideInTest