import { BlueBaseApp } from '@bluebase/core';
import { Platform } from 'react-native';
import Plugin from '../../../index';
import React from 'react';
import { Row }  from '../index';
import  { mount } from  "enzyme";



import { waitForElement } from 'enzyme-async-helpers';


test('Plugin should be correctly mounted', async () => {
	const styles = {

		smHidden:true
	};
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>

	         <Row layoutCalculation="layout" rowSize={12}  styles={styles as any} />

		</BlueBaseApp>
	  );

		 await waitForElement(wrapper, Row);
	expect(wrapper.find('Row')).toBeDefined();
});



test('Plugin should be correctly mounted', async () => {
	const styles = {

		smHidden:true
	};
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>

	         <Row layoutCalculation="screen" rowSize={12}  styles={styles as any} />

		</BlueBaseApp>
	  );

		 await waitForElement(wrapper, Row);
	expect(wrapper.find('Row')).toBeDefined();
});



test('Row with nowrap prop', async () => {
	const styles = {
		smHidden:false
	};


	Platform.OS = 'web';

	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>

			<Row layoutCalculation="layout" rowSize={12}  nowrap={true} styles={styles as any}/>

		</BlueBaseApp>
	  );
	await waitForElement(wrapper, Row);

	expect(wrapper.props().children.props.nowrap).toEqual(true);
});

test('Row with rowSize prop', async () => {
	const styles = {
		root: {
			flexDirection: 'row',
			xsHidden:false
		}
	};
	Platform.OS = 'android';
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>

			<Row layoutCalculation="layout"  rowSize={12} styles={styles as any}/>

		</BlueBaseApp>
	  );
	await waitForElement(wrapper, Row);

	expect(wrapper.props().children.props.rowSize).toEqual(12);
});


test('Row with undefine rowSize prop', async () => {
	const styles = {
		root: {
			flexDirection: 'row',
			xsHidden:false
		}
	};
	Platform.OS = 'android';
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>

			<Row layoutCalculation="layout"   styles={styles as any}/>

		</BlueBaseApp>
	  );
	await waitForElement(wrapper, Row);

	expect(wrapper.props().children.props.rowSize).toEqual(undefined);
});





test('Row with justifyContent prop', async () => {
	const styles = {
		root: {
			flexDirection: 'row',
			xsHidden:false
		}
	};
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>

			<Row layoutCalculation="layout" rowSize={12} justifyContent={'flex-start'} styles={styles as any}/>

		</BlueBaseApp>
	  );
	await waitForElement(wrapper, Row);

	expect(wrapper.props().children.props.justifyContent).toEqual('flex-start');
});

test('Row with alignItems prop', async () => {
	const styles = {
		root: {
			flexDirection: 'row',
			xsHidden:false
		}
	};
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>

			<Row  layoutCalculation="layout" rowSize={12} alignItems={'flex-start'} styles={styles as any}/>

		</BlueBaseApp>
	  );
	await waitForElement(wrapper, Row);

	expect(wrapper.props().children.props.alignItems).toEqual('flex-start');
});