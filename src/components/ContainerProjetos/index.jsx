import React from "react";
import styles from "./Home.module.scss";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import natureSenacImage from "../../img/nature-senac.jpeg";
import inclusionSenacImage from "../../img/inclusion-senac.jpeg";
import sustainabilitySenacImage from "../../img/sustainability-senac.jpeg";

const ContainerProjetos = () => {
  return (
    <Container id="projects" className={styles.container_projeto}>
      <Card className={styles.card_projeto}>
        <Card.Body className={styles.card_body}>
          <Card.Title>PROJETOS</Card.Title>
        </Card.Body>
      </Card>
      <Card.Text>
        <div className={styles.container_img_text}>
          <div className={styles.img_text}>
            <img src={natureSenacImage} alt="" />
            <span>
              A construção de uma horta escolar entra no pilar da
              sustentabilidade do ESG. Nesse caso, os alunos aprendem a
              importância de preservar o meio ambiente e, também, podem absorver
              conteúdos importantes das ciências da natureza. Para deixar esse
              momento mais agradável e colaborativo, a escola pode convidar a
              família do aluno para participar dessa atividade. Essa ação ajuda
              a estreitar os laços entre escola e família, bem como visa atingir
              positivamente as pessoas que fazem parte da comunidade escolar,
              mesmo que não esteja inserido no dia a dia. Tudo que for produzido
              na hora pode ser aproveitado na escola ou entregue aos alunos, o
              que ajuda a incentivar a alimentação saudável. É válido também
              fazer a doação desses produtos, reforçando os impactos positivos
              que a instituição de ensino precisa oferecer à sociedade.{" "}
            </span>
          </div>
          <div className={styles.img_text}>
            <img src={inclusionSenacImage} alt="" />
            <span>
              A diversidade e inclusão é um pilar importante da agenda ESG, e
              pode aparecer tanto na contratação de professores e demais
              funcionários com múltiplas características, quanto nas aulas e
              atividades que reforcem a importância do aluno em conhecer e
              respeitar as diferenças. Nesse caso, a educação socioemocional
              pode ser uma importante aliada. Além disso, a escola precisa
              favorecer um ambiente educacional saudável para todas as pessoas,
              incluindo a valorização do corpo docente. O clima escolar positivo
              é benéfico para todos e pode ajudar na melhoria do
              ensino-aprendizagem oferecido aos alunos.
            </span>
          </div>
          <div className={styles.img_text}>
            <img src={sustainabilitySenacImage} alt="" />
            <span>
              A preocupação com a preservação do meio ambiente está incluída no
              ESG e pode ser praticada na escola por meio de oficinas de
              reciclagem, reutilização de materiais e outras ações de
              sustentabilidade. Por exemplo, a escola pode distribuir lixeiras
              para o incentivo à coleta seletiva de materiais.{" "}
            </span>
          </div>
        </div>
      </Card.Text>
    </Container>
  );
};

export default ContainerProjetos;
