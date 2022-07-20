import { Fragment } from "react";
import Head from "next/head";
import Hero from "../components/UI/Hero";

import About from "../components/UI/About";
import Services from "../components/UI/Services";
import Portfolio from "../components/UI/Portfolio";
import Testimonial from "../components/UI/Testimonial";
import Contact from "../components/UI/Contact";

export default function Home() {
  return (
    <div>
    <Head>
        <title>Smriti Maharjan</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Fragment>
      <Hero />
      <Services />
      <About />
      <Testimonial />
      <Portfolio />
      <Contact />
    </Fragment>
    </div>
  );
}
