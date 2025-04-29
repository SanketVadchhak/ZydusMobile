import React from "react";
import "../../Styles/SiteFooter.css";
import ZydusLogo from "../../assets/zydus-logo.webp"
import TatvaLogo from "../../assets/tatva-logo.webp"

const SiteFooter = () => {
    return (
    <>
    <section className="site-footer">
        <div className="site-logos">
            <img src={ZydusLogo} alt="zydus-logo" className="zydus-logo" />
            <img src={TatvaLogo} alt="tatva-logo" className="tatva-logo" />
        </div>
        <div className="site-info">
            <p>Powered By MyTatva</p>
            <p>All Rights Reserved.</p>
            <p><a href="">
Terms and Conditions, and Disclaimer</a> and <a>Privacy Policy</a></p>
        </div>
    </section>
    </>
    );
};

export default SiteFooter;