import React from "react";
import styles from "./ContainerResults.module.css";
import { Container, Card } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import { AiFillCheckCircle } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri";
import { BsBuilding } from "react-icons/bs";

const ContainerResults = () => {
  return (
    <Container>
      <h2 className={styles.title}>Nossos Resultados</h2>
      <CardGroup className={styles.cardGroup}>
        <Card className={styles.card}>
          <Card.Body>
            <Card.Title className={styles.cardTitle}>
              <AiFillCheckCircle />
              Redução de Emissões de Carbono
            </Card.Title>
            <Card.Text className={styles.cardText}>
              Implementamos medidas de eficiência energética e fontes
              renováveis, resultando em uma redução de 30% nas emissões de
              carbono, o equivalente a retirar 500 carros das ruas anualmente.
            </Card.Text>
            <Card.Text className={`${styles.text_muted}  text-muted`}>
              Resultado de 2022
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className={styles.card}>
          <Card.Body>
            <Card.Title className={styles.cardTitle}>
              <RiTeamLine /> Promoção da Diversidade
            </Card.Title>
            <Card.Text className={styles.cardText}>
              Implementamos políticas de inclusão e diversidade, resultando em
              um aumento de 50% na representatividade de grupos minoritários
              entre os estudantes e colaboradores da instituição.
            </Card.Text>
            <Card.Text className={`${styles.text_muted}  text-muted`}>
              Resultado de 2022
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className={styles.card}>
          <Card.Body>
            <Card.Title className={styles.cardTitle}>
              <BsBuilding /> Governança Transparente
            </Card.Title>
            <Card.Text className={styles.cardText}>
              Implementamos práticas de governança corporativa, garantindo maior
              transparência em nossas decisões e processos. Recebemos
              reconhecimento internacional com um índice de governança de 90%,
              fortalecendo a confiança da comunidade acadêmica e dos
              investidores.
            </Card.Text>
            <Card.Text className={`${styles.text_muted}  text-muted`}>
              Resultado de 2022
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default ContainerResults;
