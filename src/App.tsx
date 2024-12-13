import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MyNavbar from "./components/MyNavbar";
import { Col, Container, Row } from "react-bootstrap";
import MyCarousel from "./components/MyCarousel";
import EpisodiCarousel from "./components/EpisodiCarousel";
import NewUscite from "./components/NewUscite";

function App() {
  return (
    <div className="sfondo">
      <MyNavbar />
      <Container fluid>
        <Row>
          <Col>
            <h2 className=" text-light mt-4">Novità</h2>
            <hr className="hr" />
          </Col>
        </Row>
        <Col>
          <MyCarousel />
        </Col>
        <Row>
          <Col>
            <h6 className=" text-light mt-4 mb-3">Nuovi episodi radio</h6>
          </Col>
        </Row>
        <Col>
          <EpisodiCarousel />
        </Col>
        <Row>
          <Col>
            <h6 className=" text-light mt-4 mb-3">Nuove uscite</h6>
          </Col>
        </Row>
        <Row>
          {/* <NewUscite/> */}
        </Row>
      </Container>
    </div>
  );
}

export default App;
