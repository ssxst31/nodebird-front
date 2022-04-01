import React from "react";
import { List, Button, Card } from "antd";
import { StopOutlined } from "@ant-design/icons";
import propTypes from "prop-types";

const FollowList = ({ header, data }) => {
  return (
    <List
      style={{ marginBottom: "20px" }}
      grid={{ gutter: "4px", xs: "2px", md: "3px" }}
      size="small"
      header={<div>{header}</div>}
      loadMore={
        <div style={{ textAlign: "center", margin: "10px 0" }}>
          <Button>더 보기</Button>
        </div>
      }
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={{ marginTop: "20px" }}>
          <Card actions={[<StopOutlined key="stop" />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    ></List>
  );
};

FollowList.propTypes = {
  header: propTypes.string.isRequired,
  data: propTypes.string.isRequired,
};

export default FollowList;
