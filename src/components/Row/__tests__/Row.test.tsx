import React from 'react';
import { Row }  from '../index';
import 'mocha';
import  { mount } from  "enzyme"

import { BlueBaseApp } from '@bluebase/core';
import Plugin from '../../../index';
import { waitForElement } from 'enzyme-async-helpers';

test('Plugin should be correctly mounted', async () => {
	const styles = {
		root: {
			flexDirection: 'row'
		}
	}
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
	
	         <Row styles={styles as any} />
	
		</BlueBaseApp>
	  );
	
		 await waitForElement(wrapper, Row);
		expect(wrapper.find('Row')).toBeDefined();
});

test('Row with nowrap prop', async () => {
	const styles = {
		root: {
			flexDirection: 'row'
		}
	}
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
	
			<Row nowrap = {true} styles={styles as any}/>
	
		</BlueBaseApp>
	  );
		console.log('wrapper',wrapper.props().children.props);
	await waitForElement(wrapper, Row);
	
	expect(wrapper.props().children.props.nowrap).toEqual(true)
});
test('Row with rowSize prop', async () => {
	const styles = {
		root: {
			flexDirection: 'row'
		}
	}
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
	
			<Row rowSize = {12} styles={styles as any}/>
	
		</BlueBaseApp>
	  );
		console.log('wrapper',wrapper.props().children.props);
	await waitForElement(wrapper, Row);
	
	expect(wrapper.props().children.props.rowSize).toEqual(12)
});

