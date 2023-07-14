import { Navbar, Nav } from "react-bootstrap";
import styles from "./NavbarSite.module.scss";
import "./navbar.css";
import { useState } from "react";

const NavbarSite = () => {

  const [show, setShow] = useState(window.innerWidth > 600);

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 600) {
      setShow(false);
    } else {
      setShow(true);
    }

  });

  return (
    <>
      <div className={styles.burgerDiv}>
        <img src="/favicon.png" alt="Little green" className={styles.burgerDiv__img} />
        <button className={styles.burgerDiv__button} onClick={() => setShow(!show)}>
          <div className={styles.burgerDiv__button__line}></div>
          <div className={styles.burgerDiv__button__line}></div>
          <div className={styles.burgerDiv__button__line}></div>
        </button>
      </div>

      {show && <Navbar className={styles.navbar}>
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
      </Navbar>}
    </>
  );
};

export default NavbarSite;
