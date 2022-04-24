import { createPlugin } from '@bluebase/core';

import { Column, Container, ResponsiveLayout, Row } from './components';

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
	},
});
