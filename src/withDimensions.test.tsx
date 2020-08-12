import { BlueBaseApp } from '@bluebase/core';

import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

import { withDimensionProvider, DimensionObserver } from './withDimensions';
import { Text } from 'react-native';
import Plugin from './index';
const Helloworld: any = () => {
	return <Text>Hello</Text>;
};

const ConditionalComponent = withDimensionProvider(Helloworld);

test('Plugin should be correctly registered', async () => {
	const wrapper = mount(
		<BlueBaseApp configs={{ 'plugin.responsive-grid.rerender-on-change': true }} plugins={[Plugin]}>
			<ConditionalComponent />
		</BlueBaseApp>
	);

	await waitForElement(wrapper, Helloworld);

	expect(wrapper.find(DimensionObserver).exists()).toBe(true);
	// expect(wrapper).toMatchSnapshot();

	wrapper.unmount();
});
