import React, { Component } from "react";
import { connect } from "react-redux";

class searchBar extends Component {
  render() {
    return (
      <div>
        <input />
        <span className="input-group-btn" />
        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(searchBar);
