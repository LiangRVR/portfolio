import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/about/about.component";
import AddFixedFooter from "../components/add-fixed-footer/add-fixed-footer.component";
import Header from "../components/header/header.component";
import Hero from "../components/hero/hero.component";
import WorkExperience from "../components/work-experience/work-experience.component";

const Home: NextPage = () => {
  return (
    <AddFixedFooter href="#hero">
      <div className="bg-white text-black h-screen snap-y snap-mandatory scroll-smooth overflow-scroll z-0">
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
    </AddFixedFooter>
  );
};

export default Home;
