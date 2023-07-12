import React from "react";
import styles from "./Home.module.css";
import NavbarSite from "../NavbarSite";

const Home = () => {
  return (
    <div className={styles.home}>
      <NavbarSite />
      <h1>Home</h1>
    </div>
  );
};

export default Home;
