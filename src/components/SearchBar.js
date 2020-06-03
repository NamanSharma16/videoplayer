import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  handleChange = (event) => {
    this.setState({ term: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className=" search-bar ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label>Search Video</label>
            <input
              type="text"
              placeholder="Search.."
              onChange={this.handleChange}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
