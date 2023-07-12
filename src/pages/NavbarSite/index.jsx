import { auto } from "@popperjs/core";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./NavbarSite.module.css";

const NavbarSite = () => {
  return (
    <Navbar className={styles.navbar}>
      <Container>
        <Navbar.Brand href="#home">Little Green</Navbar.Brand>
        <Nav className={styles.me-auto}>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/reports">Relatórios</Nav.Link>
          <Nav.Link href="/esg">Práticas ESG</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarSite;
