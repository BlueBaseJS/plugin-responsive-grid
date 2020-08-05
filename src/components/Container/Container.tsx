import { View, ViewProps } from '@bluebase/components';

import { MAX_CONTAINER_WIDTH } from '../../constants';
import React from 'react';
import { Theme } from '@bluebase/core';
import { useScreenSize } from '../../hooks';

export interface ContainerStyles {}

export interface ContainerProps extends ViewProps {}

export const Container = ({
	style,
	styles,
	...rest
}: ContainerProps & { styles: ContainerStyles }) => {
	const size = useScreenSize();

	return (
		<View {...rest} style={[{ width: MAX_CONTAINER_WIDTH[size], alignSelf: 'center' }, style]} />
	);
};

Container.defaultStyles = (_theme: Theme) => ({});
