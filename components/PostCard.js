import React from "react";
import { useSelector } from "react-redux";
import { Button, Card, Popover, Avatar } from "antd";
import {
  RetweetOutlined,
  EllipsisOutlined,
  HeartOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import propTypes from "prop-types";
import PostImages from "./PostImage";

const PostCard = ({ post }) => {
  const id = useSelector((state) => {
    state.user.me?.id;
  });

  return (
    <div style={{ marginBottom: "20px" }}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          <HeartOutlined key="heart" />,
          <MessageOutlined key="message" />,
          <Popover
            key="popover"
            content={
              <Button.Group>
                {id && post.User.id === id ? (
                  <>
                    <Button>수정</Button>
                    <Button type="danger">삭제</Button>
                  </>
                ) : (
                  <Button>신고</Button>
                )}
              </Button.Group>
            }
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickName[0]}</Avatar>}
          title={post.User.nickName}
          description={post.content}
        ></Card.Meta>
      </Card>
      {/* <CommentForm />*/}
      {/* <Comments />*/}
    </div>
  );
};

PostCard.propTypes = {
  post: propTypes.shape({
    id: propTypes.number,
    User: propTypes.object,
    content: propTypes.string,
    creatAt: propTypes.object,
    Comment: propTypes.arrayOf(propTypes.object),
    Images: propTypes.arrayOf(propTypes.object),
  }).isRequired,
};

export default PostCard;
