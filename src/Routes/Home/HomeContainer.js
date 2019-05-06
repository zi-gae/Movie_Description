import React, { Component } from "react";
import HomePresenter from "./HomePresenter";
import { movieApi } from "api";

class HomeContainer extends Component {
  state = {
    nowPlaying: null,
    upcomming: null,
    popular: null,
    error: null,
    loading: true
  };
  componentDidMount = async () => {
    try {
      const {
        data: { results: nowPlaying }
      } = await movieApi.nowPlaying();
      const {
        data: { results: upcomming }
      } = await movieApi.upcomming();
      const {
        data: { results: popular }
      } = await movieApi.popular();
      this.setState({
        nowPlaying,
        upcomming,
        popular
      });
    } catch (error) {
      this.setState({
        error: "영화를 찾지 못했습니다."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  };
  render() {
    const { nowPlaying, upcomming, popular, error, loading } = this.state;

    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcomming={upcomming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}

export default HomeContainer;
