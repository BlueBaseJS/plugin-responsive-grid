import React from 'react';
import { Container }  from '../index';
import 'mocha';
import  { mount } from  "enzyme"

import { BlueBaseApp } from '@bluebase/core';
import Plugin from '../../../index';
import { waitForElement } from 'enzyme-async-helpers';


test('Plugin should be correctly mounted', async () => {
	const styles = {
		root:{
			margin:8,
			paddingHorizontalXS:8
		}
	}

	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
	
	         <Container styles ={ styles as any }  />
	 
		</BlueBaseApp>
	  );
	
		 await waitForElement(wrapper, Container);
		expect(wrapper.find('Container')).toBeDefined();
});

