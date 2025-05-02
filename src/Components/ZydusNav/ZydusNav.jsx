import React, { useState } from "react";
import "../../Styles/ZydusNav.css";
import Logo from "../../assets/zydus-logo.webp";
import Menu from "../../assets/menu.webp";
import Close from "../../assets/close.webp";
import Bottom from "../../assets/wavy-border.webp";
import Gt from "../../assets/nav-gt.webp"

import SlideInCKD from "./SlideInPannel/SlideInCKD";
import SlideInPodcasts from "./SlideInPannel/SlideInPodcasts";

const ZydusNav = () => {
  // null = nothing open, 'ckd' = CKD panel, 'podcasts' = Podcasts panel
  const [openPage, setOpenPage] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((m) => !m);
    // Optionally also reset any open panel when menu closes:
    // if (isMenuOpen) setOpenPage(null);
  };

  return (
    <section className="zydus-nav">
      <div className="nav-top">
        <div className="menu-image">
          <button onClick={toggleMenu}>
            <img
              src={isMenuOpen ? Close : Menu}
              alt={isMenuOpen ? "Close Menu" : "Open Menu"}
            />
          </button>
        </div>

        {!isMenuOpen && (
          <div className="logo-image">
            <img src={Logo} alt="Zydus Logo" />
          </div>
        )}
      </div>

      {isMenuOpen && (
        <div className="menu-overlay">
          <div
            className="ckd"
            onClick={() => setOpenPage("ckd")}
            style={{ cursor: "pointer" }}
          >
            <p>Know more about CKD</p>
            <img src={Gt} alt="enter-link" />
          </div>

          <div
            className="podcasts"
            onClick={() => setOpenPage("podcasts")}
            style={{ cursor: "pointer" }}
          >
            <p>View all podcasts</p>
            <img src={Gt} alt="enter-link" />
          </div>
        </div>
      )}

      <div className="nav-bottom">
        <img src={Bottom} alt="Decorative Border" />
      </div>

      {/* Slide-in for CKD */}
      <SlideInCKD
        isOpen={openPage === "ckd"}
        onClose={() => setOpenPage(null)}
      />

      {/* Slide-in for Podcasts */}
      <SlideInPodcasts
        isOpen={openPage === "podcasts"}
        onClose={() => setOpenPage(null)}
      />
    </section>
  );
};

export default ZydusNav;
