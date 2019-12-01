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
                <h1>Our Mission Statement</h1>
                </Jumbotron>
                </Col>
            </Row>

            <Row>
                <Col size = "md-12">
                <h1>Making a Difference!</h1>
                </Col>
            </Row>
            
            <Row>
                <Col size = "md-12">
                <p>More content here</p>
                </Col>
            </Row>
            <Footer />
        </Container>
        </div>     
    )
}

export default About;