import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 3.5em;
  }
`;

const Title = styled.span`
  font-size: 1.5em;
  font-weight: 500;
`;
const Grid = styled.div`
  margin-top: 2em;
  display: grid;
  grid-template-columns: repeat(auto-fill, 10em);
  grid-gap: 4em;
`;

const Section = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Grid>{children}</Grid>
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Section;
