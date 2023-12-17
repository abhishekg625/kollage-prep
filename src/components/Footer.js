import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        position: "relative",
        bottom: 0,
        background: "#008aef9e",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div style={{}}>Join with us to land in ur dream school!</div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              fontWeight: 600,
              fontStyle: "italic",
              fontFamily: "cursive",
            }}
          >
            CrackCollage
          </div>
          © 2023. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
