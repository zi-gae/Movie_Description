import React, { Component } from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi } from "../../api";

class DetailContainer extends Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/")
    };
  }

  componentDidMount = async () => {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;
    const { isMovie } = this.state;
    const parseId = parseInt(id);
    if (isNaN(parseId)) {
      push("/");
      return;
    }
    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await movieApi.movieDetail(parseId));
      } else {
        ({ data: result } = await movieApi.tvDetail(parseId));
      }
      console.log("result: ", result);
    } catch {
      this.setState({
        error: "결과를 찾을 수 없습니다."
      });
    } finally {
      this.setState({
        loading: false,
        result
      });
    }
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
