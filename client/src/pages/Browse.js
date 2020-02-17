import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Row, Col } from "../components/Grid";
import SearchResultContainer from "../components/SearchResultContainer";
import API from "../utils/API";

class Browse extends Component {
    state = {
    search: "",
    results: [],
};

//I future will need to construct OR conditions when multiple websites come into the picture
// When the website thumbnail is clicked, scrape all from that website's main page
  
  handleClick() {
    this.searchWebsite_1();
  }

  searchWebsite_1 = () => {
    API.scrapeAll()
      .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchWebsite_1(this.state.search);
  };

    render() {
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
                <img onClick={(e) => this.handleClick(e)} className="StyleThumbnail" src="https://image.shutterstock.com/image-photo/hand-holding-sprout-growing-nature-260nw-600903620.jpg" class="rounded float-left" alt="Placeholder icon" />
                <img onClick={(e) => this.handleClick(e)} className="StyleThumbnail" src="https://image.shutterstock.com/image-vector/vector-logo-design-template-badge-260nw-493313134.jpg" class="rounded float-right" alt="Placeholder icon" />
                <img onClick={(e) => this.handleClick(e)} className="StyleThumbnail"src="https://image.shutterstock.com/image-vector/ecology-concept-green-city-on-260nw-701621245.jpg" class="rounded float-left" alt="Placeholder icon" />
                <img onClick={(e) => this.handleClick(e)} className="StyleThumbnail"src="https://image.shutterstock.com/image-photo/hand-holding-light-bulb-front-260nw-725473402.jpg" class="rounded float-right" alt="Placeholder icon" />
                </div>
                </Col>
                </Row>
                <SearchResultContainer/>
                <Footer />
            </Container>
        </div>
    );
}
}
export default Browse;

//On-click of the thumbnail, render the SerachResult container that contains the searh form and the results list - this is key 
//OR
//Have the search result container already there and when the user clicks a thunbnail it renders all items and they then have the choice to serach if they want 