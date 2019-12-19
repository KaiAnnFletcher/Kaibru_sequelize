import React from "react";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Row, Col } from "../components/Grid";

function Browse() {

    return (
        <div>
            <Container fluid>
                <Row>
                <Col size="md-12">
                    <Navbar />
                    <Jumbotron>
                    <h1>Websites</h1>
                    <h2>Click on any icon to begin your Search!</h2>
                    </Jumbotron>
                </Col>
                </Row>

                <Row fluid>
                <Col size="md-12">
                {/* Placeholder for when the user signs in - user model needs to be created first with sequelize */}
                <div>
                <img src="https://image.shutterstock.com/image-photo/hand-holding-sprout-growing-nature-260nw-600903620.jpg" class="rounded float-left" alt="Placeholder icon" />
                <img src="https://image.shutterstock.com/image-vector/vector-logo-design-template-badge-260nw-493313134.jpg" class="rounded float-right" alt="Placeholder icon" />
                <img src="https://image.shutterstock.com/image-vector/ecology-concept-green-city-on-260nw-701621245.jpg" class="rounded float-left" alt="Placeholder icon" />
                <img src="https://image.shutterstock.com/image-photo/hand-holding-light-bulb-front-260nw-725473402.jpg" class="rounded float-right" alt="Placeholder icon" />
                </div>
                </Col>
                </Row>
                <Footer />
            </Container>
        </div>

    )
}
export default Browse;