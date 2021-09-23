import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from 'react-bootstrap'

const PageLayout = ({ children }) => {
  return <Container>
    <Row>
      <Col>
        {children}
      </Col>
    </Row>
  </Container>;
};

PageLayout.propTypes = {
  //
};

export default PageLayout;
