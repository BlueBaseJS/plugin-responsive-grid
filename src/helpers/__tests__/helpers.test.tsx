import { getScreenSizeFromWidth, isHidden } from '../index';
import 'mocha';


describe(' getScreenSizeFromWidth tests Group', () => {
	test('getScreenSizeFromWidth function with width 575', () => {



		const res = getScreenSizeFromWidth(575)
		console.log('response xs', res)
		expect(res).toEqual('xs');
	});
	test('getScreenSizeFromWidth function with width 767', () => {



		const res = getScreenSizeFromWidth(767)
		console.log('response sm', res)
		expect(res).toEqual('sm');
	});
	test('getScreenSizeFromWidth function with width 990', () => {

		const res = getScreenSizeFromWidth(990)
		console.log('response md', res)
		expect(res).toEqual('md');
	});
	test('getScreenSizeFromWidth function with width 1100', () => {



		const res = getScreenSizeFromWidth(1100)
		console.log('response xs', res)
		expect(res).toEqual('lg');
	});
	test('getScreenSizeFromWidth function with width 1300', () => {



		const res = getScreenSizeFromWidth(1300)
		console.log('response xs', res)
		expect(res).toEqual('xl');
	});
});


describe(' isHidden tests Group', () => {
	test('isHidden function with width 575', () => {



		const res = isHidden('sm', { xs: 12 })
		console.log('response sm', res)
		expect(res).toEqual(false);
	});
	test('isHidden function with width 575', () => {



		const res = isHidden('md', { xs: 12 })
		console.log('response md', res)
		expect(res).toEqual(false);
	});
	test('isHidden function with width 575', () => {



		const res = isHidden('lg', { xs: 12 })
		console.log('response lg', res)
		expect(res).toEqual(false);
	});
	test('isHidden function with width 575', () => {



		const res = isHidden('xl', { xs: 12 })
		console.log('response xl', res)
		expect(res).toEqual(false);
	});
	test('isHidden function with width 575', () => {



		const res = isHidden('xs', { xs: 12 })
		console.log('response xs', res)
		expect(res).toEqual(false);
	});
	test('isHidden function with width 575', () => {



		const res = isHidden('', { xs: 12 })
		console.log('response empty', res)
		expect(res).toEqual(false);
	});


});

