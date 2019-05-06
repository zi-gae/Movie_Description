import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Header from "./Header";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" component={TV} />
        <Route path="/search" component={Search} />
        <Route path="/movie/:id" component={Detail} />
        <Route path="/show/:id" component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
// exact 경로와 완벽히 일치 해야함.
// Redirect 라우터의 else 같은 역할
// Switch 중복되는 경로가 있어 두개의 라우터가 render 되는걸 막아줌
