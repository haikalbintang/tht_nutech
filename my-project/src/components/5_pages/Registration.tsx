import { BASE_URL } from "../../constants/constants";
import Button from "../1_elements/Button";
import Input from "../1_elements/Input";
import Form from "../3_modules/Form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { useState } from "react";
import Heading2 from "../1_elements/Heading2";
import Logo from "../2_widgets/Logo";
import LoginIlustration from "../1_elements/LoginIlustration";
import MainHalf from "../4_templates/MainHalf";
import Main from "../4_templates/Main";
import Alternative from "../2_widgets/Alternative";
import { useNavigate } from "react-router-dom";
import React from "react";

function Registration() {
  const [currentUser, setCurrentUser] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState({
    password1: "",
    password2: "",
  });
  const [validation, setValidation] = useState("");
  const [isFocus, setIsFocus] = useState({
    email: false,
    first_name: false,
    last_name: false,
    password1: false,
    password2: false,
  });
  const navigate = useNavigate();

  function checkPassword() {
    if (
      confirmPassword.password2.length > 1 &&
      confirmPassword.password1 !== confirmPassword.password2
    ) {
      setValidation("password tidak sama");
      return;
    } else {
      currentUser.password = confirmPassword.password1;
      setValidation("");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    checkPassword();

    try {
      const res = await fetch(BASE_URL + "/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentUser),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success(result.message);
        // navigate("/login");
      } else if (result.status === 102) {
        // navigate("/login");
        toast.error(result.message);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Error", error);
      toast.error("Terjadi kesalahan");
    }
  }
  return (
    <>
      <Main>
        <MainHalf>
          <Logo />

          <Heading2>Lengkapi data untuk membuat akun</Heading2>

          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              icon={"@"}
              placeholder={"masukan email anda"}
              required
              value={currentUser["email"]}
              onChange={(e) =>
                setCurrentUser((prev) => ({ ...prev, email: e.target.value }))
              }
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
              type="text"
              icon={"U"}
              placeholder={"nama depan"}
              required
              value={currentUser["first_name"]}
              onChange={(e) =>
                setCurrentUser((prev) => ({
                  ...prev,
                  first_name: e.target.value,
                }))
              }
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
              type="text"
              icon={"U"}
              placeholder={"nama belakang"}
              required
              value={currentUser["last_name"]}
              onChange={(e) =>
                setCurrentUser((prev) => ({
                  ...prev,
                  last_name: e.target.value,
                }))
              }
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
            <Input
              type="password"
              icon={"L"}
              placeholder={"buat password"}
              eye={"E"}
              required
              value={confirmPassword["password1"]}
              onChange={(e) =>
                setConfirmPassword((prev) => ({
                  ...prev,
                  password1: e.target.value,
                }))
              }
              onBlur={() =>
                setIsFocus((prev) => ({
                  ...prev,
                  password1: false,
                }))
              }
              onFocus={() =>
                setIsFocus((prev) => ({
                  ...prev,
                  password1: true,
                }))
              }
              isFocus={isFocus.password1}
            />
            <Input
              type="password"
              icon={"L"}
              placeholder={"konfirmasi password"}
              eye={"E"}
              required
              value={confirmPassword["password2"]}
              onChange={(e) =>
                setConfirmPassword((prev) => ({
                  ...prev,
                  password2: e.target.value,
                }))
              }
              onBlur={() => {
                setIsFocus((prev) => ({
                  ...prev,
                  password2: false,
                }));
                checkPassword();
              }}
              onFocus={() => {
                setIsFocus((prev) => ({
                  ...prev,
                  password2: true,
                }));
                checkPassword();
              }}
              isFocus={isFocus.password2}
              validation={validation}
            />

            <Button bgColor={"bg-[#f42619]"} textColor={"text-white"}>
              Registrasi
            </Button>
          </Form>

          <Alternative onClick={() => navigate("/login")}>
            sudah punya akun? login{" "}
          </Alternative>
        </MainHalf>
        <LoginIlustration />
      </Main>

      <ToastContainer />
    </>
  );
}

export default Registration;
