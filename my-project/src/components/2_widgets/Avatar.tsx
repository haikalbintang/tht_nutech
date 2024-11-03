import React from "react";

interface AvatarProps {
  profileImage: string;
}

export default function Avatar({ profileImage }) {
  return (
    <div className="mb-6">
      <img className="w-20" src={profileImage} alt="Profile Photo" />
    </div>
  );
}
