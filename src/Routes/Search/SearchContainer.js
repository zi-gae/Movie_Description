import React, { Component } from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "../../api";

class SearchContainer extends Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    error: null,
    loading: false,
    inputState: false
  };

  handleSubmit = e => {
    e.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  updateTerm = e => {
    const {
      target: { value }
    } = e;
    this.setState({
      searchTerm: value
    });
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    try {
      this.setState({
        loading: true
      });
      const {
        data: { results: movieResults }
      } = await movieApi.search(searchTerm);
      const {
        data: { results: tvResults }
      } = await tvApi.search(searchTerm);

      this.setState({
        movieResults,
        tvResults
      });
    } catch (error) {
      this.setState({
        error: "예상치 못한 에러가 발생했습니다."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  };

  render() {
    const { movieResults, tvResults, searchTerm, error, loading } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
        errMessage={this.errMessage}
      />
    );
  }
}

export default SearchContainer;
