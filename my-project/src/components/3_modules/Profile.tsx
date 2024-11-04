import React, { useEffect, useState } from "react";
import Input from "../1_elements/Input";
import HeadingName from "../1_elements/HeadingName";
import Button from "../1_elements/Button";
import { useNavigate } from "react-router-dom";
import { updateImage } from "../../services/profile";

export default function Profile() {
  const [currentUser, setCurrentUser] = useState({
    email: "wallet@nutech.com",
    first_name: "Kristanto",
    last_name: "Wibowo",
  });
  const [isFocus, setIsFocus] = useState({
    email: false,
    first_name: false,
    last_name: false,
  });

  const [profileImage, setProfileImage] = useState("/ProfilePhoto.png");

  const [imageData, setImageData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    profile_image: "",
  });
  const [imageError, setImageError] = useState<string | null>(null);
  const [imageIsLoading, setImageIsLoading] = useState(false);

  const navigate = useNavigate();

  function handleLogout() {
    sessionStorage.removeItem("token");
    navigate("/");
  }

  async function handleImageChange(e) {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      const formData = new FormData();
      formData.append("file", file);

      await updateImage(
        setImageData,
        setImageError,
        setImageIsLoading,
        formData
      );
    }
  }

  useEffect(() => {
    setProfileImage(imageData.profile_image);
  }, [imageData]);

  if (imageError) {
    console.error(imageError);
  }

  return (
    <div className="flex flex-col justify-center items-center pb-10 px-72">
      <div className="relative">
        {imageIsLoading ? (
          "loading..."
        ) : (
          <img
            className="w-40 h-40 my-6 rounded-full"
            src={profileImage}
            alt="Profile Photo"
          />
        )}
        <button
          onClick={() => document.getElementById("profileImageInput")?.click()}
          className="absolute right-2 bottom-5 border border-zinc-300 rounded-full w-9 h-9"
        >
          P
        </button>
        <input
          type="file"
          id="profileImageInput"
          accept="image/jpeg, image/png"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>
      <HeadingName>Kristanto Wibowo</HeadingName>
      <Input
        type={"email"}
        icon={"@"}
        value={currentUser["email"]}
        onChange={(e) =>
          setCurrentUser((prev) => ({ ...prev, email: e.target.value }))
        }
        label="Email"
        onBlur={() =>
          setIsFocus((prev) => ({
            ...prev,
            email: false,
          }))
        }
        onFocus={() =>
          setIsFocus((prev) => ({
            ...prev,
            email: true,
          }))
        }
        isFocus={isFocus.email}
      />
      <Input
        type={"text"}
        icon={"U"}
        value={currentUser["first_name"]}
        onChange={(e) =>
          setCurrentUser((prev) => ({ ...prev, first_name: e.target.value }))
        }
        label="Nama Depan"
        onBlur={() =>
          setIsFocus((prev) => ({
            ...prev,
            first_name: false,
          }))
        }
        onFocus={() =>
          setIsFocus((prev) => ({
            ...prev,
            first_name: true,
          }))
        }
        isFocus={isFocus.first_name}
      />
      <Input
        type={"text"}
        icon={"U"}
        value={currentUser["last_name"]}
        onChange={(e) =>
          setCurrentUser((prev) => ({ ...prev, last_name: e.target.value }))
        }
        label="Nama Belakang"
        onBlur={() =>
          setIsFocus((prev) => ({
            ...prev,
            last_name: false,
          }))
        }
        onFocus={() =>
          setIsFocus((prev) => ({
            ...prev,
            last_name: true,
          }))
        }
        isFocus={isFocus.last_name}
      />
      <Button bgColor={"bg-[#f42619]"} textColor={"text-white"}>
        Edit Profile
      </Button>
      <Button
        border={"border border-[#f42619]"}
        bgColor={"bg-white"}
        textColor={"text-[#f42619]"}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
}
