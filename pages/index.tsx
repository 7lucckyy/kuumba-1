import type { NextPage } from "next";
import HomeBookSharing from "../src/modules/home/components/HomeBookSharing";
import HomeHero from "../src/modules/home/components/HomeHero";
import HomeMicrotransaction from "../src/modules/home/components/HomeMicrotransaction";
import HomeRoadMap from "../src/modules/home/components/HomeRoadMap";
import HomeServices from "../src/modules/home/components/HomeServices";
import HomeSomethingBigger from "../src/modules/home/components/HomeSomethingBigger";
import MissionAndAim from "../src/modules/home/components/MissionAndAim";
import ContactUsForm from "../src/shared/components/ContactUsForm";
import Footer from "../src/shared/components/Footer";
import Header from "../src/shared/components/Header";
import Meta from "../src/shared/components/Meta";
import PageBottomSubscribe from "../src/shared/components/PageBottomSubscribe";

const Home: NextPage = () => {
  return (
    <Meta title="Kuumba | Home">
      <div className="w-full horizontal-padding">
        <Header />

        <div className="flex flex-col gap-16 sm:gap-24 md:gap-30 lg:gap-36">
          <HomeHero />
          <HomeServices />
          <MissionAndAim />
          <div className="flex flex-col gap-6" id="features">
            <HomeMicrotransaction />
            <HomeBookSharing />
            <HomeSomethingBigger />
          </div>
          <HomeRoadMap />
          <ContactUsForm />
          <PageBottomSubscribe />
          <Footer />
        </div>
      </div>
    </Meta>
  );
};

export default Home;
