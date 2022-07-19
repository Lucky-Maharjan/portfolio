import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";
import classes from "../../styles/about.module.css";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
        <Col lg="6" className={`${classes.about__content}`}>
        <SectionSubtitle subtitle="About me" />
            <br/>

            <h3 className="mb-4" >Know Me More</h3>

            <p>
            Hello again! Thanks for scrolling this far!!<br/>
                I started out using HTML and CSS. I am also familiar
                with some programming languages, including C, C#, and the Unity Game Engine.
                I'm currently researching design and intend to pursue a profession in the field of
                development and design.
                I'm interested in game and website development, as well as UI/UX design.<br/>
</p>
          </Col>
          <Col lg="6" className={`${classes.about__content2}`}>
            <div className="mt-20"><center>
<br/>
            <p>I've never worked for a client. As part of a project, I made a couple games and webpages.
            I am putting a lot of effort into my goal of becoming a game developer.
                </p>
                <br/>
              <button className="primary__btn">
                <Link href="# ">View CV</Link>
              </button>
              </center>
            </div>
          </Col>


        </Row>
      </Container>
    </section>
  );
};

export default About;
