import { Container, Row, Col } from "react-bootstrap";
import logo from "../../Assets/empyreanlogo2.png";
import envelope from "../../Assets/envelope.svg";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <Container className={styles.footer} fluid>
      <Row>
        <Col lg={2}></Col>
        <Col lg={7} className={styles.content}>
          <div>
            <img src={logo} className={styles.logo} />
          </div>
          <div className={styles.text_container}>
            <p className={styles.footerText}>
              {" "}
              Love is the universal language that binds us all. We celebrate
              love in all its forms. We offer advice, support, and inspiration
              to foster healthy relationships and a compassionate world.
            </p>
          </div>

          <Row className={`${styles.footer_link} mt-5`}>
            <Col>
              <div className="mb-3">
                <Link to={"/"}>Home</Link>
              </div>
              <div className="mb-3">
                <Link to={"/about-us"}>About Us</Link>
              </div>

              <div className="mb-3">
                <Link to={"/testimonials"}>Testimonials</Link>
              </div>
            </Col>
            <Col>
              <div className="mb-3">
                <Link to={"/shop"}>Shop</Link>
              </div>
              <div className="mb-3">
                <Link to={"/premium-services"}>Premium Services</Link>
              </div>

              <div className="mb-3">
                <Link to={"/newsletter"}>Newsletter</Link>
              </div>
            </Col>
            <Col>
              <div>
                <Link to={""}>
                  {" "}
                  <img src={envelope} /> @Empyrean2023
                </Link>
              </div>
            </Col>
          </Row>
        </Col>

        <Col lg={3}></Col>
      </Row>
    </Container>
  );
};

export default Footer;
