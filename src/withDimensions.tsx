import React from 'react';

import { useBlueBase } from '@bluebase/core';
import { useScreenSize } from './hooks';

export const DimensionObserver = (props: any) => <React.Fragment {...props} />;

export const withDimensionProvider = (Component: React.ComponentType<any>) => (props: any) => {
	const BB = useBlueBase();

	const [screenSize] = useScreenSize();
	//const [shouldReset] = useConfig('plugin.responsive-grid.rerender-on-change');
	const [shouldReset] = BB.Configs.getValue('plugin.responsive-grid.rerender-on-change');

	return shouldReset ? (
		<DimensionObserver key={screenSize}>
			<Component {...props} />
		</DimensionObserver>
	) : (
		props.children
	);
};
