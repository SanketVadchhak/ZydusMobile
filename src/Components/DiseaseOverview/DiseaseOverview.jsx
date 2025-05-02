import React from "react";
import "../../Styles/DiseaseOverview.css";
import Main from "../../assets/disease-overview.WEBP";

const DiseaseOverview = () => {
  return (
    <div className="disease-overview">
      <div className="disease-overview-title">
        <h3>
          What is Chronic Kidney Disease (<span>CKD</span>)?
        </h3>
        <p>
          CKD is a progressive loss of kidney function that affects millions
          worldwide. Early detection can prevent complications
        </p>
      </div>
      <div className="disease-overview-image">
        <img src={Main} alt="" />
      </div>
      <div className="disease-overview-link">
        <p>Want to know more Chronic Kidney Disease?</p>
        <div className="learn-more">
          <a href="">Learn More</a>
          <span> →</span>
        </div>
      </div>
    </div>
  );
};

export default DiseaseOverview;
