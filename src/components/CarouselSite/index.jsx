import { Carousel,  } from 'react-bootstrap';
import styles from "./CarouselSite.module.scss";

const CarouselSite = () => {
    return(
        <Carousel className={styles.carousel}>
        <Carousel.Item className={styles.carousel__item}>
          <img
            className="d-block w-100"
            src="assets/ESG.jpeg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className={styles.carousel__item}>
          <img className="d-block w-100" src="/assets/environment.jpg" alt="foto meio ambiente" />
          <Carousel.Caption>
            <h3>ENVIRONMENT</h3>
            <p>
            Compromisso Verde: Atuamos com responsabilidade ambiental, gerindo recursos de forma eficiente e promovendo práticas sustentáveis. Juntos por um futuro mais verde e sustentável.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.carousel__item}>
          <img className="d-block w-100" src="/assets/social.jpg" alt="foto social" />
          <Carousel.Caption>
            <h3>SOCIAL</h3>
            <p>
            Compromisso Social: Investimos em educação acessível, diversidade e igualdade. Nosso impacto social é o coração da nossa sustentabilidade. Junte-se a nós pela equidade para todos.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.carousel__item}>
          <img className="d-block w-100" src="/assets/governance.jpg" alt="foto governança" />
          <Carousel.Caption>
            <h3>GOVERNANCE</h3>
            <p>
            Governança Ética: Conduzimos nossas atividades com transparência e integridade, priorizando a responsabilidade e a prestação de contas. Nossa governança robusta é a base para um futuro sustentável. Faça parte desta jornada de confiança e responsabilidade.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

export default CarouselSite;