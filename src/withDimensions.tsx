import React from 'react';
import { useConfig } from '@bluebase/core';
import { useScreenSize } from './hooks';

export const DimensionObserver = (props: any) => <React.Fragment {...props} />;

export const withDimensionProvider = (Component: React.ComponentType<any>) => (props: any) => {
	const [shouldReset] = useConfig('plugin.responsive-grid.rerender-on-change');
	const screenSize = useScreenSize();

	return shouldReset ? (
		<DimensionObserver key={screenSize}>
			<Component {...props} />
		</DimensionObserver>
	) : (
		props.children
	);
};
