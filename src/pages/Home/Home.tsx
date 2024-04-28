import React, { Fragment } from "react";
import Logo from "./Logo";
import KeyProject from "./KeyProject";
import VideoWorks from "./VideoWorks";

const Home = () => {
  return (
    <Fragment>
      <div>
        <Logo />
        <KeyProject />
        <VideoWorks />
      </div>
    </Fragment>
  );
};

export default Home;
