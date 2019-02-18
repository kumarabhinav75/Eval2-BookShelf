import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import BookShelf from '../../../Components/BookShelf/BookShelf.component';

describe('BookShelf', () => {
  it ('Should match the snapshot', () => {
    const tree = renderer.create(<BookShelf />);
    expect(tree).toMatchSnapshot();
  });

  it ('should call componentDidMount once', () => {
    // console.log('TEST' , wrapper.instance().componentDidMount);
    const fakeComponentDidMount = jest.spyOn(BookShelf.prototype, 'componentDidMount');
    const wrapper = mount(<BookShelf />);
    expect(fakeComponentDidMount).toHaveBeenCalledTimes(1);
  });

})