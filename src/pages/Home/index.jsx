import React from "react";
import styles from "./Home.module.scss";
import CarouselSite from "components/CarouselSite";
import ContainerMVV from "components/ContainerMVV/index";
import ContainerProjetos from "components/ContainerProjetos/index";

const Home = () => {
  return (
    <div className={styles.container}>
      <CarouselSite />
      <ContainerMVV />
      <ContainerProjetos />
    </div>
  );
};

export default Home;
