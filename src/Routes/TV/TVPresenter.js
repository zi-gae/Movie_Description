import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TVPresenter = ({ topRated, popular, ariringToday, error, loading }) =>
  null;
TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  ariringToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default TVPresenter;
