import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Avatar, Card, Button } from "antd";
import propTypes from "prop-types";
import { logoutRequestAction } from "../reducers/user";

const UserProfile = () => {
  const dispatch = useDispatch();

  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  return (
    <div>
      <Card
        actions={[
          <div key="twit">
            짹짹
            <br />0
          </div>,
          <div key="followings">
            팔로잉
            <br />0
          </div>,
          <div key="followings">
            팔로워
            <br />0
          </div>,
        ]}
      >
        <Card.Meta avatar={<Avatar>ZC</Avatar>} title="ssxst31" />
        <Button onClick={onLogOut}>로그아웃</Button>
      </Card>
    </div>
  );
};

UserProfile.propTypes = {
  setIsLoggedIn: propTypes.any.isRequired,
};

export default UserProfile;
