import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../2_widgets/Navbar";
import Balance from "../3_modules/Balance";
import Banner from "../3_modules/Banner";
import Dashboard from "../3_modules/Dashboard";
import Welcome from "../3_modules/Welcome";
import Header from "../4_templates/Header";
import MainCol from "../4_templates/MainCol";
import TopUp from "../3_modules/TopUp";
import Transaction from "../3_modules/Transaction";
import Profile from "../3_modules/Profile";
import React from "react";
import Service from "../3_modules/Service";
import { navLinks } from "../../constants/navLinks";
import { BalanceType } from "../../types/transactionModule";
import { getBalance } from "../../services/balance";
import { postTopUp } from "../../services/topUp";

interface HomePageProps {
  selectedLink: string;
}

function HomePage({ selectedLink: initialLink = "home" }: HomePageProps) {
  const [selectedLink, setSelectedLink] = useState(initialLink);

  const [balanceData, setBalanceData] = useState<BalanceType>({
    balance: 0,
  });
  const [balanceError, setBalanceError] = useState<string | null>(null);
  const [isBalanceLoading, setIsBalanceLoading] = useState(false);

  const [topUpData, setTopUpData] = useState({ balance: 0 });
  const [topUpError, setTopUpError] = useState<string | null>(null);
  const [isTopUpLoading, setIsTopUpLoading] = useState(false);

  const [topUpNominal, setTopUpNominal] = useState({ top_up_amount: 0 });

  const navigate = useNavigate();

  useEffect(() => {
    getBalance(setBalanceData, setBalanceError, setIsBalanceLoading);
  }, [topUpData]);

  if (balanceError) {
    console.error(balanceError);
  }

  async function handleTopUp() {
    await postTopUp(
      setTopUpData,
      setTopUpError,
      setIsTopUpLoading,
      topUpNominal
    );
  }

  if (topUpError) {
    console.error(topUpError);
  }

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
            <Balance isLoading={isBalanceLoading} balanceData={balanceData} />
          </Dashboard>
          <Service />
          <Banner />
        </MainCol>
      )}
      {selectedLink === "topUp" && (
        <MainCol>
          <Dashboard>
            <Welcome />
            <Balance isLoading={isBalanceLoading} balanceData={balanceData} />
          </Dashboard>
          <TopUp
            topUpNominal={topUpNominal}
            setTopUpNominal={setTopUpNominal}
            handleTopUp={handleTopUp}
            isLoading={isTopUpLoading}
          />
        </MainCol>
      )}
      {selectedLink === "transaction" && (
        <MainCol>
          <Dashboard>
            <Welcome />
            <Balance isLoading={isBalanceLoading} balanceData={balanceData} />
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
