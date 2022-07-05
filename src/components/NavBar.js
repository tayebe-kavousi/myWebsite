import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../images/logo01.png';
import { Link } from 'react-scroll';

export default function NavBar(){
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="light" sticky='top'>
            <Container fluid className='text-white'>
                <Navbar.Brand href="#home"> <img width="100px" src={logo} style={{margin:0}} alt="logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto my-2 my-lg-0">
                        <Link 
                        style={{textDecoration: 'none'}}
                        className='pe-3 text-white'
                        to="home"
                        activeClass="active" 
                        spy={true} 
                        smooth={true} 
                        duration={500}>Home </Link>
                        <Link 
                        style={{textDecoration: 'none'}}
                        className='pe-3 text-white'
                        to="about"
                        spy={true} 
                        smooth={true} 
                        duration={500}>About</Link>
                        <Link 
                        style={{textDecoration: 'none'}}
                        className='pe-3 text-white'
                        to="work"
                        spy={true} 
                        smooth={true} 
                        duration={500}>Work</Link>
                        <Link 
                        style={{textDecoration: 'none'}}
                        className='pe-3 text-white'
                        to="contact"
                        spy={true} 
                        smooth={true} 
                        duration={500}>Contact</Link>
                        <a 
                        style={{textDecoration: 'none'}}
                        className='pe-3 text-white'
                        href="https://tayebe-kavousi.github.io/minimalBlog/">Blog</a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

