import React, { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

const NotFound = () => {
  let history = useHistory();
  let location = useLocation();

  const naviHomePage = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // console.log("history", history);
    // console.log("location", location);
    history.push("/homepage");
  };

  return (
    <Fragment>
      <div>The page {location.pathname} does not existed!</div>
      <button onClick={naviHomePage}>Go back to Homepage</button>
    </Fragment>
  );
};

export default NotFound;
