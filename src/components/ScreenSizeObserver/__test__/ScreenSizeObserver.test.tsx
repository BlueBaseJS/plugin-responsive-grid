import React from 'react';
import { BlueBase , BlueBaseApp } from '@bluebase/core';
import { ScreenSizeObserver } from '../index';
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
	const Component = (props: any) => {
		return (
			<div>
				{props.xs}
			</div>
		);
	};

	const Comp = Component as any;
	const wrapper = mount(
		<BlueBaseApp >

			<ScreenSizeObserver>
				{() => {
					return (
						<Comp xs={12} />

					);
				}}
			</ScreenSizeObserver>

		</BlueBaseApp>
	);
	await waitForElement(wrapper, ScreenSizeObserver);
	expect(wrapper.find('ScreenSizeObserver')).toBeDefined();
	wrapper.unmount();

	expect(wrapper.find('ScreenSizeObserver')).toEqual({});







});
