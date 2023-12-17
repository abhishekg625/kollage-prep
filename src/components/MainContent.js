import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Styles from "./styles/MainContentStyles";

const MainContent = () => {
  return (
    <div style={Styles.mainContainer}>
      <div style={Styles.subContainer}>From Test Prep to Top Colleges!</div>
      <div style={{ fontWeight: 500 }}>
        We at Crack Collage guide students through the SAT, ACT, AP, IB, IGCSE,
        and Pre-College Prep.
        <br /> Join us for in-person or online classes.
      </div>
      <div style={Styles.phoneContainer}>
        <a href="tel:+91-9940306269">
          <div style={Styles.callUs}>Call Us</div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <FontAwesomeIcon icon={faPhone} size="2x" />
            <div style={{ fontWeight: 700 }}>+91-9940306269</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default MainContent;
