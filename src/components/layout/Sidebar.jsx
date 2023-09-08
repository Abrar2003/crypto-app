import "../../App.css";
import vector from "../../Assets/Vector.svg";
import facebook from "../../Assets/facebook.svg";
import linkedin from "../../Assets/linkedin.svg";
import twitter from "../../Assets/twitter.svg";
import baselineToken from "../../Assets/baseline-token.svg";
import pair from "../../Assets/fluent_pair-24-filled.svg";
import hamburger from "../../Assets/Vector (1).svg";
import { NavLink } from "react-router-dom";
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-top">
          <div className="heading">
            <img src={vector} alt="" />
            <h1>NFTify</h1>
          </div>
          <NavLink
            to={"/#"}
            className={({ isActive }) =>
              isActive ? "is-Active sidebar-tab" : "sidebar-tab"
            }
          >
            <div className="sidebar-tab sidebar-div">
              <img src={baselineToken} alt="" />
              Token Address
            </div>
          </NavLink>
          <NavLink
            to={"/pair"}
            className={({ isActive }) =>
              isActive ? "is-Active sidebar-tab" : "sidebar-tab"
            }
          >
            <div className="sidebar-tab">
              <img src={pair} alt="" />
              Pair Address
            </div>
          </NavLink>
        </div>
        <div className="sidebar-bottom">
          <img src={facebook} alt="facebook" />
          <img src={linkedin} alt="Linkedin" />
          <img src={twitter} alt="Twitter" />
        </div>
      </div>
      <div className="sidebar-mini">
        <div className="fir">
          <li className="nav-item dropdown">
            <button
              className="dropdown-toggle"
              data-bs-toggle="dropdown"
              role="button"
              aria-expanded="false"
            >
              <img src={hamburger} alt="" />
            </button>
            <ul className="dropdown-menu">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? "is-Active sidebar-tab" : "sidebar-tab"
                  }
                >
                  <div className="sidebar-tab sidebar-div">
                    <img src={baselineToken} alt="" />
                    Token Address
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/pair"}
                  className={({ isActive }) =>
                    isActive ? "is-Active sidebar-tab" : "sidebar-tab"
                  }
                >
                  <div className="sidebar-tab">
                    <img src={pair} alt="" />
                    Pair Address
                  </div>
                </NavLink>
              </li>
            </ul>
          </li>
          <div className="heading">
            <h1>NFTify</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
