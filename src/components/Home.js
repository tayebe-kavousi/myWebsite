import Carousel from 'react-bootstrap/Carousel';
import venice1 from '../images/venice1.jpeg';
import venice2 from '../images/venice2.jpeg';
import venice4 from '../images/venice4.jpeg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CatCarousel(){
    return(
    <Carousel fade >
        <Carousel.Item>
            <img
            width="200px"
            className="d-block w-100"
            src={venice1}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                width="300px"
            className="d-block w-100"
            src={venice2}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            width="300px"
            className="d-block w-100"
            src={venice4}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel> 
    ); 
}
export default function Home(){
    return (
        <Container id="home" fluid="sm">
            <Row>
                <Col className="text-center text-md-right">
                    <h5>I have learned programming with a great companien and motivator who loves to sleep on any computer and laptop</h5>
                    <h5>This is Venice the cat</h5>
                </Col>
                <Col sm={6} >
                    <CatCarousel style={{display: 'flex', justifyContent: 'center'}}/>
                </Col>
            </Row>  
        </Container>
    )
}
