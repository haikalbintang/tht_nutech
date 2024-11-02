import Navbar from "../2_widgets/Navbar";
import Balance from "../3_modules/Balance";
import Banner from "../3_modules/Banner";
import Menu from "../3_modules/Menu";
import Welcome from "../3_modules/Welcome";
import Footer from "../4_templates/Footer";
import Header from "../4_templates/Header";
import MainCol from "../4_templates/MainCol";

function Dashboard() {
  return (
    <div>
      <Header>
        <Navbar />
      </Header>
      <MainCol>
        <div className="w-full flex h-[200px] mt-8">
          <Welcome />
          <Balance />
        </div>
        <Menu />
        <Banner />
      </MainCol>
      <Footer />
    </div>
  );
}

export default Dashboard;
