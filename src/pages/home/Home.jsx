import React from "react";
import "./Home.scss";
import { Animate } from "react-simple-animate";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    // console.log(navigate)
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello,I'm Lalita Londhe
          <br />
          Full Stack developer
        </h1>
      </div>

      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="Home__contact-me">
          <button onClick={handleNavigate}>Hire Me</button>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
