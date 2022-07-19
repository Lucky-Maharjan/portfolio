import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>

          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>

                <SectionSubtitle subtitle="What I do" />
                <br/>

              <ServicesItem title="Game Development" icon="ri-gamepad-line"/>
              <ServicesItem title="UI / UX Design" icon="ri-computer-line" />
              </div>

              <ServicesItem title="Web Development" icon="ri-code-s-slash-line" className="mt-5"/>
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            {/* <SectionSubtitle subtitle="What I do" /> */}
            <br/>
            <br/>
<br/>
<br/>
<br/>
<br/>

<br/>
<center>
            <h3 className="mb-0 mt-3">Stop ! This Developer Is Not Ready Yet !</h3>
            </center>
<br/>
<br/>
<br/>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non amet
              culpa nobis corporis officiis, numquam cupiditate, enim expedita
              eveniet dolorum, aliquid nesciunt sapiente illo voluptatum!
              Dolores fuga mollitia atque, placeat minima quibusdam accusantium!
              Veniam, non distinctio dolorem rerum laboriosam deleniti.
            </p> */}
<br/>

            {/* <h3 className="mb-4"><center>Better Ideas, Better Experience </center></h3> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
