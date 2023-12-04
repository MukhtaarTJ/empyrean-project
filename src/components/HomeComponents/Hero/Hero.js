import { Col, Container, Row } from "react-bootstrap";
import heroImage from "../../../Assets/hero image.png";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <Container style={{ marginTop: "150px" }} className="mb-5">
      <Row>
        <h2 className={`text-center mb-5 ${styles.intro_text}`}>
          The Empyrean Couple{" "}
        </h2>
        <Col lg={6} className={styles.div1}>
          <div className={styles.intro_desc}>
            <h1>An Expression of shared lifestyle, beliefs, love & faith.</h1>
          </div>

          <div className={styles.desc}>
            <p>
              Love is the universal language that binds us all. We celebrate
              love in all its forms. We offer advice, support, and inspiration
              to foster healthy relationships and a compassionate world.
            </p>
          </div>

          <div className={styles.hero_link}>
            <a href="" className={styles.btn_link}>
              {" "}
              WATCH{" "}
            </a>
            <a href="" className={styles.watch_link}>
              BOOK A CONSULTATION{" "}
              <span>
                <i class="fa-solid fa-arrow-right"></i>
              </span>
            </a>
          </div>
        </Col>
        <Col lg={6} className={styles.div2}>
          <div>
            <img src={heroImage} className={`img-fluid ${styles.hero_img}`} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
