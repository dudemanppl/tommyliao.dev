import React, { useState, useEffect } from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Splash from "../components/Splash/splash";
import Projects from "../components/Projects/projects";

const Home = () => {
  const [section, setSection] = useState("");

  const scrollHandler = () => {
    const scrollHeight = window.pageYOffset;
    console.log(section);
    console.log(scrollHeight);
    if (scrollHeight <= 799) {
      setSection("");
    } else if (scrollHeight < 1200) {
      setSection("Projects");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  return (
    <div className="home">
      <Head>
        <title>tommyliao.dev</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://dudemanppl.s3-us-west-1.amazonaws.com/favicon.ico"
        />
      </Head>

      <Nav section={section} setSection={setSection} />

      <div id="Splash">
        <Splash />
      </div>

      <div id="Projects">
        <Projects />
      </div>

      <style jsx>{`
        /* latin-ext */
        @font-face {
          font-family: "Open Sans";
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: local("Open Sans Regular"), local("OpenSans-Regular"),
            url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFW50bf8pkAp6a.woff2)
              format("woff2");
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: "Open Sans";
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: local("Open Sans Regular"), local("OpenSans-Regular"),
            url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2)
              format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: "Open Sans";
          font-style: italic;
          font-weight: 700;
          font-display: swap;
          src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"),
            url(https://fonts.gstatic.com/s/opensans/v17/memnYaGs126MiZpBA-UFUKWiUNhlIqOxjaPXZSk.woff2)
              format("woff2");
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: "Open Sans";
          font-style: italic;
          font-weight: 700;
          font-display: swap;
          src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"),
            url(https://fonts.gstatic.com/s/opensans/v17/memnYaGs126MiZpBA-UFUKWiUNhrIqOxjaPX.woff2)
              format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }

        :global(body) {
          margin: 0;
          font-family: "Open Sans", sans-serif;
        }

        .home {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
};

export default Home;
