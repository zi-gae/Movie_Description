import React, { Component } from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "../../api";

class TVContainer extends Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    error: null,
    loading: true
  };

  componentDidMount = async () => {
    try {
      const {
        data: { results: airingToday }
      } = await tvApi.airingToday();
      const {
        data: { results: popular }
      } = await tvApi.popular();
      const {
        data: { results: topRated }
      } = await tvApi.topRated();
      this.setState({
        airingToday,
        popular,
        topRated
      });
    } catch (error) {
      this.setState({
        error: "TV 를 찾을 수 없습니다."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  };
  render() {
    const { topRated, popular, airingToday, error, loading } = this.state;
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        error={error}
        loading={loading}
      />
    );
  }
}

export default TVContainer;
