import Heading2 from "../1_elements/Heading2";
import LoginIlustration from "../1_elements/LoginIlustration";
import Logo from "../2_widgets/Logo";
import Main from "../4_templates/Main";
import MainHalf from "../4_templates/MainHalf";
import Form from "../3_modules/Form";
import Input from "../1_elements/Input";
import Button from "../1_elements/Button";
import Alternative from "../2_widgets/Alternative";
import { useState } from "react";
import { BASE_URL } from "../../constants/constants";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import React from "react";

function Login() {
  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: "",
  });
  const [validation, setValidation] = useState("");
  const [isFocus, setIsFocus] = useState({
    email: false,
    password: false,
  });
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const res = await fetch(BASE_URL + "/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentUser),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success(result.message);
        sessionStorage.setItem("token", result.data.token);
        navigate("/");
      } else if (result.status === 102) {
        toast.error(result.message);
      } else if (result.status === 103) {
        toast.error(result.message);
        setValidation("email atau password yang anda masukan salah");
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

          <Heading2>Masuk atau buat akun untuk memulai</Heading2>

          <Form onSubmit={handleLogin}>
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
              type="password"
              icon={"L"}
              placeholder={"buat password"}
              eye={"E"}
              required
              value={currentUser["password"]}
              onChange={(e) =>
                setCurrentUser((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
              onBlur={() =>
                setIsFocus((prev) => ({
                  ...prev,
                  password: false,
                }))
              }
              onFocus={() =>
                setIsFocus((prev) => ({
                  ...prev,
                  password: true,
                }))
              }
              isFocus={isFocus.password}
              validation={validation}
            />

            <Button bgColor={"bg-[#f42619]"} textColor={"text-white"}>
              Masuk
            </Button>
          </Form>

          <Alternative onClick={() => navigate("/registration")}>
            belum punya akun? registrasi{" "}
          </Alternative>
        </MainHalf>
        <LoginIlustration />
      </Main>

      <ToastContainer />
    </>
  );
}

export default Login;
