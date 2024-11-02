import { BASE_URL } from "../../constants/constants";
import Button from "../1_elements/Button";
import Input from "../1_elements/Input";
import Form from "../4_templates/Form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { useState } from "react";
import Heading2 from "../1_elements/Heading2";
import Logo from "../1_elements/Logo";
import LoginIlustration from "../1_elements/LoginIlustration";
import MainHalf from "../3_modules/MainHalf";
import Main from "../3_modules/Main";
import Alternative from "../2_widgets/Alternative";

function Registration() {
  const [currentUser, setCurrentUser] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch(BASE_URL + "/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentUser),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success(result.message);
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
            />
            <Input
              type="password"
              icon={"L"}
              placeholder={"konfirmasi password"}
              eye={"E"}
              required
            />

            <Button bgColor={"[#f42619]"} textColor={"[#fff]"}>
              Registrasi
            </Button>
          </Form>

          <Alternative>sudah punya akun? login </Alternative>
        </MainHalf>
        <LoginIlustration />
      </Main>

      <ToastContainer />
    </>
  );
}

export default Registration;
