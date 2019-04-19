import React from 'react';
import { ResponsiveLayout }  from '../index';
import  { mount } from  "enzyme"
import { BlueBaseApp } from '@bluebase/core';
import Plugin from '../../../index';
import { waitForElement } from 'enzyme-async-helpers';


test('Responsive Grid with default prop', async () => {
	const mock=()=> null
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
	
			<ResponsiveLayout style={{}} default={mock}/>
	
		</BlueBaseApp>
	  );
		console.log('wrapper',wrapper.props().children.props);
	await waitForElement(wrapper, ResponsiveLayout);
	
	expect(wrapper.props().children.props.style).toEqual({})
});

test('Responsive Grid with xs prop', async () => {
	const mock=()=> null
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
	
			<ResponsiveLayout xs={'12'} default={mock}/>
	
		</BlueBaseApp>
	  );
		console.log('wrapper',wrapper.props().children.props);
	await waitForElement(wrapper, ResponsiveLayout);
	
	expect(wrapper.props().children.props.xs).toEqual('12')
});
test('Responsive Grid with xsprop prop', async () => {
	const mock=()=> null
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
	
			<ResponsiveLayout xsProps={{'margin':8}} default={mock}/>
	
		</BlueBaseApp>
	  );
		console.log('wrapper',wrapper.props().children.props);
	await waitForElement(wrapper, ResponsiveLayout);
	
	expect(wrapper.props().children.props.xsProps).toEqual({margin:8})
});
test('Responsive Grid with sm prop', async () => {
	const mock=()=> null
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
		
	
			<ResponsiveLayout sm={()=>null}  default={mock}/>
	
		</BlueBaseApp>
	  );
await waitForElement(wrapper, ResponsiveLayout);
expect(wrapper.props().children.props.sm()).toBe(null)
});
test('Responsive Grid with smProps prop', async () => {
	const mock=()=> null
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
	
			<ResponsiveLayout smProps={{'margin':8}} default={mock}/>
	
		</BlueBaseApp>
	  );
		console.log('wrapper',wrapper.props().children.props);
	await waitForElement(wrapper, ResponsiveLayout);
	
	
	expect(wrapper.props().children.props.smProps).toEqual({'margin':8})
});
test('Responsive Grid with md prop', async () => {
	const mock=()=> null
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
		
	
			<ResponsiveLayout md={'12'}  default={mock}/>
	
		</BlueBaseApp>
	  );
await waitForElement(wrapper, ResponsiveLayout);
expect(wrapper.props().children.props.md).toEqual('12')
});
test('Responsive Grid with mdProps prop', async () => {
	const mock=()=> null
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
	
			<ResponsiveLayout mdProps={{'margin':8}} default={mock}/>
	
		</BlueBaseApp>
	  );
		console.log('wrapper',wrapper.props().children.props);
	await waitForElement(wrapper, ResponsiveLayout);
	
	expect(wrapper.props().children.props.mdProps).toEqual({'margin':8})
});
test('Responsive Grid with lg prop', async () => {
	const mock=()=> null
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
		
	
			<ResponsiveLayout lg={'12'}  default={mock}/>
	
		</BlueBaseApp>
	  );
await waitForElement(wrapper, ResponsiveLayout);
expect(wrapper.props().children.props.lg).toEqual('12')
});
test('Responsive Grid with lgProps prop', async () => {
	const mock=()=> null
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
	
			<ResponsiveLayout lgProps={{'margin':8}} default={mock}/>
	
		</BlueBaseApp>
	  );
		console.log('wrapper',wrapper.props().children.props);
	await waitForElement(wrapper, ResponsiveLayout);
	
	expect(wrapper.props().children.props.lgProps).toEqual({'margin':8})
});
test('Responsive Grid with xl prop', async () => {
	const mock=()=> null
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
		
	
			<ResponsiveLayout xl={'12'}  default={mock}/>
	
		</BlueBaseApp>
	  );
await waitForElement(wrapper, ResponsiveLayout);
expect(wrapper.props().children.props.xl).toEqual('12')
});
test('Responsive Grid with xlProps prop', async () => {
	const mock=()=> null
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
	
			<ResponsiveLayout xlProps={{'margin':8}} default={mock}/>
	
		</BlueBaseApp>
	  );
		console.log('wrapper',wrapper.props().children.props);
	await waitForElement(wrapper, ResponsiveLayout);
	
	expect(wrapper.props().children.props.xlProps).toEqual({'margin':8})
});
