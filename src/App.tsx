import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import HomePage from "./components/Home";
import AboutPage from "./components/About";
import NotFoundPage from "./components/NotFound";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <div>
          <Link to="/homepage">Home</Link>
          <Link
            to={{
              pathname: "/about",
              state: {
                from: "root",
                thePersonLoginName: "johndoe123",
                randomData: "transferedUsingRR.state",
              },
            }}
          >
            About
          </Link>
        </div>

        <Switch>
          <Route path="/homepage" exact component={HomePage} />
          <Route path="/homepage/:name" exact component={HomePage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="*" exact component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
