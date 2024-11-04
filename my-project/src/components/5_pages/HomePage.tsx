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
import Pay from "../3_modules/Pay";
import { navLinks } from "../../constants/navLinks";
import { useProfile } from "../../hooks/useProfile";
import { useBalance } from "../../hooks/useBalance";
import { useService } from "../../hooks/useService";
import { useTopUp } from "../../hooks/useTopUp";
import { usePayment } from "../../hooks/usePayment";

interface HomePageProps {
  selectedLink: string;
}

function HomePage({ selectedLink: initialLink = "home" }: HomePageProps) {
  const [selectedLink, setSelectedLink] = useState(initialLink);
  const [profileImage, setProfileImage] = useState("/ProfilePhoto.png");
  const [serviceIsClicked, setServiceIsClicked] = useState(false);

  const {
    profileData,
    isProfileLoading,
    profileError,
    imageError,
    handleEditProfile,
    handleImageChange,
    imageIsLoading,
    currentUser,
    setCurrentUser,
  } = useProfile();
  const { balanceData, isBalanceLoading, balanceError } = useBalance();
  const { serviceData, isServiceLoading, serviceError } = useService();
  const {
    isTopUpLoading,
    topUpError,
    topUpNominal,
    setTopUpNominal,
    handleTopUp,
  } = useTopUp();
  const {
    isPaymentLoading,
    paymentError,
    serviceChosen,
    handlePay,
    setServiceChosen,
  } = usePayment();

  const navigate = useNavigate();

  function handleSelectLink(id: string, path: string) {
    setSelectedLink(id);
    navigate(path);
  }

  useEffect(() => {
    if (
      profileData.profile_image ===
      "https://minio.nutech-integrasi.com/take-home-test/null"
    )
      setProfileImage("/ProfilePhoto.png");
    else {
      setProfileImage(profileData.profile_image);
    }
  }, [profileData]);

  function handleClickService() {
    setServiceIsClicked(true);
  }

  const errors = [
    profileError,
    balanceError,
    imageError,
    topUpError,
    serviceError,
    paymentError,
  ];

  for (let i = 0; i < errors.length; i++) {
    if (errors[i]) console.error(errors[i]);
  }

  return (
    <>
      <Header
        onHomeClick={() => {
          setSelectedLink("home");
          setServiceIsClicked(false);
          navigate("/");
          location.reload();
        }}
      >
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
          {serviceIsClicked ? (
            <Pay
              serviceChosen={serviceChosen}
              isLoading={isPaymentLoading}
              handlePay={handlePay}
            />
          ) : (
            <>
              <Service
                onClickService={setServiceChosen}
                handleClickService={handleClickService}
                isLoading={isServiceLoading}
                serviceData={serviceData}
              />
              <Banner />
            </>
          )}
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
            profileData={profileData}
            isProfileLoading={isProfileLoading}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            handleEditProfile={handleEditProfile}
          />
        </MainCol>
      )}
    </>
  );
}

export default HomePage;
