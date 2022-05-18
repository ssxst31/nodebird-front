import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Card, Button } from "antd";
import propTypes from "prop-types";
import { logoutRequestAction } from "../reducers/user";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector((state) => state.user);
  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  return (
    <div>
      <Card
        actions={[
          <div key="twit">
            짹짹
            <br />
            {me.Posts.length}
          </div>,
          <div key="followings">
            팔로잉
            <br />
            {me.Followings.length}
          </div>,
          <div key="followings">
            팔로워
            <br />
            {me.Followers.length}
          </div>,
        ]}
      >
        <Card.Meta avatar={<Avatar>{me.nickName[0]}</Avatar>} title="ssxst31" />
        <Button onClick={onLogOut} loading={logOutLoading}>
          로그아웃
        </Button>
      </Card>
    </div>
  );
};

UserProfile.propTypes = {
  setIsLoggedIn: propTypes.any.isRequired,
};

export default UserProfile;
