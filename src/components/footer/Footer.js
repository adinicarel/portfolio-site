import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";

export default function Footer(props) {
  return (
    <footer className="footer-container">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.text }}>
          Made by {greeting.sub}
        </p>
      </Fade>
    </footer>
  );
}
