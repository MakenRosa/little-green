import React from "react";
import styles from "./Home.module.css";
import Navbar from "../Navbar";

const Home = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <h1>Home</h1>
    </div>
  );
};

export default Home;
