import React from "react";
import styles from "./Home.module.scss";
import CarouselSite from "components/CarouselSite";
import ContainerMVV from "components/ContainerMVV";
import SustainabilityReports from "components/SustainabilityReports/index";

const Home = () => {
  return (
    <div className={styles.container}>
      <CarouselSite />
      <ContainerMVV />
      <SustainabilityReports />
    </div>
  );
};

export default Home;
