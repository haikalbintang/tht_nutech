import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";
import Navbar from "../2_widgets/Navbar";
import Balance from "../3_modules/Balance";
import Banner from "../3_modules/Banner";
import Dashboard from "../3_modules/Dashboard";
import Menu from "../3_modules/Menu";
import Welcome from "../3_modules/Welcome";
import Header from "../4_templates/Header";
import MainCol from "../4_templates/MainCol";
import TopUp from "../3_modules/TopUp";
import Transaction from "../3_modules/Transaction";
import Profile from "../3_modules/Profile";
import Registration from "./Registration";
import React from "react";

const navLinks = [
  {
    text: "Top Up",
    id: "topUp",
    path: "/top-up",
  },
  {
    text: "Transaction",
    id: "transaction",
    path: "/transaction",
  },
  {
    text: "Akun",
    id: "profile",
    path: "/profile",
  },
];

interface HomePageProps {
  selectedLink: string;
}

function HomePage({ selectedLink: initialLink = "home" }: HomePageProps) {
  const [selectedLink, setSelectedLink] = useState(initialLink);
  const navigate = useNavigate();

  function handleSelectLink(id: string, path: string) {
    setSelectedLink(id);
    navigate(path);
  }

  return (
    <>
      <Header onHomeClick={() => setSelectedLink("home")}>
        <Navbar
          navLinks={navLinks}
          onSelectLink={(id, path) => handleSelectLink(id, path)}
          selectedLink={selectedLink}
        />
      </Header>
      {selectedLink === "home" && (
        <MainCol>
          <Dashboard>
            <Welcome />
            <Balance />
          </Dashboard>
          <Menu />
          <Banner />
        </MainCol>
      )}
      {selectedLink === "topUp" && (
        <MainCol>
          <Dashboard>
            <Welcome />
            <Balance />
          </Dashboard>
          <TopUp />
        </MainCol>
      )}
      {selectedLink === "transaction" && (
        <MainCol>
          <Dashboard>
            <Welcome />
            <Balance />
          </Dashboard>
          <Transaction />
        </MainCol>
      )}
      {selectedLink === "profile" && (
        <MainCol>
          <Profile />
        </MainCol>
      )}
    </>
  );
}

export default HomePage;
