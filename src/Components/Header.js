import React from "react";
import { Link, withRouter } from "react-router-dom";
// Link => react 에서 reload 하지 않고 페이지를 라우팅함 (href를 대체)
// withRouter => 다른 컴포넌트를 감싸는 컴포넌트 그리고 라우터에 정보를
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
  &:hover {
    background-color: rgba(20, 20, 20, 0.8);
  }
`;

const Item = styled.li`
  width: 60px;
  height: 50px;
  text-align: center;
  border-bottom: 5px solid
    ${props => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.3s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
));
