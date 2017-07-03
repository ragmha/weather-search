import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // Fetches Weather
    this.props.fetchWeather(this.state.term);
    this.setState({ term: "" });
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          placeholder="Get a Five day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

// makes sure it flows down into middleware and reducers
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
