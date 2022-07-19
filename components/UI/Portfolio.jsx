import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/portfolio.module.css";
import PortfolioItem from "./PortfolioItem";

import portfolioData from "../data/portfolio";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [data, setData] = useState();

  useEffect(() => {
    if (filter === "All") {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }
    if (filter === "Game&apos;s") {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }

    if (filter === "Web Design") {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }
  }, [filter]);

  const active = `${classes.tab__btn__active}`;

  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="6" md="6" className="mb-5">
            <SectionSubtitle subtitle=" My Projects" />
            <h4 className="mt-4">Some of my works</h4>
          </Col>

          <Col lg="6" md="6"><br/>
            <div className={`${classes.tab__btns} text-end`}>

            <button
                className={` ${
                  filter === "All" ? active : ""
                } secondary__btn text-white`}
                onClick={() => setFilter("All")}
              >All
                </button><button
                className={` ${
                  filter === "Game&apos;s" ? active : ""
                } secondary__btn text-white`}
                onClick={() => setFilter("Game&apos;s")}
              >
                Game&apos;s
              </button>
              <button
                className={`${
                  filter === "Web Design" ? active : ""
                } secondary__btn text-white`}
                onClick={() => setFilter("Web Design")}
              >
                Web Design
              </button>
            </div>
          </Col>

          {data?.map((item) => (
            <Col lg="4" md="4" sm="6" key={item.id}>
              <PortfolioItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
