import React from 'react';
import { ScreenSizeProvider } from './components';

export const withScreenSizeProvider = (Component: React.ComponentType<any>) => (props: any) => (
	<ScreenSizeProvider>
		<Component {...props} />
	</ScreenSizeProvider>
);