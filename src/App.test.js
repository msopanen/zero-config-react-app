/*Copyright 2017 mikko.p.sopanen@gmail.com*/
import React from 'react';
import { mount } from "enzyme";

import App from './App';

it('renders without crashing', () => {
	const wrapper = mount(
		<App />
	);
	expect(wrapper).toMatchSnapshot();
});
