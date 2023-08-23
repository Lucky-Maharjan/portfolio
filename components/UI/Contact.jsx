import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4">Connect with me</h3>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Sydney - Australia</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-tv-2-line"></i>
                </span>
                <p>www.maharjansmriti.com.np</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>smritimhj_2000@hotmail.com</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <Link href="mailto:smriti_mhj2000@hotmail.com" target="_blank">
                <i className="ri-mail-fill"></i>
              </Link>
              <Link href="https://www.github.com" target="_blank">
                <i className="ri-github-fill"></i>
              </Link>
              <Link
                href="https://www.linkedin.com/in/smriti-maharjan-215271253/"
                target="_blank"
              >
                <i className="ri-linkedin-box-fill"></i>
              </Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
