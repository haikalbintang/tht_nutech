import { BASE_URL } from "../../constants/constants";
import Button from "../1_elements/Button";
import Input from "../1_elements/Input";
import Form from "../4_templates/Form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { useState } from "react";

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
      console.log(JSON.stringify(currentUser));

      const result = await res.json();

      console.log(result);

      if (res.ok) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      console.error("Error", err);
      toast.error("Terjadi kesalahan");
    }
  }
  return (
    <>
      <div className="w-full flex">
        <div className="w-1/2 flex flex-col justify-center items-center p-24">
          <div className="flex justify-center items-center gap-2 m-4">
            <img src="/Logo.png" alt="" />
            <h1 className="text-zinc-800 font-semibold text-2xl">SIMS PPOB</h1>
          </div>
          <div>
            <h2 className="text-zinc-900 font-semibold text-3xl m-4 text-center px-10">
              Lengkapi data untuk membuat akun
            </h2>
          </div>
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
          <p className="text-sm text-zinc-500">
            sudah punya akun? login{" "}
            <span className="font-semibold text-[#f42619]">di sini</span>
          </p>
        </div>
        <div className="w-1/2">
          <img src="/IllustrasiLogin.png" alt="" />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Registration;
