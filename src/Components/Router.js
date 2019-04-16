import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";

const Router = () => (
  <HashRouter>
    <>
      <Route path="/" exact component={Home} />
      <Route path="/tv" exact component={TV} />
      <Route path="/search" exact component={Search} />
      {/* exact 가 붙으면 경로와 정확히 일치 해야한다. */}
    </>
  </HashRouter>
);

export default Router;
