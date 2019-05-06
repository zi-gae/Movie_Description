import React, { Component } from "react";
import DetailPresenter from "./DetailPresenter";

class DetailContainer extends Component {
  state = {
    nowPlaying: null,
    upcomming: null,
    popular: null,
    error: null,
    loading: true
  };
  render() {
    const { nowPlaying, upcomming, popular, error, loading } = this.state;
    return (
      <DetailPresenter
        nowPlaying={nowPlaying}
        upcomming={upcomming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}

export default DetailContainer;
