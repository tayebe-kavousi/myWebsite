
import tayebe from '../images/tayebe.jpeg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function About(){
return(
    <Container id="about" fluid="sm">
    <Row>
        <Col xs={6} md={4}>
            <img src={tayebe}  alt="my photo"/> 
        </Col>
        <Col xs={12} md={8}>
            <h5>
                Hello, my name is Tia Kavousi.
                I'm a Web Developer, based in Malaysia.
                I have major skills in javascript, HTML, CSS and React.
                If you have a web application project that I can help with, please get in touch.
            </h5>
        </Col>
    </Row> 
  </Container>
   
)
}
