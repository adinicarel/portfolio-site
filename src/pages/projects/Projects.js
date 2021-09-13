import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import Badge from "react-bootstrap/Badge";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { projectsHeader } from "../../portfolio.js";
import { projectcards } from "../../portfolio";
import { CardColumns, Card } from "react-bootstrap";
import "./Projects.css";
import ProjectsAnim from "./ProjectsAnim";
import image1 from "../../assets/projects/movy-es-frontend.png";
import image2 from "../../assets/projects/movy-es-backend.png";
import image3 from "../../assets/projects/robofriends.png";
import image4 from "../../assets/projects/forkify.png";

class Projects extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsAnim theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.orange }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.text }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          <CardColumns>
            {projectcards.list.map((proj) => {
              const projectImage =
                proj.id === 1
                  ? image1
                  : proj.id === 2
                  ? image2
                  : proj.id === 3
                  ? image3
                  : proj.id === 4
                  ? image4
                  : null;
              return (
                <Card>
                  <Card.Img
                    variant="top"
                    key={proj.id}
                    alt={proj.title.toLocaleLowerCase()}
                    src={projectImage}
                  />
                  <Card.Body>
                    <Card.Title>
                      <h2 style={{ lineHeight: "1.5", marginTop: "0" }}>
                        {proj.title}
                        {proj.code !== "" ? (
                          <a
                            style={{ color: theme.text }}
                            href={proj.code}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i
                              className={`fab fa-github`}
                              style={{
                                color: proj.linkcolor,
                                paddingLeft: "10px",
                              }}
                            ></i>
                          </a>
                        ) : (
                          <span></span>
                        )}
                      </h2>
                    </Card.Title>
                    <div>
                      {proj.tags.map((demo2) => {
                        return (
                          <Badge
                            style={{
                              marginRight: "0.5em",
                              backgroundColor: demo2.color,
                            }}
                          >
                            {" "}
                            {demo2.lang}
                          </Badge>
                        );
                      })}
                    </div>
                    <div
                      className="text-center"
                      style={{ marginTop: "20px" }}
                    ></div>
                    <Card.Text>{proj.description}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </CardColumns>
        </div>
        <Button
          text={"More info"}
          className="project-button"
          href="https://github.com/adinicarel/"
          newTab={true}
          theme={theme}
        />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
