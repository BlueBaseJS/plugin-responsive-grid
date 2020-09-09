import { SCREEN_SIZE, View, ViewProps } from '@bluebase/components';

import { MAX_CONTAINER_WIDTH } from '../../constants';
import React from 'react';
import { useLayout } from '@react-native-community/hooks';
import { useScreenSize } from '../../hooks';

export interface ContainerStylesProps {}

export interface ContainerProps extends ViewProps {
	dimension?: 'layout' | 'screen';
	maxSize?: SCREEN_SIZE;
	styles: ContainerStylesProps;
}

export const Container = ({
	dimension,
	maxSize,
	style,
	styles,
	...rest
}: ContainerProps & { styles: ContainerStylesProps }) => {
	const screenSize = useScreenSize();

	const { width, onLayout } = useLayout();

	let containerWidth = dimension === 'layout' ? width : MAX_CONTAINER_WIDTH[screenSize];

	if(maxSize){
		const maxWidth = MAX_CONTAINER_WIDTH[maxSize];
		if (maxWidth === '100%' || maxWidth < containerWidth) {
			containerWidth = maxWidth;
		}
	}




	return (
		<View onLayout={onLayout}>
			<View {...rest} style={[{ width: containerWidth, alignSelf: 'center' }, style]} />
		</View>
	);
};
