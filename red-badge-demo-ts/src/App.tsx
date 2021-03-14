import React from "react";
import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <div>
      <Container>
        <h2>Convert to Class Challenge 01</h2>
        <p>
          Convert the component (InfoCard.tsx) and turn them into class
          components in a new file (InfoCardClass.tsx) and bring them into the
          App.tsx file. Please use a different picture in each mount of
          InfoCardClass
        </p>
        <Row>
          <Col md="4">{/* INFOCARDCLASS HERE */}</Col>
          <Col md="4">{/* INFOCARDCLASS HERE */}</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
