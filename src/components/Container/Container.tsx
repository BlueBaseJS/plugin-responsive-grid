import { View, ViewProps } from '@bluebase/components';
import React from 'react';

import { MAX_CONTAINER_WIDTH } from '../../constants';
import { useScreenSize } from '../../useScreenSize';

export interface ContainerProps extends ViewProps {}

export const Container = ({ style, ...rest }: ContainerProps) => {

	const screenSize = useScreenSize();

	return (
		<View
			{...rest}
			style={[
				{
					width: MAX_CONTAINER_WIDTH[screenSize],
					alignSelf: 'center',
					flexGrow: 1
				},
				style
			]}
		/>
	);
};

Container.displayName = 'Container';
