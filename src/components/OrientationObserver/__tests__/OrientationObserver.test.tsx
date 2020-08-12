import 'mocha';
import { BlueBase , BlueBaseApp } from '@bluebase/core';

import { OrientationObserver } from '../index';
import Plugin from '../../../index';
import React from 'react';

import { mount } from "enzyme";



import { waitForElement } from 'enzyme-async-helpers';


test('Plugin should be correctly registered', () => {
	const BB = new BlueBase();
	 BB.Plugins.register(Plugin);

	expect(BB.Plugins.has('plugin-responsive-grid')).toBeTruthy();
});




test('Plugin should be correctly mounted',() => {
	// const BB = new BlueBase();
	const Component = (props: any) => {
		return (
			<div>
				{props.isLandscape}
			</div>
		);
	};

	const Comp = Component as any;
	const wrapper = mount(
		<BlueBaseApp >

			<OrientationObserver>
				{() => {
					return (
						<Comp isLandscape={true}   />

					);
				}}
			</OrientationObserver>

		</BlueBaseApp>
	);
	 waitForElement(wrapper, OrientationObserver);
	expect(wrapper.find('OrientationObserver')).toBeDefined();

	expect(wrapper.find('OrientationObserver')).toEqual({});
	expect(wrapper.find('OrientationObserver')).toEqual({});


});