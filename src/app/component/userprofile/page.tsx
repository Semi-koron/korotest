import React from "react";

interface ProfileProps {
  userName: string;
}

const Profile: React.FC<ProfileProps> = ({ userName }) => {
  return (
    <>
      <h1>Profile</h1>
      <p>My name is {userName}.</p>
      <p>I am a software engineer.</p>
    </>
  );
};

export default Profile;
