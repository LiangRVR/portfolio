import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/about/about.component";
import GotoArrow from "../components/goto-arrow/goto-arrow.component";
import Header from "../components/header/header.component";
import Hero from "../components/hero/hero.component";
import WorkExperience from "../components/work-experience/work-experience.component";

const Home: NextPage = () => {
  return (
    <GotoArrow href="#hero">
      <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
        <Head>
          <title>Liang`s Portfolio</title>
        </Head>
        <Header />

        <section id="hero" className="snap-start">
          <Hero />
        </section>
        <section id="about" className="snap-center ">
          <About />
        </section>
        <section id="experience" className="snap-center ">
          <WorkExperience />
        </section>
      </div>
    </GotoArrow>
  );
};

export default Home;
