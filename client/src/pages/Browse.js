import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Row, Col } from "../components/Grid";
import { List, ListItem } from "../components/List";
import SearchForm from "../components/SearchForm";
import API from "../utils/API";
//import ResultList from "../components/ResultList";
//import SearchResultContainer from "../components/SearchResultContainer";


class Browse extends Component {

    state = {
    search: "",
    data: [],    
};

//In future will need to construct OR conditions when multiple websites come into the picture
// When the website thumbnail is clicked, scrape all from that website's main page

handleClick() {
this.searchWebsite_1();
//console.log("this.searchWebsite_1: ", this.searchWebsite_1())
};

async searchWebsite_1() {
     API.scrapeAll()
     .then( data => {
     this.setState({ data: data.data })
     console.log("After this.setState")
     console.log("results: res.data ", {data: data})
     console.log("results: res.data.data ", {data: data.data})
     //console.log("results: res.data.data", {results: res.data.data})
     //console.log(res.data)
    // .catch(err =>{ console.log(err)
    
    //  });
    })
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

                <Row fluid>
                <Col size="md-12">
                    <Navbar />
                    <Jumbotron>
                    <h1>Websites</h1>
                    <h2>Click on any icon to begin your Search!</h2>
                    </Jumbotron>
                </Col>
                </Row>
                


                <Row>
                <Col size="md-12">
                {/* Placeholder for when the user signs in - user model needs to be created first with sequelize */}
                <div>
                <img onClick={(e) => this.handleClick(e)} className="StyleThumbnail" src="https://cdn11.bigcommerce.com/s-tzlp6/images/stencil/360x360/logo_1415602615__88358.original.png" class="rounded float-left" alt="Greenheart Shop" />
                <img onClick={(e) => this.handleClick(e)} className="StyleThumbnail" src="https://image.shutterstock.com/image-vector/vector-logo-design-template-badge-260nw-493313134.jpg" class="rounded float-right" alt="Placeholder icon" />
                <img onClick={(e) => this.handleClick(e)} className="StyleThumbnail"src="https://image.shutterstock.com/image-vector/ecology-concept-green-city-on-260nw-701621245.jpg" class="rounded float-left" alt="Placeholder icon" />
                <img onClick={(e) => this.handleClick(e)} className="StyleThumbnail"src="https://image.shutterstock.com/image-photo/hand-holding-light-bulb-front-260nw-725473402.jpg" class="rounded float-right" alt="Placeholder icon" />
                </div>
                <div>
                <br/>
                <br/>
                <br/>
                </div>
                </Col>
                </Row>


                <Row>     
                <Col size="md-12">
                <SearchForm
                  search={this.state.search}
                  handleFormSubmit={this.handleFormSubmit}
                  handleInputChange={this.handleInputChange}
                />
                </Col>
                </Row>


                <Row>
                <Col size="md-12">

                {this.state.data.length ? (
                    <List>
                    {this.state.data.map(data => (
                    <ListItem key={data.data}>
                    <Container>
                    {this.state.data.resultThumbnail ? (
                    <img className ="StyleThumbnail" alt="thumbnail" src={data.resultThumbnail} ></img>
                    ) : (<img className ="StyleThumbnail" alt="thumbnail_1" src="https://cdn11.bigcommerce.com/s-tzlp6/images/stencil/360x360/logo_1415602615__88358.original.png" ></img>)}
                    <p>{data.resultDetails}</p>
                    </Container>
                    </ ListItem>
                    ))}
                    </List>
                    ) : (
                    <p>No Results to display at this time. Click an icon or search for an item to get started!</p>
                    )}
                </Col>
                </Row>
                <Footer />
</Container>
</div>
)};
}

export default Browse;