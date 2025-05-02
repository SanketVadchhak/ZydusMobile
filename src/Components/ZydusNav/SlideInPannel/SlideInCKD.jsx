import React from "react";
import "../../../Styles/SlideInPannel.css";
import Disease from "../../../assets/disease-overview.webp";

function SlideInCKD({ isOpen, onClose }) {
  return (
    <div className={`slide-page-x ${isOpen ? "open" : ""}`}>
      <button className="close-button" onClick={onClose}>
        ×
      </button>
      <div className="slide-page-content">
        <div className="ckd-overview">
          <h2>What is CKD?</h2>
          <p>
            Chronic Kidney Disease (CKD) is a progressive loss of kidney
            function over time. Your kidneys filter waste and excess fluids from
            your blood—when they don't work properly, toxins build up, leading
            to serious health complications.
          </p>
        </div>
        <div className="ckd-disease">
          <h2>How Common is CKD?</h2>
          <img src={Disease} alt="disease-overview" />
        </div>
        <div className="ckd-detection">
          <h2>Why Early Detection Matters?</h2>
          <p>
            CKD often develops silently, with no noticeable symptoms until
            advanced stages. Early screening can help:
            <br />
            <br />✅ Slow down progression
            <br />✅ Prevent kidney failure
            <br />✅ Improve overall health
          </p>
        </div>
        <div className="ckd-charge">
          <h2>How to Take Charge?</h2>
          <p>
            🩺 Book a Test – Regular screenings like eGFR, creatinine, and urine
            tests can detect kidney issues early.<br /><br /> 🍽 Scan Your Food – Diet plays
            a crucial role in kidney health. Our PNDS Score helps you choose the
            right foods based on your health profile.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SlideInCKD;
