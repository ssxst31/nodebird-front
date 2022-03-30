import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";

const Profile = () => {
  return (
    <AppLayout>
      <Head>
        <meta charSet="utf-8" />
        <title>내 프로필 | NodeBird</title>
      </Head>
      내 프로필
    </AppLayout>
  );
};

export default Profile;
