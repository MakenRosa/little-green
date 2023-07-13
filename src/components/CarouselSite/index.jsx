import { Carousel } from "react-bootstrap";
import styles from "./CarouselSite.module.scss";

const CarouselSite = () => {
  return (
    <Carousel className={styles.carousel} indicators={false}>
      <Carousel.Item className={styles.carousel__item}>
        <img
          className={`d-block w-100 ${styles.carousel__img}`}
          src="assets/esg.jpg"
          alt="First slide"
        />
        <Carousel.Caption className={styles.carousel__item__caption}>
          <h3> Bem-vindo ao nosso site dedicado às práticas de ESG!</h3>
          <p>
            Aqui, promovemos a transparência e o engajamento da comunidade
            acadêmica em questões ambientais, sociais e de governança.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.carousel__item}>
        <img
          className={`d-block w-100 ${styles.carousel__img}`}
          src="/assets/environment.jpg"
          alt="foto meio ambiente"
        />
        <Carousel.Caption className={styles.carousel__item__caption}>
          <h3>ENVIRONMENT</h3>
          <p>
            <strong> Compromisso Verde:</strong> Atuamos com responsabilidade
            ambiental, gerindo recursos de forma eficiente e promovendo práticas
            sustentáveis. Juntos por um futuro mais verde e sustentável.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.carousel__item}>
        <img
          className={`d-block w-100 ${styles.carousel__img}`}
          src="/assets/social.jpg"
          alt="foto social"
        />
        <Carousel.Caption className={styles.carousel__item__caption}>
          <h3>SOCIAL</h3>
          <p>
            <strong> Compromisso Social:</strong> Investimos em educação
            acessível, diversidade e igualdade. Nosso impacto social é o coração
            da nossa sustentabilidade. Junte-se a nós pela equidade para todos.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.carousel__item}>
        <img
          className={`d-block w-100 ${styles.carousel__img}`}
          src="/assets/governance.jpg"
          alt="foto governança"
        />
        <Carousel.Caption className={styles.carousel__item__caption}>
          <h3>GOVERNANCE</h3>
          <p>
            <strong> Governança Ética:</strong> Conduzimos nossas atividades com
            transparência e integridade, priorizando a responsabilidade e a
            prestação de contas. Nossa governança robusta é a base para um
            futuro sustentável. Faça parte desta jornada de confiança e
            responsabilidade.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselSite;
