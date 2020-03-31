import React, { Component } from "react";
import SearchForm from "../SearchForm";
import ResultList from "../ResultList";
import { Col, Row, Container } from "../Grid";
import API from "../../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: []
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
      <Container>
        <Row>
          <Col size="md-12">
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        </Col>
        <Col size="md-12">
        {this.state.results.length ? (
        <ResultList> 
          {this.state.results.map(results => (
          <img className = "StyleThumbnail" alt="thumbnail" src={results.thumbnail}></img>
          ))}
        </ResultList>
        ) : (
          <p>No results to display at this time</p>
        )}
        </Col>
        <Col size="md-12">
        {this.state.results.length ? (
        <ResultList>
          {this.state.results.map(results => (
          <strong>{results.details}</strong>
          ))}
        </ResultList>
         ) : (
          <p></p>
        )}
        </Col>
        </Row>
      </Container>
    )};
}

SearchResultContainer.defaultProps = {
  search: "",
  results: []
}

export default SearchResultContainer;
