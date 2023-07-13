import { Navbar, Nav } from "react-bootstrap";
import styles from "./NavbarSite.module.scss";
import "./navbar.css";

const NavbarSite = () => {
  return (
    <Navbar className={styles.navbar}>
      <Nav className={`mr-auto ${styles.navbar__nav}`}>
        <Nav.Link className={styles.navbar__nav__link} href="#home">Início</Nav.Link>
        <Nav.Link className={styles.navbar__nav__link} href="#mission">Missão</Nav.Link>
        <Nav.Link className={styles.navbar__nav__link} href="#vision">Visão</Nav.Link>
        <Nav.Link className={styles.navbar__nav__link} href="#values">Valores</Nav.Link>
        <Nav.Link className={styles.navbar__nav__link} href="#projects">Projetos</Nav.Link>
        <Nav.Link className={styles.navbar__nav__link} href="#results">Resultados</Nav.Link>
        <Nav.Link className={styles.navbar__nav__link} href="#reports">Relatórios</Nav.Link>
        <Nav.Link className={styles.navbar__nav__link} href="#participate">Participe</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarSite;
