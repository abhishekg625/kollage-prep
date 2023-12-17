import React from "react";
import Feedback from "./Feedback";
import STD from "./assets/student.png";

const ContactUs = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          fontWeight: 600,
          fontStyle: "italic",
          fontFamily: "cursive",
          marginTop: 20,
        }}
      >
        ContactUs
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <img src={STD} alt="student" style={{ width: "30%", height: "30%" }} />
        <div>
          <Feedback />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
