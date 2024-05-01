import React, { Fragment } from "react";
import Logo from "./Logo";
import KeyProject from "./KeyProject";
import VideoWorks from "./VideoWorks";
import Tutoring from "./Tutoring";
import Clients from "./Clients";

const Home = () => {
  return (
    <>
      <div>
        <Logo />
        <KeyProject />
        <VideoWorks />
        <Tutoring />
        <Clients />
      </div>
    </>
  );
};

export default Home;
