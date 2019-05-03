import React, { Component } from "react";
import HomePresenter from "./HomePresenter";

class HomeContainer extends Component {
  state = {
    nowPlaying: null,
    upcomming: null,
    popular: null,
    error: null
  };
  render() {
    const { nowPlaying, upcomming, popular, error } = this.state;
    return <HomePresenter />;
  }
}

export default HomeContainer;
