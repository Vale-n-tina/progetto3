
import './App.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyNavbar from './components/MyNavbar';
import { Col, Container, Row } from 'react-bootstrap';
import MyCarousel from './components/MyCarousel';

function App() {
  
  return (
    <div className='sfondo'>
    <MyNavbar/>
    <Container>
      <Row>
        <Col>
        <h2 className=" text-light mt-4">Novità</h2>
        <hr className="hr"/>
        </Col>
      </Row>
      <MyCarousel/>
    </Container>
    </div>
  )
}

export default App
