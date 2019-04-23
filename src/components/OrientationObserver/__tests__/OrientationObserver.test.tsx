import React from 'react';
import { BlueBase } from '@bluebase/core';
import { OrientationObserver } from '../index';
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
	// const BB = new BlueBase();
	const Component = (props: any) => {
		return (
			<div>
				{props.isLandscape}
			</div>
		)
	}

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

describe('OrientationObserver functions unit test',()=>{
	test('handleOrientationChange',()=>{
		
		let object:any;
		const obj = new OrientationObserver(object);
		obj.handleOrientationChange({window:{fontScale:12,height:12,scale:15,width:100}})
	})
})
