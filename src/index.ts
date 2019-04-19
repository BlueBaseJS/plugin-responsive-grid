import { Column, Container, OrientationObserver, ResponsiveLayout, Row, ScreenSizeObserver } from './components';
import { createPlugin } from '@bluebase/core';

export default createPlugin({
	description: 'Provides Grid components to create Responsive Layouts',
	key: 'plugin-responsive-grid',
	name: 'BlueBase Responsive Grid',
	version: '1.0.0',

	components: {
		Column,
		Container,
		OrientationObserver,
		ResponsiveLayout,
		Row,
		ScreenSizeObserver,
	},
});
