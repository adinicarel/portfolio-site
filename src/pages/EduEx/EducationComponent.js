import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
// import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import EduAnim from "./EduAnim";
// import { competitiveSites } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";
import Resume from "./Resume";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <main className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                <EduAnim theme={theme} />
              </div>
              <section className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.orange }}>
                  Experience &#38; Education
                </h1>
                <h2 className="heading-sub-text" style={{ color: theme.text }}>
                  Tech Stack
                </h2>
                {skills.data.map((skill) => {
                  return <SoftwareSkill logos={skill.softwareSkills} />;
                })}
              </section>
            </div>
          </Fade>
          <Resume />
          <Certifications theme={this.props.theme} />
        </main>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
