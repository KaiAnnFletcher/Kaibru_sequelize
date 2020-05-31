import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class Home extends Component {

    render() {
        return(
        <div>
            <Container fluid>
                <Row>
                <Col size="md-12">
                    <Navbar />
                    <Jumbotron>
                    <h1>KAIBRU</h1>
                    <h2>Your One-stop Hub for Sustainably-sourced Products and Services</h2>
                    </Jumbotron>
                </Col>
                </Row>

                <Row fluid>
                <Col size="md-12">
                {/* Placeholder for when the user signs in - user model needs to be created first with sequelize */}
                <div>
                <h5 style={{textAlign: "center"}}>Kaibru is the place you can come to if you would like to find products or services that are sustainable and safe! 
                    Happy browsing and thank you for remembering our environment!
                </h5>
                </div>
                </Col>
                </Row>
                <Footer />
            </Container>
        </div>
    )
}
}

export default Home;