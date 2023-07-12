import React from "react";
import styles from "./Home.module.scss";
import CarouselSite from "../../components/CarouselSite";

const Home = () => {
  return (
    <div className={styles.container}>
      <CarouselSite />
    </div>
  );
};

export default Home;
