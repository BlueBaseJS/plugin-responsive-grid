import {
	BlueBase,
	BootOptions,
	createPlugin
} from '@bluebase/core';
import {
	Column,
	Container,
	ResponsiveLayout,
	Row,
	ScreenSizeConsumer,
} from './components';
import { withScreenSizeProvider } from './withScreenSizeProvider';

export default createPlugin({
	description: 'Provides Grid components to create Responsive Layouts',
	key: 'plugin-responsive-grid',
	name: 'BlueBase Responsive Grid',
	version: '1.0.0',

	components: {
		Column,
		Container,
		ResponsiveLayout,
		Row,
		ScreenSizeConsumer,
	},

	filters: {
		'bluebase.boot.end': (bootOptions: BootOptions, _ctx: any, BB: BlueBase) => {
			BB.Components.addHocs('BlueBaseContent', withScreenSizeProvider);
			return bootOptions;
		},
	},
});
