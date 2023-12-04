import { Container, Row, Col } from "react-bootstrap";
import styles from "./Testimonials.module.css";
import testImage from "../../../Assets/Rectangle 17.png";

const Testimonials = () => {
  return (
    <Container className={styles.testimonial} fluid>
      <Row>
        <Col className={styles.testimonial_container}>
          <h4 className="text-center mt-5 mb-5">Testimonials</h4>
          <Row>
            <Col lg={6}>
              <div>
                <p className={styles.entry_text}>
                  {" "}
                  What people say about our amazing platform.{" "}
                </p>
              </div>

              <div>
                <p>
                  Over 1000+ purchases, 100 videos watched, 3000 subscribers and
                  50 stories shared.
                </p>
              </div>

              <div>
                <a href=""> read the success stories</a>
              </div>
            </Col>
            <Col lg={6}>
              <img src={testImage} alt="" />

              <div>
                <p>
                  Using this platform has inspired my faith, built my
                  spirituality and changed my love life. It was indeed the best
                  decision i made this year.
                </p>

                <div>
                  <div>
                    <h5>Zoe Brendan</h5>
                    <p>Canada</p>
                  </div>
                  <div>
                    <p>Star rating</p>
                  </div>
                </div>

                <hr />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonials;
