import React, { useState } from "react";
import Input from "../1_elements/Input";
import HeadingName from "../1_elements/HeadingName";
import Button from "../1_elements/Button";

export default function Profile() {
  const [currentUser, setCurrentUser] = useState({
    email: "wallet@nutech.com",
    first_name: "Kristanto",
    last_name: "Wibowo",
  });

  return (
    <div className="flex flex-col justify-center items-center pb-10 px-72">
      <div className="relative">
        <img
          className="w-40 h-40 my-6"
          src="/ProfilePhoto.png"
          alt="Profile Photo"
        />
        <button className="absolute right-2 bottom-5 border border-zinc-300 rounded-full w-9 h-9">
          P
        </button>
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
      />
      <Input
        type={"text"}
        icon={"U"}
        value={currentUser["first_name"]}
        onChange={(e) =>
          setCurrentUser((prev) => ({ ...prev, first_name: e.target.value }))
        }
        label="Nama Depan"
      />
      <Input
        type={"text"}
        icon={"U"}
        value={currentUser["last_name"]}
        onChange={(e) =>
          setCurrentUser((prev) => ({ ...prev, last_name: e.target.value }))
        }
        label="Nama Belakang"
      />
      <Button bgColor={"[#f42619]"} textColor={"[#fff]"}>
        Edit Profile
      </Button>
      <Button
        border={"border border-[#f42619]"}
        bgColor={"[#fff]"}
        textColor={"[#f42619]"}
      >
        Logout
      </Button>
    </div>
  );
}
