import { useState } from "react";
import "../App.css";
import { useNavigate } from 'react-router-dom';
import "./landingpagestyle.css";
import Navbar from "../Navbar/Navbar";
import Spline from "@splinetool/react-spline";
import AuthComponent from "../AuthComponent/AuthComponent";

function LandingPage() {
  const [dataTheme, setDataTheme] = useState("dark");
  const history = useNavigate()

  const toggleAppearance = () => {
    setDataTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const [showAuth, setShowAuth] = useState(false);

  const handleAuthDisplay = () => {
    setShowAuth(!showAuth);
    console.log(showAuth);
  };

  const handleAuthSuccess = () => {
    // Perform any additional actions after successful authentication

    // Redirect to the dashboard page
    history('/dashboard');
  };

  return (
    <div id="app" data-theme={dataTheme}>
      <Navbar
        toggleAppearance={toggleAppearance}
        dataTheme={dataTheme}
        handleAuthDisplay={handleAuthDisplay}
      />
      {showAuth && <AuthComponent handleAuthDisplay={handleAuthDisplay} onSuccess={handleAuthSuccess} />}
      <Spline scene="https://prod.spline.design/wl5PgB0SzoixftDZ/scene.splinecode" />
      {/* <section className='landing-main'> */}
      <div className="landing-left">
        <h1 className="landing-header">Project Pilot</h1>
        <p className="landing-text">
          Welcome to Project Pilot – your all-in-one project management
          solution. Allocate tasks, monitor progress, and collaborate seamlessly
          with our user-friendly platform. Experience efficiency like never
          before!
        </p>
      </div>
      {/* </section> */}
    </div>
  );
}

export default LandingPage;
