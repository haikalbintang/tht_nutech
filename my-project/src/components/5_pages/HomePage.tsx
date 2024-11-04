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
import { getProfile, updateImage } from "../../services/profile";

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

  const [profileImage, setProfileImage] = useState("/ProfilePhoto.png");

  const [imageData, setImageData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    profile_image: "",
  });
  const [imageError, setImageError] = useState<string | null>(null);
  const [imageIsLoading, setImageIsLoading] = useState(false);

  const [profileData, setProfileData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    profile_image: "",
  });
  const [profileError, setProfileError] = useState<string | null>(null);
  const [isProfileLoading, setIsProfileLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    getProfile(setProfileData, setProfileError, setIsProfileLoading);
  }, []);

  if (profileError) {
    console.error(profileError);
  }

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

  useEffect(() => {
    setProfileImage(imageData.profile_image);
  }, [imageData, profileData]);

  if (imageError) {
    console.error(imageError);
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
    setProfileImage(profileData.profile_image);
  }, [profileData]);

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
            <Welcome
              profileImage={profileImage}
              isLoading={isProfileLoading}
              profileData={profileData}
            />
            <Balance isLoading={isBalanceLoading} balanceData={balanceData} />
          </Dashboard>
          <Service />
          <Banner />
        </MainCol>
      )}
      {selectedLink === "topUp" && (
        <MainCol>
          <Dashboard>
            <Welcome
              profileImage={profileImage}
              isLoading={isProfileLoading}
              profileData={profileData}
            />
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
            <Welcome
              profileImage={profileImage}
              isLoading={isProfileLoading}
              profileData={profileData}
            />
            <Balance isLoading={isBalanceLoading} balanceData={balanceData} />
          </Dashboard>
          <Transaction />
        </MainCol>
      )}
      {selectedLink === "profile" && (
        <MainCol>
          <Profile
            profileImage={profileImage}
            imageIsLoading={imageIsLoading}
            handleImageChange={handleImageChange}
          />
        </MainCol>
      )}
    </>
  );
}

export default HomePage;
