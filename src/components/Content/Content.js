import React, {Component} from "react";
import './Content.css';
import SearchBlock from "../SearchBlock/SearchBlock";
import request from 'superagent';
import BookContainer from "../BookContainer/BookContainer";



class Content extends Component{
  constructor(props) {
    super(props);
    this.state = {
      book: [],
      searchField: ""
    };
  }

  handleInput = (event) => {
    this.setState({ searchField: event.target.value })
  };

  fetchData = (event) => {
    event.preventDefault();
    request
        .get("https://www.googleapis.com/books/v1/volumes")
        .query({q: this.state.searchField})
        .then((data) => {
          this.setState({book: [...data.body.items]});
        })

  };

  render() {
    return (
        <div className="main-content">
          <SearchBlock handleInput={this.handleInput} fetchData={this.fetchData}/>
          <div className="inner">
            <h2>Results:</h2>
            <h2>My list:</h2>
            <BookContainer books={this.state.book} />
          </div>
        </div>
    );
  }
}

export default Content;