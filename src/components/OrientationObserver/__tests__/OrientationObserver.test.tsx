import React from 'react';
import { BlueBase , BlueBaseApp } from '@bluebase/core';
import { OrientationObserver } from '../index';
import 'mocha';
import { mount } from "enzyme";


import Plugin from '../../../index';
import { waitForElement } from 'enzyme-async-helpers';


test('Plugin should be correctly registered', async () => {
	const BB = new BlueBase();
	await BB.Plugins.register(Plugin);

	expect(BB.Plugins.has('plugin-responsive-grid')).toBeTruthy();
});




test('Plugin should be correctly mounted', async () => {
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
		<BlueBaseApp plugins={[Plugin]}>

			<OrientationObserver>
				{() => {
					return (
						<Comp isLandscape={true} />

					);
				}}
			</OrientationObserver>

		</BlueBaseApp>
	);
	await waitForElement(wrapper, OrientationObserver);
	expect(wrapper.find('OrientationObserver')).toBeDefined();
	wrapper.unmount();

	expect(wrapper.find('OrientationObserver')).toEqual({});

});