import React from "react";
import styles from "./ContainerMVV.module.css";
import { Container, Card } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";

const ContainerMVV = () => {
  return (
    <Container>
      <CardGroup className={styles.cardGroup}>
        <Card className={styles.card}>
          <Card.Body>
            <Card.Title id="mission" className={styles.cardTitle}>Missão</Card.Title>
            <Card.Text className={styles.cardText}>
              Nossa missão é proporcionar uma educação de excelência, preparando
              nossos alunos para se tornarem líderes responsáveis e
              comprometidos com o desenvolvimento sustentável, a igualdade
              social e a ética nos negócios.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className={styles.card}>
          <Card.Body>
            <Card.Title id="vision" className={styles.cardTitle}>Visão</Card.Title>
            <Card.Text className={styles.cardText}>
              Buscamos ser uma referência em práticas educacionais que integram
              os princípios de ESG. Queremos ser reconhecidos como uma
              instituição que forma profissionais capacitados e conscientes de
              seu papel na construção de um mundo mais justo, equilibrado e
              sustentável.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className={styles.card}>
          <Card.Body>
            <Card.Title id="values" className={styles.cardTitle}>Valores</Card.Title>
            <Card.Text className={styles.cardText}>
              <ul>
                <li>
                  <strong>Sustentabilidade:</strong> Práticas sustentáveis,
                  redução do impacto ambiental e conservação de recursos
                  naturais.
                </li>
                <li>
                  <strong>Diversidade e Inclusão:</strong> Valorização da
                  diversidade, ambiente inclusivo, respeito e
                  representatividade.
                </li>
                <li>
                  <strong>Responsabilidade Social:</strong> Contribuição
                  positiva para a sociedade, envolvimento em iniciativas
                  comunitárias e impacto social positivo.
                </li>
                <li>
                  <strong>Ética e Transparência:</strong> Padrões éticos
                  elevados, transparência em práticas e comunicações.
                </li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
};
export default ContainerMVV;
