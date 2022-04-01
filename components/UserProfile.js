import React, { useCallback } from "react";
import { Avatar, Card, Button } from "antd";
import propTypes from "prop-types";

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
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
