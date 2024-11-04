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
import { getProfile, updateImage, updateProfile } from "../../services/profile";
import Pay from "../3_modules/Pay";
import { getService } from "../../services/service";
import { ServiceType } from "../../types/service";
import { postPay } from "../../services/pay";

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

  // const [imageData, setImageData] = useState({
  //   email: "",
  //   first_name: "",
  //   last_name: "",
  //   profile_image: "",
  // });
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

  const [currentUser, setCurrentUser] = useState({
    email: "",
    first_name: "",
    last_name: "",
    profile_image: "",
  });

  const [serviceIsClicked, setServiceIsClicked] = useState(false);

  const [serviceData, setServiceData] = useState<ServiceType[]>([
    {
      service_code: "",
      service_name: "",
      service_icon: "",
      service_tariff: 0,
    },
  ]);
  const [serviceError, setServiceError] = useState<string | null>(null);
  const [isServiceLoading, setIsServiceLoading] = useState(false);

  const [serviceChosen, setServiceChosen] = useState({
    service_code: "",
    service_name: "",
    service_icon: "",
    service_tariff: 0,
  });

  const [paymentData, setPaymentData] = useState({
    invoice_number: "",
    service_code: "",
    service_name: "",
    transaction_type: "",
    total_amount: Number,
    created_on: "",
  });
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [isPaymentLoading, setIsPaymentLoading] = useState(false);

  const paymentCode = { service_code: serviceChosen.service_code };

  const navigate = useNavigate();

  useEffect(() => {
    getProfile(setProfileData, setProfileError, setIsProfileLoading);
  }, []);

  useEffect(() => {
    getBalance(setBalanceData, setBalanceError, setIsBalanceLoading);
  }, [topUpData]);

  async function handleTopUp() {
    await postTopUp(
      setTopUpData,
      setTopUpError,
      setIsTopUpLoading,
      topUpNominal
    );
  }

  function handleSelectLink(id: string, path: string) {
    setSelectedLink(id);
    navigate(path);
  }

  async function handleImageChange(e) {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      const formData = new FormData();
      formData.append("file", file);

      await updateImage(
        setProfileData,
        setImageError,
        setImageIsLoading,
        formData
      );
    }
  }

  useEffect(() => {
    setCurrentUser(profileData);
  }, [profileData]);

  const editProfileRequestBody = {
    first_name: currentUser.first_name,
    last_name: currentUser.last_name,
  };

  async function handleEditProfile() {
    await updateProfile(
      setProfileData,
      setProfileError,
      setIsProfileLoading,
      editProfileRequestBody
    );
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

  useEffect(() => {
    getService(setServiceData, setServiceError, setIsServiceLoading);
  }, []);

  async function handlePay() {
    await postPay(
      setPaymentData,
      setPaymentError,
      setIsPaymentLoading,
      paymentCode
    );
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
