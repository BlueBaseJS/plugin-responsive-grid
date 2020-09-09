import 'mocha';

import { BlueBase, BlueBaseApp } from '@bluebase/core';
import { getColumnOffset, getColumnWidth, getSize } from '../Column';

import { Column } from '../index';
import { Dimensions } from 'react-native';
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

test('Plugin should be correctly registered', async () => {
	const BB = new BlueBase();
	await BB.Plugins.register(Plugin);

	expect(BB.Plugins.has('plugin-responsive-grid')).toBeTruthy();
});

describe('getSize tests group', () => {
	test('getSize function with size', () => {
		const res = getSize(12, { size: 12 });
		expect(res).toEqual(12);
	});

	test('getSize function with xs', () => {
		const res = getSize(12, { xs: 12 });
		expect(res).toEqual(12);
	});

	test('getSize function with sm', () => {
		const res = getSize(12, { sm: 12 });
		expect(res).toEqual(12);
	});
	test('getSize function with md', () => {
		const res = getSize(12, { md: 12 });
		expect(res).toEqual(12);
	});
	test('getSize function with lg', () => {
		const res = getSize(12, { lg: 12 });
		expect(res).toEqual(12);
	});
	test('getSize function with xl', () => {
		const res = getSize(12, { xl: 12 });
		expect(res).toEqual(12);
	});
});

describe(' getColumnWidth props tests Group', () => {
	test('getColumnWidth function with xs', () => {
		const res = getColumnWidth('xs', 12, { xs: undefined });
		expect(res).toEqual('100%');
	});

	test('getColumnWidth function with sm', () => {
		const res = getColumnWidth('sm', 12, { sm: undefined });
		expect(res).toEqual('100%');
	});

	test('getColumnWidth function with xl', () => {
		const res = getColumnWidth('xl', 12, { xl: undefined });
		expect(res).toEqual('100%');
	});
	test('getColumnWidth function with md', () => {
		const res = getColumnWidth('md', 12, { md: undefined });
		expect(res).toEqual('100%');
	});
	test('getColumnWidth function with lg', () => {
		const res = getColumnWidth('lg', 12, { lg: undefined });
		expect(res).toEqual('100%');
	});
});

describe(' getColumnWidth tests Group', () => {
	test('getColumnWidth function with xs', () => {
		const res = getColumnWidth('xs', 12, { xs: 12 });
		expect(res).toEqual('100%');
	});

	test('getColumnWidth function with sm', () => {
		const res = getColumnWidth('sm', 12, { sm: 12 });
		expect(res).toEqual('100%');
	});

	test('getColumnWidth function with xl', () => {
		const res = getColumnWidth('xl', 12, { xl: 12 });
		expect(res).toEqual('100%');
	});
	test('getColumnWidth function with md', () => {
		const res = getColumnWidth('md', 12, { md: 12 });
		expect(res).toEqual('100%');
	});
	test('getColumnWidth function with lg', () => {
		const res = getColumnWidth('lg', 12, { lg: 12 });
		expect(res).toEqual('100%');
	});
});

describe(' getColumnOffset tests Group', () => {
	test('getColumnOffset function with xs', () => {
		const res = getColumnOffset('xs', 12, { xsOffset: 12 });
		expect(res).toEqual('100%');
	});

	test('getColumnOffset function with sm', () => {
		const res = getColumnOffset('sm', 12, { smOffset: 12 });
		expect(res).toEqual('100%');
	});

	test('getColumnOffset function with xl', () => {
		const res = getColumnOffset('xl', 12, { xlOffset: 12 });
		expect(res).toEqual('100%');
	});
	test('getColumnOffset function with md', () => {
		const res = getColumnOffset('md', 12, { mdOffset: 12 });
		expect(res).toEqual('100%');
	});
	test('getColumnOffset function with lg', () => {
		const res = getColumnOffset('lg', 12, { lgOffset: 12 });
		expect(res).toEqual('100%');
	});
});

describe(' getColumnOffset null props tests Group', () => {
	test('getColumnOffset function with xs', () => {
		const res = getColumnOffset('xs', 12, { xsOffset: undefined });
		expect(res).toEqual(0);
	});

	test('getColumnOffset function with sm', () => {
		const res = getColumnOffset('sm', 12, { smOffset: undefined });
		expect(res).toEqual(0);
	});

	test('getColumnOffset function with xl', () => {
		const res = getColumnOffset('xl', 12, { xlOffset: undefined });
		expect(res).toEqual(0);
	});
	test('getColumnOffset function with md', () => {
		const res = getColumnOffset('md', 12, { mdOffset: undefined });
		expect(res).toEqual(0);
	});
	test('getColumnOffset function with lg', () => {
		const res = getColumnOffset('lg', 12, { lgOffset: undefined });
		expect(res).toEqual(0);
	});
});

test('Plugin should be correctly mounted', async () => {
	const styles = {
		root: {
			flexDirection: 'row',
		},
	};
	const wrapper = mount(
		<BlueBaseApp>
			<Column styles={styles as any} />
		</BlueBaseApp>
	);

	await waitForElement(wrapper, Column);
	expect(wrapper.find('Column')).toBeDefined();
});

test('Column with size prop', async () => {
	const styles = {
		root: {
			flexDirection: 'row',
		},
	};
	const wrapper = mount(
		<BlueBaseApp>
			<Column size={12} styles={styles as any} />
		</BlueBaseApp>
	);

	await waitForElement(wrapper, Column);

	expect(wrapper.props().children.props.size).toEqual(12);
});

test('Column with offset prop', async () => {
	const styles = {
		root: {
			flexDirection: 'row',
		},
	};
	const wrapper = mount(
		<BlueBaseApp>
			<Column offset={16} styles={styles as any} />
		</BlueBaseApp>
	);

	await waitForElement(wrapper, Column);

	expect(wrapper.props().children.props.offset).toEqual(16);
});

test('Column with xs prop', async () => {
	const styles = {
		root: {
			flexDirection: 'row',
		},
	};
	Dimensions.get('window').width = 574;
	const wrapper = mount(
		<BlueBaseApp>
			<Column xs={12} styles={styles as any} />
		</BlueBaseApp>
	);

	await waitForElement(wrapper, Column);

	expect(wrapper.props().children.props.xs).toEqual(12);
});

test('Column with xsOffset prop', async () => {
	const styles = {
		root: {
			flexDirection: 'row',
		},
	};
	const wrapper = mount(
		<BlueBaseApp>
			<Column xsOffset={12} styles={styles as any} />
		</BlueBaseApp>
	);

	await waitForElement(wrapper, Column);

	expect(wrapper.props().children.props.xsOffset).toEqual(12);
});

test('Column with xsHidden prop', async () => {
	const styles = {
		root: {
			flexDirection: 'row',
		},
	};
	const wrapper = mount(
		<BlueBaseApp>
			<Column xsHidden={true} styles={styles as any} />
		</BlueBaseApp>
	);

	await waitForElement(wrapper, Column);

	expect(wrapper.props().children.props.xsHidden).toEqual(true);
});

test('Column with sm prop', async () => {
	const styles = {
		root: {
			flexDirection: 'row',
		},
	};
	Dimensions.get('window').width = 750;

	const wrapper = mount(
		<BlueBaseApp>
			<Column sm={12} styles={styles as any} />
		</BlueBaseApp>
	);
	await waitForElement(wrapper, Column);

	expect(wrapper.props().children.props.sm).toEqual(12);
});

test('Column with smOffset prop', async () => {
	const styles = {
		root: {
			flexDirection: 'row',
		},
	};
	const wrapper = mount(
		<BlueBaseApp>
			<Column smOffset={12} styles={styles as any} />
		</BlueBaseApp>
	);
	await waitForElement(wrapper, Column);

	expect(wrapper.props().children.props.smOffset).toEqual(12);
});

test('Column with smHidden prop', async () => {
	const styles = {
		root: {
			flexDirection: 'row',
		},
	};
	const wrapper = mount(
		<BlueBaseApp>
			<Column smHidden={true} styles={styles as any} />
		</BlueBaseApp>
	);
	await waitForElement(wrapper, Column);

	expect(wrapper.props().children.props.smHidden).toEqual(true);
});

test('Column with md prop', async () => {
	const styles = {
		root: {
			flexDirection: 'row',
		},
	};
	Dimensions.get('window').width = 990;

	const wrapper = mount(
		<BlueBaseApp>
			<Column md={12} styles={styles as any} />
		</BlueBaseApp>
	);
	await waitForElement(wrapper, Column);

	expect(wrapper.props().children.props.md).toEqual(12);
});
test('Column with mdOffset prop', async () => {
	const styles = {
		root: {
			flexDirection: 'row',
		},
	};
	const wrapper = mount(
		<BlueBaseApp>
			<Column mdOffset={12} styles={styles as any} />
		</BlueBaseApp>
	);
	await waitForElement(wrapper, Column);

	expect(wrapper.props().children.props.mdOffset).toEqual(12);
});
test('Column with mdHidden prop', async () => {
	const styles = {
		root: {
			flexDirection: 'row',
		},
	};
	const wrapper = mount(
		<BlueBaseApp>
			<Column mdHidden={true} styles={styles as any} />
		</BlueBaseApp>
	);
	await waitForElement(wrapper, Column);

	expect(wrapper.props().children.props.mdHidden).toEqual(true);
});

test('Column with lg prop', async () => {
	const styles = {
		root: {
			flexDirection: 'row',
		},
	};
	Dimensions.get('window').width = 1100;

	const wrapper = mount(
		<BlueBaseApp>
			<Column lg={12} styles={styles as any} />
		</BlueBaseApp>
	);
	await waitForElement(wrapper, Column);

	expect(wrapper.props().children.props.lg).toEqual(12);
});
test('Column with lgOffset prop', async () => {
	const styles = {
		root: {
			flexDirection: 'row',
		},
	};
	const wrapper = mount(
		<BlueBaseApp>
			<Column lgOffset={12} styles={styles as any} />
		</BlueBaseApp>
	);
	await waitForElement(wrapper, Column);

	expect(wrapper.props().children.props.lgOffset).toEqual(12);
});
test('Column with lgHidden prop', async () => {
	const styles = {
		root: {
			flexDirection: 'row',
		},
	};
	const wrapper = mount(
		<BlueBaseApp>
			<Column lgHidden={true} styles={styles as any} />
		</BlueBaseApp>
	);
	await waitForElement(wrapper, Column);

	expect(wrapper.props().children.props.lgHidden).toEqual(true);
});

test('Column with xl prop', async () => {
	const styles = {
		root: {
			flexDirection: 'row',
		},
	};
	Dimensions.get('window').width = 1300;

	const wrapper = mount(
		<BlueBaseApp>
			<Column xl={12} styles={styles as any} />
		</BlueBaseApp>
	);
	await waitForElement(wrapper, Column);

	expect(wrapper.props().children.props.xl).toEqual(12);
});
test('Column with xlOffset prop', async () => {
	const styles = {
		root: {
			flexDirection: 'row',
		},
	};
	const wrapper = mount(
		<BlueBaseApp>
			<Column xlOffset={12} styles={styles as any} />
		</BlueBaseApp>
	);
	await waitForElement(wrapper, Column);

	expect(wrapper.props().children.props.xlOffset).toEqual(12);
});
test('Column with xlHidden prop', async () => {
	const styles = {
		root: {
			flexDirection: 'row',
		},
	};
	const wrapper = mount(
		<BlueBaseApp>
			<Column xlHidden={true} styles={styles as any} />
		</BlueBaseApp>
	);
	await waitForElement(wrapper, Column);

	expect(wrapper.props().children.props.xlHidden).toEqual(true);
});
