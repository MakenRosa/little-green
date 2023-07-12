import React from "react";
import styles from "./Home.module.scss";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card"
import CarouselSite from "components/CarouselSite";

const Home = () => {
  return (
    <div className={styles.container}>
      <CarouselSite />
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>Little Green</Card.Title>
            <Card.Text>
              Little Green é uma empresa de consultoria em sustentabilidade que
              tem como objetivo auxiliar empresas a se tornarem mais
              sustentáveis.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Home;
