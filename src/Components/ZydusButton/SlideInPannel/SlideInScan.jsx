import React from 'react'

const SlideInScan = ({ isOpen, onClose }) => {
  return (
    <div className={`slide-page-y ${isOpen ? "open" : ""}`}>
      <div className="back-button" onClick={onClose}>
        ← Back
      </div>
    </div>
  )
}

export default SlideInScan