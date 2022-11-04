import type { NextPage } from "next";
import React, { useRef } from "react";
import Head from "next/head";
import About from "../components/about/about.component";
import AddFixedFooter from "../components/add-fixed-footer/add-fixed-footer.component";
import Header from "../components/header/header.component";
import Hero from "../components/hero/hero.component";
import Projects from "../components/projects/projects.component";
import ContactMe from "../components/contact-me/contact-me.component";

import useWheelScroll from "../utils/useWheelScroll";

const Home: NextPage = () => {
  const divContainerRef = useRef<HTMLDivElement>(null);
  useWheelScroll(divContainerRef);

  return (
    <AddFixedFooter href="#hero">
      <div
        ref={divContainerRef}
        className="bg-white text-black h-screen snap-y snap-mandatory scroll-smooth overflow-scroll z-0 scrollbar scrollbar-hide md:scrollbar-default scrollbar-track-transparent scrollbar-thumb-[#6daffd]/70 scrollbar-thumb-rounded-xl"
      >
        <Head>
          <title>Liang`s Portfolio</title>
        </Head>
        <Header />
        <section id="hero" className="snap-start">
          <Hero />
        </section>
        <section id="about" className="snap-center">
          <About />
        </section>
        <section id="projects" className="snap-center ">
          <Projects />
        </section>
        <section id="contact-me" className="snap-center ">
          <ContactMe />
        </section>
      </div>
    </AddFixedFooter>
  );
};

export default Home;
