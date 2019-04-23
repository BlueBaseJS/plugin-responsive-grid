import React from 'react';
import { ResponsiveLayout }  from '../index';
import  { mount } from  "enzyme"
import { BlueBaseApp } from '@bluebase/core';
 import { Dimensions, Text } from 'react-native';
import Plugin from '../../../index';
import { waitForElement } from 'enzyme-async-helpers';

test('Responsive Grid with default prop', async () => {

	const wrapper = mount(				
		<BlueBaseApp plugins={[Plugin]}>
	
			<ResponsiveLayout default={null as any}/>
	
		</BlueBaseApp>
	  );
		
	await waitForElement(wrapper, Text);
	console.log('default',wrapper.props())
	expect(wrapper.find('Text').last().text()).toBe('A "default" component is required in ResponsiveLayout.')
});

test('Responsive Grid with default prop', async () => {

	const wrapper = mount(				
		<BlueBaseApp plugins={[Plugin]}>
	
			<ResponsiveLayout default={"null" as any}/>
	
		</BlueBaseApp>
	  );
		
	await waitForElement(wrapper, Text);
	console.log('default',wrapper.props())
	expect(wrapper.find('Text').last().text()).toBe('Could not resolve any of the following components: [string].')
});




	test('Responsive Grid with xs prop', async () => {
		
		const mock=()=> "xs";

		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin]}>
	
				<ResponsiveLayout  xs= {"sm"} default={mock as any}/>
		
			</BlueBaseApp>
			);
		await waitForElement(wrapper, ResponsiveLayout);
		console.log('wrapper in xs', wrapper.props())
		
		expect(wrapper.props().children.props.xs).toEqual("sm")

	
		
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



	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
					<ResponsiveLayout sm={"sm"}  default={mock}/>
			</BlueBaseApp>
		);
		
await waitForElement(wrapper, ResponsiveLayout);
expect(wrapper.props().children.props.sm).toEqual('sm')
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

	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
		
	
			<ResponsiveLayout md={"md"}  default={mock}/>
	
		</BlueBaseApp>
	  );
await waitForElement(wrapper, ResponsiveLayout);
expect(wrapper.props().children.props.md).toEqual('md')
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
test('Responsive Grid with md prop', async () => {
	const mock=()=> null
	Dimensions.get("window").width = 990;

	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
		
	
			<ResponsiveLayout md={"md" }  default={mock}/>
	
		</BlueBaseApp>
	  );
await waitForElement(wrapper, Text);
expect(wrapper.find('Text').last().text()).toBe('Could not resolve any of the following components: [string].')
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

	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
		
	
			<ResponsiveLayout lg={"lg"}  default={mock}/>
	
		</BlueBaseApp>
	  );
await waitForElement(wrapper, ResponsiveLayout);
expect(wrapper.props().children.props.lg).toEqual('lg')
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
test('Responsive Grid with lg prop', async () => {
	const mock=()=> null
	Dimensions.get("window").width = 1100;

	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
		
	
			<ResponsiveLayout lg={"12"}  default={mock}/>
	
		</BlueBaseApp>
	  );
await waitForElement(wrapper, Text);
expect(wrapper.find('Text').last().text()).toBe('Could not resolve any of the following components: [string].')
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

	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
		
	
			<ResponsiveLayout xl={"xl"}  default={mock}/>
	
		</BlueBaseApp>
	  );
await waitForElement(wrapper, ResponsiveLayout);
expect(wrapper.props().children.props.xl).toEqual('xl')
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
test('Responsive Grid with xl prop', async () => {
	const mock=()=> null

	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
		
	
			<ResponsiveLayout xl={"12"}  default={mock}/>
	
		</BlueBaseApp>
	  );
await waitForElement(wrapper, Text);
console.log('Wrapper in xl', wrapper)
expect(wrapper.find('Text').last().text()).toBe('Could not resolve any of the following components: [string].')
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

