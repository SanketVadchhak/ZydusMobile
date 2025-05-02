import React, { useState } from "react";
import "../../Styles/ZydusButton.css";
import SlideInScan from "./SlideInPannel/SlideInScan";
import SlideInTest from "./SlideInPannel/SlideInTest";

const ZydusButton = () => {
  const [openPage, setOpenPage] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((m) => !m);
  };

  return (
    <section className="zydus-buttons">
      <div
        className="book-test"
        onClick={() => setOpenPage("book-test")}
        style={{ cursor: "pointer" }}
      >
        <button>Book Tests</button>
      </div>
      <div
        className="scan-food"
        onClick={() => setOpenPage("scan-food")}
        style={{ cursor: "pointer" }}
      >
        <button>Scan Food</button>
      </div>

      {/* Slide-in for CKD */}
      <SlideInTest
        isOpen={openPage === "book-test"}
        onClose={() => setOpenPage(null)}
      />

      {/* Slide-in for Podcasts */}
      <SlideInScan
        isOpen={openPage === "scan-food"}
        onClose={() => setOpenPage(null)}
      />
    </section>
  );
};

export default ZydusButton;
