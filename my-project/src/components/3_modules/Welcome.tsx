import React, { useEffect, useState } from "react";
import HeadingWelcome from "../1_elements/HeadingWelcome";
import HeadingName from "../1_elements/HeadingName";
import { getProfile } from "../../services/profile";
import { Profile } from "../../types/profile";
import Avatar from "../2_widgets/Avatar";

export default function Welcome({ profileImage, isLoading, profileData }) {


  return (
    <div className="w-2/5 flex flex-col justify-evenly">
      <Avatar profileImage={profileImage} />
      <HeadingWelcome>Selamat datang,</HeadingWelcome>
      <HeadingName>
        {isLoading
          ? "loading..."
          : `${profileData.first_name} ${profileData.last_name}`}
      </HeadingName>
    </div>
  );
}
