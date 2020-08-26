import { BlueBaseApp } from '@bluebase/core';
import { Dimensions } from 'react-native';
// import Plugin from '../../../index';
import React from 'react';
import { ResponsiveLayout } from '../ResponsiveLayout';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

test('Responsive Grid with xs prop', async () => {
	const mock = () => 'xs';

	const wrapper = mount(
		<BlueBaseApp>
			<ResponsiveLayout xs={'sm'} default={mock as any} />
		</BlueBaseApp>
	);
	await waitForElement(wrapper, ResponsiveLayout);

	expect(wrapper.props().children.props.xs).toEqual('sm');
	wrapper.unmount();
});

test('Responsive Grid with xs prop', async () => {
	const mock = () => 'sss';
	const xs = () => 'xs';

	Dimensions.get('window').width = 574;

	const wrapper = mount(
		<BlueBaseApp>
			<ResponsiveLayout xs={xs as any} default={mock as any} />
		</BlueBaseApp>
	);
	await waitForElement(wrapper, ResponsiveLayout);

	expect(wrapper.props().children.props.xs()).toEqual('xs');
	wrapper.unmount();
});

test('Responsive Grid with xsprop prop', async () => {
	const mock = () => null;

	const wrapper = mount(
		<BlueBaseApp>
			<ResponsiveLayout xsProps={{ margin: 8 }} default={mock as any} />
		</BlueBaseApp>
	);

	await waitForElement(wrapper, ResponsiveLayout);

	expect(wrapper.props().children.props.xsProps).toEqual({ margin: 8 });
	wrapper.unmount();
});

test('Responsive Grid with sm prop', async () => {
	const mock = () => null;

	const wrapper = mount(
		<BlueBaseApp>
			<ResponsiveLayout sm={'sm'} default={mock as any} />
		</BlueBaseApp>
	);

	await waitForElement(wrapper, ResponsiveLayout);
	expect(wrapper.props().children.props.sm).toEqual('sm');
	wrapper.unmount();
});

test('Responsive Grid with sm prop', async () => {
	const mock = () => null;
	const sm = () => 'sm';
	Dimensions.get('window').width = 750;

	const wrapper = mount(
		<BlueBaseApp>
			<ResponsiveLayout sm={sm as any} default={mock as any} />
		</BlueBaseApp>
	);

	await waitForElement(wrapper, ResponsiveLayout);
	expect(wrapper.props().children.props.sm()).toBe('sm');
	wrapper.unmount();
});
test('Responsive Grid with smProps prop', async () => {
	const mock = () => null;
	const wrapper = mount(
		<BlueBaseApp>
			<ResponsiveLayout smProps={{ margin: 8 }} default={mock as any} />
		</BlueBaseApp>
	);

	await waitForElement(wrapper, ResponsiveLayout);

	expect(wrapper.props().children.props.smProps).toEqual({ margin: 8 });
	wrapper.unmount();
});

test('Responsive Grid with md prop', async () => {
	const mock = () => null;

	const wrapper = mount(
		<BlueBaseApp>
			<ResponsiveLayout md={'md'} default={mock as any} />
		</BlueBaseApp>
	);
	await waitForElement(wrapper, ResponsiveLayout);
	expect(wrapper.props().children.props.md).toEqual('md');
	wrapper.unmount();
});

test('Responsive Grid with md prop', async () => {
	const mock = () => null;
	const md = () => 'md';
	Dimensions.get('window').width = 990;

	const wrapper = mount(
		<BlueBaseApp>
			<ResponsiveLayout md={md as any} default={mock as any} />
		</BlueBaseApp>
	);
	await waitForElement(wrapper, ResponsiveLayout);
	expect(wrapper.props().children.props.md()).toEqual('md');
});

test('Responsive Grid with mdProps prop', async () => {
	const mock = () => null;
	const wrapper = mount(
		<BlueBaseApp>
			<ResponsiveLayout mdProps={{ margin: 8 }} default={mock as any} />
		</BlueBaseApp>
	);

	await waitForElement(wrapper, ResponsiveLayout);

	expect(wrapper.props().children.props.mdProps).toEqual({ margin: 8 });
	wrapper.unmount();
});

test('Responsive Grid with lg prop', async () => {
	const mock = () => null;

	const wrapper = mount(
		<BlueBaseApp>
			<ResponsiveLayout lg={'lg'} default={mock as any} />
		</BlueBaseApp>
	);
	await waitForElement(wrapper, ResponsiveLayout);
	expect(wrapper.props().children.props.lg).toEqual('lg');
	wrapper.unmount();
});

test('Responsive Grid with lg prop', async () => {
	const mock = () => null;
	const lg = () => 'lg';
	Dimensions.get('window').width = 1100;

	const wrapper = mount(
		<BlueBaseApp>
			<ResponsiveLayout lg={lg as any} default={mock as any} />
		</BlueBaseApp>
	);
	await waitForElement(wrapper, ResponsiveLayout);
	expect(wrapper.props().children.props.lg()).toEqual('lg');
});

test('Responsive Grid with lgProps prop', async () => {
	const mock = () => null;
	const wrapper = mount(
		<BlueBaseApp>
			<ResponsiveLayout lgProps={{ margin: 8 }} default={mock as any} />
		</BlueBaseApp>
	);

	await waitForElement(wrapper, ResponsiveLayout);

	expect(wrapper.props().children.props.lgProps).toEqual({ margin: 8 });
	wrapper.unmount();
});

test('Responsive Grid with xl prop', async () => {
	const mock = () => null;

	const wrapper = mount(
		<BlueBaseApp>
			<ResponsiveLayout xl={'xl'} default={mock as any} />
		</BlueBaseApp>
	);
	await waitForElement(wrapper, ResponsiveLayout);
	expect(wrapper.props().children.props.xl).toEqual('xl');
});

test('Responsive Grid with xl prop', async () => {
	const mock = () => null;
	const xl = () => 'xl';
	Dimensions.get('window').width = 1300;

	const wrapper = mount(
		<BlueBaseApp>
			<ResponsiveLayout xl={xl as any} default={mock as any} />
		</BlueBaseApp>
	);
	await waitForElement(wrapper, ResponsiveLayout);
	expect(wrapper.props().children.props.xl()).toEqual('xl');
	wrapper.unmount();
});

test('Responsive Grid with xlProps prop', async () => {
	const mock = () => null;
	const wrapper = mount(
		<BlueBaseApp>
			<ResponsiveLayout xlProps={{ margin: 8 }} default={mock as any} />
		</BlueBaseApp>
	);

	await waitForElement(wrapper, ResponsiveLayout);

	expect(wrapper.props().children.props.xlProps).toEqual({ margin: 8 });
	wrapper.unmount();
});
