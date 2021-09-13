import React from "react";
import "./CompetitiveSites.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class CompetitiveSites extends React.Component {
  render() {
    return (
      <div className="competitive-sites-main-div dev-icons">
        {this.props.logos.map((logo) => {
          return (
            <OverlayTrigger
              key={logo.siteName}
              placement={"top"}
              style={{ marginBottom: "5px" }}
              overlay={
                <Tooltip id={`tooltip-top`}>
                  <strong>{logo.siteName}</strong>
                </Tooltip>
              }
            >
              <a
                className="competitive-sites-inline"
                name={logo.siteName}
                href={logo.profileLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  className="iconify"
                  data-icon={logo.iconifyClassname}
                  style={logo.style}
                  data-inline="false"
                ></span>
              </a>
            </OverlayTrigger>
          );
        })}
      </div>
    );
  }
}

export default CompetitiveSites;
