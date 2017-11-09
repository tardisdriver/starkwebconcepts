import React from 'react';
import { shallow } from 'enzyme';

import MainBox from './main-box';

describe('<MainBox />', () => {
    it('should render the portfolio box w/o crashing', () => {
        shallow(<MainBox />);
    });

    it('renders the appropriate text', () => {
        const text = 'TESTING';
        const wrapper = shallow(<MainBox text={text} />);
        expect(wrapper.text()).toEqual(text);
    });
});