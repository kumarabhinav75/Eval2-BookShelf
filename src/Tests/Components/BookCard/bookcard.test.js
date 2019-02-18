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

  it('Should toggle inverse like', ()=> {
    const book_data = {
      Name: "Abhinav",
      rating: "4.5"
    }
    const wrapper = shallow(<BookCard bookData = {book_data} liked={true} />);
    wrapper.instance().toggleLike();
    expect(wrapper.instance().state.liked).toEqual(false);
  });
})