import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Splash from "../components/Splash/splash";

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

    <div id="top">
      <Splash />
    </div>

    <div className="test">test</div>

    <style jsx>{`
      .test {
        top: 860px;
        height: 2000px;
        background: grey;
        z-index: 1;
        position: relative;
      }
    `}</style>
  </div>
);

export default Home;
