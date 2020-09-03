import { SCREEN_SIZE, View, ViewProps } from '@bluebase/components';

import { MAX_CONTAINER_WIDTH } from '../../constants';
import React from 'react';
import { useLayout } from '@react-native-community/hooks';
import { useScreenSize } from '../../hooks';

export interface ContainerStyles {}

export interface ContainerProps extends ViewProps {
	dimension: 'layout' | 'screen';
	maxSize: SCREEN_SIZE;
	styles: any;
}

export const Container = ({
	dimension,
	maxSize,
	style,
	styles,
	...rest
}: ContainerProps & { styles: ContainerStyles }) => {
	const screenSize = useScreenSize();

	const { width, onLayout } = useLayout();

	let containerWidth = dimension === 'layout' ? width : MAX_CONTAINER_WIDTH[screenSize];

	const maxWidth = MAX_CONTAINER_WIDTH[maxSize];

	if (maxWidth === '100%' || maxWidth < containerWidth) {
		containerWidth = maxWidth;
	}

	return (
		<View onLayout={onLayout}>
			<View {...rest} style={[{ width: containerWidth, alignSelf: 'center' }, style]} />
		</View>
	);
};
