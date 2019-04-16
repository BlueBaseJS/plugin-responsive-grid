import { StyleProp, ViewStyle } from 'react-native';
import { View, ViewProps } from '@bluebase/components';
import { MAX_CONTAINER_WIDTH } from '../../constants';
import React from 'react';
import { ScreenSizeObserver } from '../ScreenSizeObserver';
import { Theme } from '@bluebase/core';

export interface ContainerStyles {
	paddingHorizontalXS: StyleProp<ViewStyle>;
}

export interface ContainerProps extends ViewProps {}

export const Container = ({ style, styles, ...rest }: ContainerProps & { styles: ContainerStyles }) => (
	<ScreenSizeObserver>
	{(size) => (
		<View
			{...rest}
			style={[
				{ width: MAX_CONTAINER_WIDTH[size], alignSelf: 'center' },
				size === 'xs' && styles.paddingHorizontalXS,
				style,
			]}
		/>
	)}
	</ScreenSizeObserver>
);

Container.defaultStyles = (theme: Theme) => ({
	paddingHorizontalXS: {
		paddingHorizontal: theme.spacing.unit * 2
	}
});