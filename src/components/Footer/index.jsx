import React from "react";
import styles from "./Footer.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <Container>
        <Row>
          <Col md={4} xs={12} className={styles.logoSection}>
            <img src="/favicon.png" alt="Little Green" />
          </Col>
          <Col md={4} xs={12} className={styles.linksSection}>
            <h4>Links Importantes</h4>
            <ul>
              <li>
                <a href="https://sebrae.com.br/sites/PortalSebrae/artigos/entenda-o-que-sao-as-praticas-de-esg,66c7e3ac39f52810VgnVCM100000d701210aRCRD">
                  Práticas ESG
                </a>
              </li>
              <li>
                <a href="https://www.brasilmineral.com.br/noticias/como-fazer-do-esg-uma-pratica-comum">
                  Comunidade
                </a>
              </li>
              <li>
                <a href="https://exame.com/esg/ultimas-noticias/1/">Notícias</a>
              </li>
            </ul>
          </Col>
          <Col md={4} xs={12} className={styles.senacSection}>
            <h4>Faculdade Senac</h4>
            <p>Trabalho desenvolvido para a Faculdade Senac - 2023</p>
            <a href="#footer">Política de Privacidade</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
