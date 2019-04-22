import React from 'react';
import { ResponsiveLayout }  from '../index';
import  { mount } from  "enzyme"
import { BlueBaseApp } from '@bluebase/core';
import Plugin from '../../../index';
import { waitForElement } from 'enzyme-async-helpers';
 import { Dimensions } from "react-native"

test('Responsive Grid with default prop', async () => {
	const mock=()=> null;
	const wrapper = mount(				
		<BlueBaseApp plugins={[Plugin]}>
	
			<ResponsiveLayout default={mock}/>
	
		</BlueBaseApp>
	  );
		
	await waitForElement(wrapper, ResponsiveLayout);
	
	expect(wrapper.props().children.props.default()).toBe(null)
});



	test('Responsive Grid with xs prop', async () => {
		
		const mock=()=> "sss";
		
		 Dimensions.get("window").width = 574;
			
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin]}>
	
				<ResponsiveLayout  xs={()=>"xs" as any} default={mock as any}/>
		
			</BlueBaseApp>
			);
		await waitForElement(wrapper, ResponsiveLayout);
		
		
		expect(wrapper.props().children.props.xs()).toEqual('xs')
	
		
	});




test('Responsive Grid with xsprop prop', async () => {
	const mock=()=> null

	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
	
			<ResponsiveLayout xsProps={{'margin':8}} default={mock}/>
	
		</BlueBaseApp>
	  );
		
	await waitForElement(wrapper, ResponsiveLayout);
	
	expect(wrapper.props().children.props.xsProps).toEqual({margin:8})
	
});


test('Responsive Grid with sm prop', async () => {
	const mock=()=> null

	Dimensions.get("window").width = 750;


	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
					<ResponsiveLayout sm={()=>"sm" as any}  default={mock}/>
			</BlueBaseApp>
		);
		
await waitForElement(wrapper, ResponsiveLayout);
expect(wrapper.props().children.props.sm()).toBe("sm")
});


test('Responsive Grid with smProps prop', async () => {
	const mock=()=> null
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
	
			<ResponsiveLayout smProps={{'margin':8}} default={mock}/>
	
		</BlueBaseApp>
	  );
		
	await waitForElement(wrapper, ResponsiveLayout);
	
	
	expect(wrapper.props().children.props.smProps).toEqual({'margin':8})
});

test('Responsive Grid with md prop', async () => {
	const mock=()=> null
	Dimensions.get("window").width = 990;

	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
		
	
			<ResponsiveLayout md={()=> "md" as any}  default={mock}/>
	
		</BlueBaseApp>
	  );
await waitForElement(wrapper, ResponsiveLayout);
expect(wrapper.props().children.props.md()).toEqual('md')
});
test('Responsive Grid with mdProps prop', async () => {
	const mock=()=> null
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
	
			<ResponsiveLayout mdProps={{'margin':8}} default={mock}/>
	
		</BlueBaseApp>
	  );
		
	await waitForElement(wrapper, ResponsiveLayout);
	
	expect(wrapper.props().children.props.mdProps).toEqual({'margin':8})
});
test('Responsive Grid with lg prop', async () => {
	const mock=()=> null
	Dimensions.get("window").width = 1100;

	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
		
	
			<ResponsiveLayout lg={()=> "lg" as any}  default={mock}/>
	
		</BlueBaseApp>
	  );
await waitForElement(wrapper, ResponsiveLayout);
expect(wrapper.props().children.props.lg()).toEqual('lg')
});
test('Responsive Grid with lgProps prop', async () => {
	const mock=()=> null
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
	
			<ResponsiveLayout lgProps={{'margin':8}} default={mock}/>
	
		</BlueBaseApp>
	  );
		
	await waitForElement(wrapper, ResponsiveLayout);
	
	expect(wrapper.props().children.props.lgProps).toEqual({'margin':8})
});
test('Responsive Grid with xl prop', async () => {
	const mock=()=> null
	Dimensions.get("window").width = 1300;

	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
		
	
			<ResponsiveLayout xl={()=> "xl" as any}  default={mock}/>
	
		</BlueBaseApp>
	  );
await waitForElement(wrapper, ResponsiveLayout);
expect(wrapper.props().children.props.xl()).toEqual('xl')
});
test('Responsive Grid with xlProps prop', async () => {
	const mock=()=> null
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
	
			<ResponsiveLayout xlProps={{'margin':8}} default={mock}/>
	
		</BlueBaseApp>
	  );
		
	await waitForElement(wrapper, ResponsiveLayout);

	expect(wrapper.props().children.props.xlProps).toEqual({'margin':8})
});

