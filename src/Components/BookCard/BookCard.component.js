import React, {Component} from 'react';
import './style.css';
import redHeart from '../../Icon/heart-red.svg';
import blackHeart from '../../Icon/heart-black.svg';
// const axios = require('axios');

class Card extends Component{
  state = {
    liked: this.props.liked,
  };

  toggleLike = () => {
    return this.setState({
      liked: !(this.state.liked),
    })
  }

  flipLike = () => {
    if(this.state.liked === true) {

      return redHeart;
    }
    else {
      return blackHeart;
    }
  }

  render(){
    console.log('BOOKCARD',this.props.bookData);
      return(
          <div className="cardContainer">
            <section className="book-image">
              <img src={require('../../Image/cover_image.jpeg')} alt="art"/>
            </section>
            <section>
              <p className="book-name">{this.props.bookData.Name}</p>
            </section>
            <section className="book-reaction">
              <div className="rating-like">
                <div className="rating">
                  <span>{this.props.bookData.rating}</span>
                </div>
                <div className="likes">
                  <img src = {this.flipLike()} alt="clap" onClick = {this.toggleLike}/>
                </div>
              </div>
            </section>
          </div>
      );

  }
}

export default Card;