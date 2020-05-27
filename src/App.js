import React, {Component} from 'react';
import './App.css';
import Content from "./components/Content/Content";

class App extends Component {

  checkLocal = () => {
    if (localStorage.getItem('myList')) {
      return false;
    } else {
      localStorage.setItem('myList', JSON.stringify([]));
    }
  };

  render() {
    this.checkLocal();
    return (
        <div className="wrap">
          <Content />
        </div>
    )
  }
}

export default App;
