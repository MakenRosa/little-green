import React from "react";
import styles from "./Participate.module.scss";
import { Button, Form } from "react-bootstrap";
import { BsPerson, BsEnvelope, BsPencilSquare } from "react-icons/bs"; // Importe os ícones do React-Icons

const Participate = () => {
  return (
    <section className={styles.participate}>
      <div className={styles.textContainer}>
        <h2 id="participate">Seja Parte da Mudança com Little Green</h2>
        <p>
          Acreditamos na força de uma comunidade unida e engajada. Sua
          participação pode fazer a diferença em nossas práticas ESG. Junte-se a
          nós e faça parte da mudança que queremos ver no mundo!
        </p>
        <h3>Compartilhe suas ideias conosco</h3>
        <p>
          Preencha o formulário abaixo e vamos começar a fazer a diferença
          juntos. Estamos ansiosos para ouvir suas ideias inovadoras e trabalhar em conjunto para um futuro mais verde.
        </p>
      </div>
      <Form className={styles.formContainer}>
        <Form.Group controlId="formGroupName">
          <Form.Label><BsPerson /> Nome</Form.Label>
          <Form.Control type="text" placeholder="Insira seu nome" />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Label><BsEnvelope /> Email</Form.Label>
          <Form.Control type="email" placeholder="Insira seu email" />
        </Form.Group>
        <Form.Group controlId="formGroupMessage">
          <Form.Label><BsPencilSquare /> Mensagem</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Deixe uma mensagem"/>
        </Form.Group>
        <Button variant="success" type="submit" block>
          Enviar Ideia
        </Button>
      </Form>
    </section>
  );
};

export default Participate;
