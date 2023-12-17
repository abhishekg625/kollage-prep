import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const MainContent = () => {
  return (
    <div style={{ margin: 40 }}>
      <div
        style={{
          fontWeight: 600,
          fontStyle: "italic",
          fontFamily: "cursive",
          fontSize: 60,
        }}
      >
        From Test Prep to Top Colleges!
      </div>
      <div style={{ fontWeight: 500 }}>
        We at Crack Collage guide students through the SAT, ACT, AP, IB, IGCSE,
        and Pre-College Prep.
        <br /> Join us for in-person or online classes.
      </div>
      <div
        style={{
          display: "flex",
          margin: 20,
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: "black",
          borderRadius: 20,
          padding: 10,
          width: "fit-content",
        }}
      >
        <a href="tel:+91-9940306269">
          <div
            style={{
              fontWeight: 600,
              display: "flex",
              justifyContent: "center",
            }}
          >
            Call Us{" "}
          </div>
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
