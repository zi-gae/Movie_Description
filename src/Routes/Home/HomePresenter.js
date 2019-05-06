import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const HomePresenter = ({ nowPlaying, upcomming, popular, error, loading }) =>
  null;
HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcomming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default HomePresenter;
