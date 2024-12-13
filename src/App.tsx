import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css'

import MyNavbar from "./components/MyNavbar";
import { Col, Container, Row } from "react-bootstrap";
import MyCarousel from "./components/MyCarousel";
import EpisodiCarousel from "./components/EpisodiCarousel";
import NewUscite from "./components/NewUscite";
import MyExplorer from "./components/MyExplorer";
import MyFooter from "./components/MyFooter";

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
        <Row className=" g-3 row-cols-3 row-cols-lg-5"> 
          <NewUscite/>
        </Row>
        <Row>
        <Col>
            <h6 className=" text-light mt-4 mb-3">Altro da esplorare</h6>
          </Col>
          <Row>
            <Col>
            <MyExplorer/>
            </Col>
          </Row>
        </Row>
      </Container>
      <footer className=" footer text-white mt-4 " >

        <MyFooter/>
      </footer>
    </div>
  );
}

export default App;
