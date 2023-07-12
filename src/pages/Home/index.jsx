import React from "react";
import styles from "./Home.module.scss";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CarouselSite from "components/CarouselSite";
import natureSenacImage from "../../img/nature-senac.jpeg";
import inclusionSenacImage from "../../img/inclusion-senac.jpeg";
import ContainerMVV from "components/ContainerMVV/index";

const Home = () => {
  return (
    <div className={styles.container}>
      <CarouselSite />
      <ContainerMVV />
      <Container>
        <Card>
          <Card.Body className={styles.card_body}>
            <Card.Title>PROJETOS</Card.Title>
            <Card.Text>
              <img src={natureSenacImage} alt="" />
              <img src={inclusionSenacImage} alt="" />
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Home;
