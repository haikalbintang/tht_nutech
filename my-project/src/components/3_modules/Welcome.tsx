import React, { useEffect, useState } from "react";
import HeadingWelcome from "../1_elements/HeadingWelcome";
import HeadingName from "../1_elements/HeadingName";
import { fetchProfile } from "../../services/profile";
import { Profile } from "../../types/profile";
import Avatar from "../2_widgets/Avatar";

export default function Welcome() {
  const [profileData, setProfileData] = useState<Profile>({
    email: "",
    first_name: "",
    last_name: "",
    profile_image: "",
  });
  const [profileError, setProfileError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchProfile(setProfileData, setProfileError, setIsLoading);
  }, []);

  if (profileError) {
    console.error(profileError);
  }

  return (
    <div className="w-2/5 flex flex-col justify-evenly">
      <Avatar profileImage={profileData.profile_image} />
      <HeadingWelcome>Selamat datang,</HeadingWelcome>
      <HeadingName>
        {isLoading
          ? "loading..."
          : `${profileData.first_name} ${profileData.last_name}`}
      </HeadingName>
    </div>
  );
}
