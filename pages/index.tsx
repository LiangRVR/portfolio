import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header.component";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Liang`s Portfolio</title>
      </Head>
      <Header />
    </div>
  );
};

export default Home;
