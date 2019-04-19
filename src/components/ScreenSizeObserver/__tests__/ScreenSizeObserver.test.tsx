import React from 'react';
import { BlueBase } from '@bluebase/core';
import { ScreenSizeObserver } from '../index';
import 'mocha';
import { mount } from "enzyme"

import { BlueBaseApp } from '@bluebase/core';
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
		)
	}

	const Comp = Component as any;
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>

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

describe('ScreenSizeObserver functions unit test',()=>{
	test('handleOrientationChange',()=>{
		
		let object:any;
		const obj = new ScreenSizeObserver(object);
		obj.handleOrientationChange({window:{fontScale:12,height:12,scale:15,width:100}})
	})
})
