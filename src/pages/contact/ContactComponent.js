import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import ContactAnim from "./ContactAnim";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { contactPageData } from "../../portfolio.js";

const contactData = contactPageData.contactSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <main className="basic-contact">
          <Fade bottom duration={1500} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <ContactAnim theme={theme} />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.orange }}
                >
                  {contactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.text }}
                >
                  {contactData["description"]}
                </p>
                <SocialMedia theme={theme} />
                <div className="resume-btn-div">
                  <Button
                    text="Drop a mail"
                    newTab={true}
                    href="mailto:adrian.nicarel@gmail.com"
                    theme={theme}
                  />
                </div>
                <h2
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {addressSection["title"]}
                </h2>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.blue }}
                >
                  {addressSection["subtitle"]}
                </p>
                <h2
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {phoneSection["title"]}
                </h2>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.blue }}
                >
                  {phoneSection["subtitle"]}
                </p>
              </div>
            </div>
          </Fade>
        </main>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}
export default Contact;
