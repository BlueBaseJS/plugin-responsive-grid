import React from 'react';
import { Container }  from '../index';
import  { mount } from  "enzyme";
import { BlueBaseApp } from '@bluebase/core';
//import Plugin from '../../../index';
import { waitForElement } from 'enzyme-async-helpers';
// import { View } from '@bluebase/core/dist/getComponent';


test('Plugin should be correctly mounted', async () => {
	const styles = {
		root:{
			margin:8,
			paddingHorizontalXS:8
		}
	};

	const wrapper = mount(
		<BlueBaseApp >

	         <Container MaxSize='md' Dimension="layout" styles={styles as any}  />

		</BlueBaseApp>
	  );

		 await waitForElement(wrapper, Container);
	expect(wrapper.find('Container')).toBeDefined();
});


test('Plugin should be correctly mounted with dimension prop', async () => {
	const styles = {
		root:{
			margin:8,
			paddingHorizontalXS:8,
		},

	};

	const wrapper = mount(
		<BlueBaseApp >

	         <Container MaxSize='xs' Dimension="layout" styles={styles as any}  />

		</BlueBaseApp>
	  );

		 await waitForElement(wrapper, Container);

	expect(wrapper.find('Container')).toBeDefined();
});










