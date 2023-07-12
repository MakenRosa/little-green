import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./NavbarSite.module.scss";
import { Link } from "react-router-dom";

const NavbarSite = () => {
  return (
    <Navbar className={styles.navbar}>
      <Container>
        <Navbar.Brand href="/">Little Green</Navbar.Brand>
        <Nav className={styles.navbar__nav}>
          <Link className={styles.navbar__nav__link} to={"/"}>Home</Link>
          <Link className={styles.navbar__nav__link} to="reports">Relatórios</Link>
          <Link className={styles.navbar__nav__link} to="esg">Práticas ESG</Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarSite;
