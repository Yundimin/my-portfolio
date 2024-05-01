import React, { Fragment } from "react";
import Logo from "./Logo";
import KeyProject from "./KeyProject";
import VideoWorks from "./VideoWorks";
import Tutoring from "./Tutoring";

const Home = () => {
  return (
    <>
      <div>
        <Logo />
        <KeyProject />
        <VideoWorks />
        <Tutoring />
      </div>
    </>
  );
};

export default Home;
