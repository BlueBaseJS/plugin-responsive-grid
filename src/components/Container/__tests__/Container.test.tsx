import { BlueBaseApp } from '@bluebase/core';
import { Container } from '../index';
import React from 'react';
import { mount } from 'enzyme';
import { renderHook } from '@testing-library/react-hooks';
import { useScreenSize } from '../../../hooks/useScreenSize';
// import Plugin from '../../../index';
import { waitForElement } from 'enzyme-async-helpers';
// import { View } from '@bluebase/core/dist/getComponent';

test('Plugin should be correctly mounted', async () => {
	const styles = {
		root: {
			margin: 8,
			paddingHorizontalXS: 8,
		},
	};

	const wrapper = mount(
		<BlueBaseApp>
			<Container MaxSize="md" Dimension="screen" styles={styles as any} />
		</BlueBaseApp>
	);

	await waitForElement(wrapper, Container);
	expect(wrapper.find('Container')).toBeDefined();
});

test('Plugin should be correctly mounted with dimension prop', async () => {
	const styles = {
		root: {
			margin: 8,
			paddingHorizontalXS: 8,
		},
	};

	const wrapper = mount(
		<BlueBaseApp>
			<Container MaxSize="xs" Dimension="layout" styles={styles as any} />
		</BlueBaseApp>
	);

	await waitForElement(wrapper, Container);

	expect(wrapper.find('Container')).toBeDefined();
});

test('Use Screen Orientation', () => {
	const { result } = renderHook(() => useScreenSize());

	expect(result.current).toEqual('sm');
});
