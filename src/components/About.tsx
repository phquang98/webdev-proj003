import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";

type CustomLocationState = {
  from?: string;
  thePersonLoginName?: string;
  randomData?: string;
};

const About = () => {
  const location = useLocation<CustomLocationState>();
  //   const {from, thePersonLoginName, randomData} = useLocation<CustomLocationState>();

  return (
    <Fragment>
      <div>About Page</div>
      <p>Location is {location.pathname}</p>
      <p>{location.state.thePersonLoginName} is seeing this page.</p>
      <p>{location.state.randomData} is passed to this page using RR.state, not R.state</p>
    </Fragment>
  );
};

export default About;
