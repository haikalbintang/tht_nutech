import { useEffect, useState } from "react";
import { getProfile, updateImage, updateProfile } from "../services/profile";

export function useProfile() {
  const [profileData, setProfileData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    profile_image: "",
  });
  const [profileError, setProfileError] = useState<string | null>(null);
  const [isProfileLoading, setIsProfileLoading] = useState(false);
  const [imageError, setImageError] = useState<string | null>(null);
  const [imageIsLoading, setImageIsLoading] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    email: "",
    first_name: "",
    last_name: "",
    profile_image: "",
  });

  useEffect(() => {
    getProfile(setProfileData, setProfileError, setIsProfileLoading);
  }, []);

  const editProfileRequestBody = {
    first_name: currentUser.first_name,
    last_name: currentUser.last_name,
  };

  async function handleEditProfile() {
    await updateProfile(
      setProfileData,
      setProfileError,
      setIsProfileLoading,
      editProfileRequestBody
    );
  }

  async function handleImageChange(e) {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      const formData = new FormData();
      formData.append("file", file);

      await updateImage(
        setProfileData,
        setImageError,
        setImageIsLoading,
        formData
      );
    }
  }

  useEffect(() => {
    setCurrentUser(profileData);
  }, [profileData]);

  return {
    profileData,
    isProfileLoading,
    profileError,
    imageError,
    handleEditProfile,
    handleImageChange,
    imageIsLoading,
    currentUser,
    setCurrentUser,
  };
}
