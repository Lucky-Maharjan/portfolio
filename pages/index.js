import { Fragment } from "react";
import Hero from "../components/UI/Hero";

import About from "../components/UI/About";
import Services from "../components/UI/Services";
import Portfolio from "../components/UI/Portfolio";
import Testimonial from "../components/UI/Testimonial";
import Contact from "../components/UI/Contact";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Services />
      <About />
      <Testimonial />
      <Portfolio />
      <Contact />
    </Fragment>
  );
}
