import "../../Styles/ZydusNav.css";
import Logo from "../../assets/zydus-logo.webp";
import Menu from "../../assets/menu.webp";
import Bottom from "../../assets/wavy-border.webp"

const ZydusNav = () => {
  return (
    <section className="zydus-nav">
      <div className="nav-top">
        <div className="menu-image">
          <button>
            <img src={Menu} alt="Menu Button" />
          </button>
        </div>
        <div className="logo-image">
          <img src={Logo} alt="Zydus Logo" />
        </div>
      </div>
      <div className="nav-bottom">
        <img src={Bottom} alt="Bottom Style" />
      </div>
    </section>
  );
};

export default ZydusNav;
