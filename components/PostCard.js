import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { Button, Card, Popover, Avatar, List, Comment } from "antd";
import {
  RetweetOutlined,
  EllipsisOutlined,
  HeartOutlined,
  MessageOutlined,
  HeartTwoTone,
} from "@ant-design/icons";
import propTypes from "prop-types";
import PostImages from "./PostImage";
import CommentForm from "./CommentForm";
import PostCardContent from "./PostCardContent";

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);

  const id = useSelector((state) => {
    state.user.me?.id;
  });

  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);

  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  return (
    <div style={{ marginBottom: "20px" }}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          liked ? (
            <HeartTwoTone
              twoToneColor="#eb2f96"
              key="heart"
              onClick={onToggleLike}
            />
          ) : (
            <HeartOutlined key="heart" onClick={onToggleLike} />
          ),
          <MessageOutlined key="message" onClick={onToggleComment} />,
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
          description={<PostCardContent postData={post.content} />}
        ></Card.Meta>
      </Card>
      {commentFormOpened && (
        <div>
          <CommentForm post={post} />
          <List
            header={`${post.Comment.length}개의 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comment}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.User.nickName}
                  avatar={<Avatar>item.User.nickName[0]</Avatar>}
                  content={item.content}
                />
              </li>
            )}
          />
        </div>
      )}
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
