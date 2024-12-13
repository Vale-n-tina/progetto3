import { Col, Container, Row } from "react-bootstrap";

const MyFooter = () => {
  return (
    <Container fluid className=" p-0 footercss">
      <Row>
        <Col>
        <Row>
            <Col className=" d-flex col-4 pt-3 justify-content-center">
            <p className=" m-0 text-light small">Italia</p>
            <div className="border-end mx-2 text-secondary" ></div>
            <p className=" m-0 text-secondary small">English (UK)</p>
            </Col>
            <Row>
            <Col className="col-6 d-flex mt-3 justify-content-end mt-2">
            <span className="small">Copyright © 2024 Apple Inc. Tutti i diritti riservati.</span>
            </Col>
            </Row>
            <Row>
            <Col className=" col-11 d-flex mt-3 p-0 justify-content-end mt-2">
            <p className=" m-0 text-light small">Condizione dei servizi internet</p>
            <div className="border-end mx-2 text-light" ></div>
            <p className=" m-0 text-light small">Apple Music e privacy</p>
            <div className="border-end mx-2 text-light" ></div>
            <p className=" m-0 text-light small">Avviso sui cookie</p>
            <div className="border-end mx-2 text-light" ></div>
            <p className=" m-0 text-light small">Supporto</p>
            <div className="border-end mx-2 text-light" ></div>
            <p className=" m-0 text-light small">Feedback</p>
            </Col>
            </Row>
        </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MyFooter;
