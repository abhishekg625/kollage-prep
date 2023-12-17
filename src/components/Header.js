import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import LOGO from "./assets/logo.png";

const Header = () => {
  return (
    <header>
      <div style={{ height: 70 }}>
        <div
          style={{
            display: "flex",
            background: "#008aef9e",
            justifyContent: "space-around",
            height: 70,
            padding: 8,
          }}
        >
          <Link to="/" className="logo">
            <img
              src={LOGO}
              alt="logo"
              style={{ height: 80, width: 80, margin: 0 }}
            />
          </Link>
          <div style={{ display: "flex", marginTop: 10 }}>
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
