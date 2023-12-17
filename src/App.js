import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import Sat from "./components/Courses/Sat";
import Act from "./components/Courses/Act";
import Ap from "./components/Courses/Ap";
import Clep from "./components/Courses/Clep";
import Ibdp from "./components/Courses/Ibdp";
import Ibmyp from "./components/Courses/Ibmyp";
import PreCollagePrep from "./components/Courses/PreCollagePrep";
import Igcse from "./components/Courses/Igcse";
import "./App.css";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route element={<Layout />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact-us" element={<ContactUs />} />
            <Route exact path="/sat" element={<Sat />} />
            <Route exact path="/act" element={<Act />} />
            <Route exact path="/ap" element={<Ap />} />
            <Route exact path="/clep" element={<Clep />} />
            <Route exact path="/ibdp" element={<Ibdp />} />
            <Route exact path="/ibmyp" element={<Ibmyp />} />
            <Route exact path="/igcse" element={<Igcse />} />
            <Route
              exact
              path="/pre-collage-prep"
              element={<PreCollagePrep />}
            />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
