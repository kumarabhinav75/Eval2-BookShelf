import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import BookCard from '../../../Components/BookCard/BookCard.component';

describe('BookCard', () => {
  it ('Should match the snapshot', () => {
    const book_data = {
      Name: "Abhinav",
      rating: "4.5"
    }
    const tree = renderer.create(<BookCard bookData = {book_data} />);
    expect(tree).toMatchSnapshot();
  })
})