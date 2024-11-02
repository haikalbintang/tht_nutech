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

const navLinks = [
  {
    text: "Top Up",
    id: "topUp",
  },
  {
    text: "Transaction",
    id: "transaction",
  },
  {
    text: "Akun",
    id: "profile",
  },
];

function HomePage() {
  const [selectedLink, setSelectedLink] = useState("home");

  return (
    <>
      <Header onHomeClick={() => setSelectedLink("home")}>
        <Navbar
          navLinks={navLinks}
          onSelectLink={setSelectedLink}
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
    </>
  );
}

export default HomePage;
