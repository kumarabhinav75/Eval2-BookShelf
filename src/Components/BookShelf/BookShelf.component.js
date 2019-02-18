import React, {Component} from 'react';
// import AllCards from '../AllCards';

// import cardJSON from '../../mockData/index.json';

import './style.css';

// const axios = require('axios');

class Main extends Component {
  state = {
    BooksJSON: [],
  }

  // componentDidMount() {
  //   return axios.get('https://api.myjson.com/bins/hc5ye')
  //     .then((jsonObj) => {
  //       this.setState({cardJSON: jsonObj.data});
  //       return jsonObj;
  //     });
  // }

  render(){
    return (
      <div className="BookShelf">
        <div className="Logo">
          <span className="LogoName">
            <div className="LogoIcon">BS</div>
            <div className="LogoText">The Book Shelf</div>
          </span>
        </div>
      </div>
    );
  }
}


export default Main;