import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;
const Form = styled.form``;
const Input = styled.input``;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  error,
  handleSubmit,
  loading
}) => {
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="상영,방영 중인 영화 또는 TV 프로그램"
          value={searchTerm}
        />
      </Form>
    </Container>
  );
};

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default SearchPresenter;
