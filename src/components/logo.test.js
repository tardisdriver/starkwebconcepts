import React from 'react';
import { shallow } from 'enzyme';

import Logo from './logo';

describe('<Logo />', () => {
    it('renders the logo w/o crashing', () => {
        shallow(<Logo />);
    });
});




