import { getScreenSizeFromWidth, isHidden } from '../index';
import 'mocha';


describe(' getScreenSizeFromWidth tests Group', () => {
	test('getScreenSizeFromWidth function with width 575', () => {



		const res = getScreenSizeFromWidth(575);

		expect(res).toEqual('xs');
	});
	test('getScreenSizeFromWidth function with width 767', () => {



		const res = getScreenSizeFromWidth(767);

		expect(res).toEqual('sm');
	});
	test('getScreenSizeFromWidth function with width 990', () => {

		const res = getScreenSizeFromWidth(990);

		expect(res).toEqual('md');
	});
	test('getScreenSizeFromWidth function with width 1100', () => {



		const res = getScreenSizeFromWidth(1100);

		expect(res).toEqual('lg');
	});
	test('getScreenSizeFromWidth function with width 1300', () => {



		const res = getScreenSizeFromWidth(1300);

		expect(res).toEqual('xl');
	});
});


describe(' isHidden tests Group', () => {
	test('isHidden function with width 575', () => {



		const res = isHidden('sm', { xs: 12 });

		expect(res).toEqual(false);
	});
	test('isHidden function with width 575', () => {



		const res = isHidden('md', { xs: 12 });

		expect(res).toEqual(false);
	});
	test('isHidden function with width 575', () => {



		const res = isHidden('lg', { xs: 12 });

		expect(res).toEqual(false);
	});
	test('isHidden function with width 575', () => {



		const res = isHidden('xl', { xs: 12 });

		expect(res).toEqual(false);
	});
	test('isHidden function with width 575', () => {



		const res = isHidden('xs', { xs: 12 });

		expect(res).toEqual(false);
	});
	test('isHidden function with width 575', () => {



		const res = isHidden('' as any, { xs: 12 });

		expect(res).toEqual(false);
	});


	test('isHidden function with width 575', () => {



		const res = isHidden('xl', { xlHidden: true });

		expect(res).toEqual(true);
	});


});