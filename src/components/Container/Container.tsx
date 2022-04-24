import { View, ViewProps } from '@bluebase/components';
import { MAX_CONTAINER_WIDTH } from '../../constants';
import React from 'react';
import { ScreenSizeConsumer } from '../ScreenSize';

export interface ContainerProps extends ViewProps {}

export const Container = ({ style, ...rest }: ContainerProps) => (
	<ScreenSizeConsumer>
	{(size) => (<View {...rest} style={[{ width: MAX_CONTAINER_WIDTH[size], alignSelf: 'center' }, style]} />)}
	</ScreenSizeConsumer>
);

Container.displayName = 'Container';
