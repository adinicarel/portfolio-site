import React from "react";
import "./Greeting.css";
// import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import LottieGreeting from "./LottieGreeting";
import Typewriter from "typewriter-effect";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import { competitiveSites } from "../../portfolio";
export default function Greeting(props) {
  const theme = props.theme;

  return (
    <Fade bottom duration={2000} distance="40px">
      <section className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <p className="greeting-text" style={{ color: theme.orange }}>
                {greeting.title}
              </p>
              <h1 className="greeting-sub" style={{ color: theme.grayText }}>
                I'm <mark data-entity="person">{greeting.sub}</mark>
              </h1>
              <h2 className="greeting-typewriter" style={{ color: theme.blue }}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Playful")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Clean")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Responsive")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Friendly")
                      .pauseFor(200)
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>
              <h3
                className="greeting-text-span subTitle"
                style={{ color: theme.text }}
              >
                <span className="entities">
                  Passionate{" "}
                  <mark data-entity="noun"> Web Development practitioner </mark>{" "}
                  who thrives to <mark data-entity="verb"> make a mark </mark>{" "}
                  going for cunning{" "}
                  <mark data-entity="freelance"> Programming challenges </mark>
                  on a tenacious{" "}
                  <mark data-entity="skill">quest for solutions</mark>
                </span>
              </h3>
            </div>
          </div>
          <div className="greeting-image-div">
            <LottieGreeting />
          </div>
        </div>
        <div className="greeting-links">
          <CompetitiveSites logos={competitiveSites.competitiveSites} />
          <div className="button-greeting-div">
            <Button text="Contact me" href="/contact" />
          </div>
        </div>
      </section>
    </Fade>
  );
}
