import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import AuthorShelf from '../../../Components/AuthorShelf/AuthorShelf.component';

describe('AuthorShelf ', () => {
  it ('Should match the snapshot', () => {
    const tree = renderer.create(<AuthorShelf />);
    expect(tree).toMatchSnapshot();
  });
  it('Should get the props provided', () => {
    const bookData = [{
      Name: 'BookName',
      rating: '4.56'
    }];
    const wrapper = shallow(<AuthorShelf books={bookData} />);
    expect(wrapper.props().children.props.bookData.Name).toEqual(bookData[0].Name);
    expect(wrapper.props().children.props.bookData.rating).toEqual(bookData[0].rating);
  })
})