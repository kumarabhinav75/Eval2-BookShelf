import React from 'react';
import './style.css';
import BookCard from '../BookCard/BookCard.component';

const AuthorShelf = (props) => {
  // console.log('author',props.books);
  // if(props.books){
  //   props.books.map(book => {
  //     console.log(book.Name);
  //   })
  //  } 
if(props.books){
  return(
    props.books.map((book) =>
    <div className="BooksContainer">
      <BookCard bookData = {book} />
    </div>
    )
  )
  }
else return ' ';
}

export default AuthorShelf;