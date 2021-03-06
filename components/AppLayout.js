import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";

const SearchInPut = styled(Input.Search)`
  verticalalign: "middle";
`;

// eslint-disable-next-line react/prop-types
const AppLayout = ({ children }) => {
  const { me } = useSelector((state) => state.user);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key={1}>
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item key={2}>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key={3}>
          <SearchInPut enterButton />
        </Menu.Item>
        <Menu.Item key={4}>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {me ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={6}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://github.com/ssxst31"
            target="_blank"
            rel="noreferrer noopener"
          >
            Made by ssxst31
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propsTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
