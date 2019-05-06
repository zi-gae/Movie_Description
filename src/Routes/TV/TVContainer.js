import React, { Component } from "react";
import TVPresenter from "./TVPresenter";

class TVContainer extends Component {
  state = {
    topRated: null,
    popular: null,
    ariringToday: null,
    error: null,
    loading: true
  };
  render() {
    const { topRated, popular, ariringToday, error, loading } = this.state;
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        ariringToday={ariringToday}
        error={error}
        loading={loading}
      />
    );
  }
}

export default TVContainer;
