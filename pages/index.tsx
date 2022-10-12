import type { NextPage } from "next";
import HomeBookSharing from "../src/modules/home/components/HomeBookSharing";
import HomeHero from "../src/modules/home/components/HomeHero";
import HomeMicrotransaction from "../src/modules/home/components/HomeMicrotransaction";
import HomeRoadMap from "../src/modules/home/components/HomeRoadMap";
import HomeServices from "../src/modules/home/components/HomeServices";
import HomeSomethingBigger from "../src/modules/home/components/HomeSomethingBigger";
import MissionAndAim from "../src/modules/home/components/MissionAndAim";
import Footer from "../src/shared/components/Footer";
import Header from "../src/shared/components/Header";
import Meta from "../src/shared/components/Meta";

const Home: NextPage = () => {
  return (
    <Meta title="Kuumba | Home">
      <div className="px-32">
        <Header />
        <HomeHero />
        <HomeServices />
        <MissionAndAim />
        <HomeMicrotransaction />
        <HomeBookSharing />
        <HomeSomethingBigger />
        <HomeRoadMap />
        <Footer />
      </div>
    </Meta>
  );
};

export default Home;
