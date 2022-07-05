import React,{Component} from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footer from './footer/Footer';
import Work from './Work';

export default class Main extends Component {
    render(){
        return (
            <div>
                <NavBar/>
                <About/>
                <Home /> 
                <Contact />
                <Work />
                <Footer/>
            </div>
        )
    }
}