import React from 'react';
import styles from './AboutUs.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Couples from '../../Assets/Rectangle 38.png';

import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container fluid className={`py-3 px-5 pt-5 ${styles.about_background}`} >
      <Row className="align-items-center px-5 pt-5 mt-5">
        <Col xs={12} md={6} lg={5} className={`mt-5 text-center text-md-start px-5 ${styles.imageContainer}`} >
          <img
            src={Couples}
            alt="Empyrean Couples"
            className="img-fluid rounded-5"
          />
        </Col>
        <Col xs={12} md={6} lg={6} className={`text-start text-black fs-6 fw-light font-family-Poppins m-0 px-3 py-1  ${styles.textContainer}`}>
          <h1 className={`text-center ${styles.textContainer}`}>About us</h1>
          <p className={styles.paragraph_text}>
            At Empyrean, we believe that life is a beautiful tapestry woven from the threads of shared
            lifestyle, beliefs, love, and faith. Our website is a sanctuary where like-minded individuals
            can come together to celebrate the rich tapestry of life, explore their shared values, and forge
            lasting connections with others who share their passions.
          </p>
          <br />
          <p className={styles.paragraph_text}>
            We recognize that our beliefs are at the heart of who we are. The Empyrean provides a platform
            for open, respectful, and enriching discussions on faith, spirituality, and philosophical viewpoints.
            It's a place where differences are respected, and understanding is cultivated.
          </p>
          <br />
          <p className={styles.paragraph_text}>
            Our talented writers and guest contributors explore a wide range of topics, from lifestyle choices
            to faith-based insights, relationship advice, and heartwarming stories of love. There's something for everyone.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
