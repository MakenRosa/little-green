import React from "react";
import styles from "./Home.module.scss";
import CarouselSite from "components/CarouselSite";
import ContainerMVV from "components/ContainerMVV/index";

const Home = () => {
  return (
    <div className={styles.container}>
      <CarouselSite />
      <ContainerMVV />
    </div>
  );
};

export default Home;
