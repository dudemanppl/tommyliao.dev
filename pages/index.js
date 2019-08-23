import React from "react";
import Head from "next/head";
import Nav from "../components/nav";

const Home = () => (
  <div>
    <Head>
      <title>tommyliao.dev</title>
      <link
        rel="icon"
        type="image/x-icon"
        href="https://dudemanppl.s3-us-west-1.amazonaws.com/favicon.ico"
      />
    </Head>

    <Nav />

    <div className="hero" id="top" />
    <div id="test">test</div>

    <style jsx>{`
      .hero {
        height: 2000px;
      }
    `}</style>
  </div>
);

export default Home;
