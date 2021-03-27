import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

type ExpectedParams = {
  id?: string;
  name?: string;
};

const Home = () => {
  let params = useParams<ExpectedParams>();

  return (
    <Fragment>
      <div>This is the home page.</div>
      <p>Hello there, {params.name ?? "params.name not founded"}</p>
      {console.log(params)}
    </Fragment>
  );
};

export default Home;
