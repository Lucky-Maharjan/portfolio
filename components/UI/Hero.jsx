import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/hero6.png";
import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Welcome" />
              <h2 className="mt-3 mb-3">I&apos;m Smriti Maharjan</h2>
              <h5 className="mb-4"> Developer</h5>
              <p>
              Hi, I work as a front-end web developer and a game developer in my career.
              </p>

              <div className={`${classes.social__links}`}>


              <Link href="mailto:smriti_mhj2000@hotmail.com" target="_blank">
                <i className="ri-mail-fill"></i>
              </Link>
              <Link href="https://www.github.com" target="_blank">
                <i className="ri-github-fill"></i>
              </Link>
              <Link href="https://www.linkedin.com" target="_blank">
                <i className="ri-linkedin-box-fill"></i>
              </Link>

            </div>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="#contact">Let&apos;s Talk</Link>
                </button>


              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">

            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="400" height="400" />


            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Hero;
