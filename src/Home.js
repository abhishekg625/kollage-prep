import React from "react";
import Feedback from "./components/Feedback";
import MainContent from "./components/MainContent";
// import background from "./components/assets/background.png";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        // backgroundImage: `url(${background})`,
      }}
    >
      <div style={{}}>
        <MainContent />
      </div>
      <div style={{ padding: 10 }}>
        <Feedback />
      </div>
    </div>
  );
};

export default Home;
