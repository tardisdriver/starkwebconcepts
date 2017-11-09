import React from 'react';
import { shallow } from 'enzyme';

import Page from './page';

describe('<Page />', () => {
    it('renders Page w/o crashing', () => {
        shallow(<Page />);
    });
});