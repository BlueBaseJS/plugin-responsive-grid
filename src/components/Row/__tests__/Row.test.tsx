import React from 'react';
import { Row }  from '../index';
import 'mocha';
import  { mount } from  "enzyme"

import { BlueBaseApp } from '@bluebase/core';
import Plugin from '../../../index';
import { waitForElement } from 'enzyme-async-helpers';
import { Platform } from 'react-native';
test('Plugin should be correctly mounted', async () => {
	const styles = {
		
			smHidden:true 
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
		smHidden:false 
	}


	Platform.OS = 'web'

	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
	
			<Row  nowrap = {true} styles={styles as any}/>
	
		</BlueBaseApp>
	  );
		console.log('wrapper',wrapper.props().children.props);
	await waitForElement(wrapper, Row);
	
	expect(wrapper.props().children.props.nowrap).toEqual(true)
});

test('Row with rowSize prop', async () => {
	const styles = {
		root: {
			flexDirection: 'row',
			xsHidden:false
		}
	}
	Platform.OS = 'android'
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
	
			<Row rowSize = {12} styles={styles as any}/>
	
		</BlueBaseApp>
	  );
		console.log('wrapper',wrapper.props().children.props);
	await waitForElement(wrapper, Row);
	
	expect(wrapper.props().children.props.rowSize).toEqual(12)
});

test('Row with justifyContent prop', async () => {
	const styles = {
		root: {
			flexDirection: 'row',
			xsHidden:false
		}
	}
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
	
			<Row justifyContent = {'flex-start'} styles={styles as any}/>
	
		</BlueBaseApp>
	  );
		console.log('wrapper',wrapper.props().children.props);
	await waitForElement(wrapper, Row);
	
	expect(wrapper.props().children.props.justifyContent).toEqual('flex-start')
});

test('Row with alignItems prop', async () => {
	const styles = {
		root: {
			flexDirection: 'row',
			xsHidden:false
		}
	}
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
	
			<Row alignItems = {'flex-start'} styles={styles as any}/>
	
		</BlueBaseApp>
	  );
		console.log('wrapper',wrapper.props().children.props);
	await waitForElement(wrapper, Row);
	
	expect(wrapper.props().children.props.alignItems).toEqual('flex-start')
});

