import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import "antd/dist/antd.css";

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      공통메뉴
      <Component />
    </>
  );
};

export default NodeBird;

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};
