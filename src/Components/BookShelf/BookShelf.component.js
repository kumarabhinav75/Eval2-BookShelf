import React, {Component} from 'react';
import AuthorShelf from '../AuthorShelf/AuthorShelf.component'

// import cardJSON from '../../mockData/index.json';

import './style.css';

const axios = require('axios');

class Main extends Component {
  state = {
    BooksJSON: [],
  }

  componentDidMount() {
    return axios.get('http://localhost:8080/books')
      .then((jsonObj) => {
        this.setState({BooksJSON: jsonObj.data});
        return jsonObj;
      });
  }

  render(){
    console.log(this.state.BooksJSON["J K Rowling"]);
    return (
      <div className="BookShelf">
        <div className="Logo">
          <span className="LogoName" >
            <div className="LogoIcon">BS</div>
            <div className="LogoText">The Book Shelf</div>
          </span>
        </div>
        <div className="author-shelfs">
          <fieldset className="author-container">
          <legend>J.K.Rowling</legend>
            <AuthorShelf books={this.state.BooksJSON["J K Rowling"]}/>
          </fieldset>
          <fieldset className="author-container">
            <legend>Sidney Sheldon</legend>
            <AuthorShelf books={this.state.BooksJSON["Sidney Sheldon"]}/>
          </fieldset>
        </div>

      </div>
    );
  }
}


export default Main;