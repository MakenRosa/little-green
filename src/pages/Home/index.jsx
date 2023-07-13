import React from "react";
import styles from "./Home.module.scss";
import CarouselSite from "components/CarouselSite";
import ContainerMVV from "components/ContainerMVV/index";
import ContainerProjetos from "components/ContainerProjetos";
import SustainabilityReports from "components/SustainabilityReports/index";
import ContainerResults from "components/ContainerResults/index";

const Home = () => {
  return (
    <div className={styles.container}>
      <CarouselSite />
      <ContainerMVV />
      <ContainerProjetos />
      <ContainerResults/>
      <SustainabilityReports />
    </div>
  );
};

export default Home;
