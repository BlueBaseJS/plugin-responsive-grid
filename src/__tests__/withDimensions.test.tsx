import { DimensionObserver, withDimensionProvider } from '../withDimensions';

import { BlueBaseApp } from '@bluebase/core';
import Plugin from '../index';
import React from 'react';
import { Text } from 'react-native';
import { mount } from 'enzyme';
import { renderHook } from '@testing-library/react-hooks';
import { waitForElement } from 'enzyme-async-helpers';

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

	await waitForElement(wrapper, ConditionalComponent);

	expect(wrapper.find(DimensionObserver).exists()).toBe(true);

	wrapper.unmount();
});

test('with Dimension', () => {
	const { result } = renderHook(() => withDimensionProvider(ConditionalComponent));

	const wrapper = mount(
		<BlueBaseApp
			configs={{ 'plugin.responsive-grid.rerender-on-change': false }}
			plugins={[Plugin]}
		>
			<result.current />
		</BlueBaseApp>
	);
	expect(wrapper.find('DimensionObserver').exists()).toBe(false);
});
