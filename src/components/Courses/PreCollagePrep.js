import React from "react";

const PreCollagePrep = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: 20,
        height: "100vh",
      }}
    >
      <div style={{ fontWeight: 700, color: "red" }}>
        Pre Collage Preparation
      </div>
      <div
        style={{
          margin: 20,
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: "black",
          borderRadius: 20,
          padding: 10,
          width: "fit-content",
        }}
      >
        Preparation for various collages entrances
      </div>
    </div>
  );
};

export default PreCollagePrep;
