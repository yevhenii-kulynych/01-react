import React, {Component} from "react";
import './SearchBlock.css';
import Input from "../Input/Input";
import SubmitBtn from "../SubmitBtn/SubmitBtn";

class SearchBlock extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="search-block">
          <form onSubmit={this.props.fetchData} action="">
            <Input handleInput={this.props.handleInput} />
            <SubmitBtn />
          </form>
        </div>
    );
  }
}

export default SearchBlock;