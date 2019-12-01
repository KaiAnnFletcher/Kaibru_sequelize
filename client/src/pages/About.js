import React from "react";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Row, Col } from "../components/Grid"

function About() {
    return (
        <div>
        <Container fluid>
            <Row>
                <Col size ="md-12">
                <Navbar />
                <Jumbotron>
                <h1>ABOUT US</h1>
                </Jumbotron>
                </Col>
            </Row>

            <Row>
                <Col size = "md-12">
                <h1>Who Are We?</h1>
                </Col>
            </Row>
            
            <Row>
                <Col size = "md-12">
                <h1>Bruno Mazzitelli</h1>
                <p>Lead Business Strategist</p>
                </Col>
            </Row>
            
            <Row>
                <Col size = "md-12">
                <h1>Kai-Ann Fletcher</h1>
                <p>Principal Developer</p>
                </Col>
            </Row>
            <Footer />
        </Container>
        </div>
        
    )
}

export default About;