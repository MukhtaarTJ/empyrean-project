import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const OurStory = () => {
  const storyText = `
    Our story is made up of our shared<br />
    lifestyle, beliefs, love & faith.
    which we <br/> seek to share through:
  `;

  return (
    <Container fluid className="py-3">
      <Row className="justify-content-center align-items-center">
        <Col xs={2}></Col>
        <Col xs={8} className="text-center">
          <p
            className="text-black fs-1 fw-medium font-family-Poppins text-capitalize m-0 px-3 py-2"
            dangerouslySetInnerHTML={{ __html: storyText }}
          />
        </Col>
        <Col xs={2}></Col>
      </Row>

      {/* Updated the Col component to be inside a Row */}
      <Row className="align-items-center">
        <Col lg={3} className="bg-success-subtle bg-opacity-50"></Col>
        <Col
          lg={5}
          className="text-center text-black fs-2 fw-medium font-family-Poppins text-capitalize m-0 px-3 py-2"
        >
          Our mission
        </Col>
        {/* Replace <Col fluid> with <Container> */}
        {/* <Col>
          <Row>
            <Col
              lg={12}
              className="text-start text-black fs-6 fw-light font-family-Poppins m-0 px-3 py-2"
            >
              <p>
                At Empyrean, we believe that life is a beautiful tapestry woven
                from the threads of shared lifestyle, beliefs, love, and faith.
                Our website is a sanctuary where like-minded individuals can
                come together to celebrate the rich tapestry of life, explore
                their shared values, and forge lasting connections with others
                who share their passions.
              </p>
              <br />
              <p>
                We recognize that our beliefs are at the heart of who we are.
                The Empyrean provides a platform for open, respectful, and
                enriching discussions on faith, spirituality, and philosophical
                viewpoints. It's a place where differences are respected, and
                understanding is cultivated.
              </p>
              <br />
              <p>
                Our talented writers and guest contributors explore a wide
                range of topics, from lifestyle choices to faith-based insights,
                relationship advice, and heartwarming stories of love. There's
                something for everyone.
              </p>
            </Col>
          </Row>
        </Col> */}
      </Row>
    </Container>
  );
};

export default OurStory;
