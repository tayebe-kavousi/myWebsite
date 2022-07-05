/* footer must includes:
        - links to other pages belong to the owner of the page 
        - Back to top link
 */  


import {FaLinkedinIn} from "react-icons/fa";
import {FaGithubAlt} from "react-icons/fa";
import {FaBeer} from "react-icons/fa";
import {BsFillArrowUpSquareFill} from "react-icons/bs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col  from "react-bootstrap/Col";
import logo from '../../images/logo01.png';


function LinkToOtherPages({iconName,reference}){
    return (
        <a href={reference} className="text-white me-4">
            {iconName =='FaGithubAlt' ? <FaGithubAlt size='2em'/> : <FaLinkedinIn size='2em' className="socialIcon"/>}
        </a>
    );
}


function ScrollTop () {
    return (
        <div className="text-white"  onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <BsFillArrowUpSquareFill size='2em'/>
        </div>
    );
}

export default function Footer(){
    return (
        <div id="footer" className='bg-dark' >
            <Row className= "text-white text-center" >
                <Col xs={6} md={4}><img width="50%" src={logo} style={{margin:0}} alt="logo"/></Col>
                <Col xs={12} md={8}>
                    <Row>
                         <Col>
                            <h5>Have a <FaBeer/> and check out my other pages</h5>
                            <LinkToOtherPages reference="https://github.com/tayebe-kavousi" iconName="FaGithubAlt"/> 
                            <LinkToOtherPages reference="https://www.linkedin.com/in/teya-kavousi/" iconName="FaLinkedinIn"/>
                        </Col>
                    </Row>
                    <Row>
                        <div className="text-center p-3 text-white ">
                        <p> © 2022 Copyright: <a className="text-white" href="/home"> Tia Kavousi</a></p>
                        </div>
                    </Row>
                    <Row className="text-center">
                        <ScrollTop/>
                    </Row>
                </Col>
            </Row>  
        </div>
    )
}