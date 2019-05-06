import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";

const Container = styled.div`
  padding: 0px 10px;
`;

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) => {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="현재 방영 중 TV">
          {topRated.map(show => show.name)}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="인기 방영 TV">{popular.map(show => show.name)}</Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="오늘 방영 예정 TV">
          {airingToday.map(show => show.name)}
        </Section>
      )}
    </Container>
  );
};
TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default TVPresenter;
