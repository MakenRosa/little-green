import React from "react";
import styles from "./Home.module.scss";
import CarouselSite from "components/CarouselSite";
import ContainerMVV from "components/ContainerMVV/index";
import ContainerProjetos from "components/ContainerProjetos";
import SustainabilityReports from "components/SustainabilityReports/index";
import Participate from "components/Participate/index";
import Footer from "components/Footer/index";
import ContainerResults from "components/ContainerResults/index";

const Home = () => {
  return (
    <div className={styles.container}>
      <CarouselSite />
      <ContainerMVV />
      <ContainerProjetos />
      <ContainerResults />
      <SustainabilityReports />
      <Participate />
      <Footer />
    </div>
  );
};

export default Home;
