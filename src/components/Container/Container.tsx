import { View, ViewProps } from '@bluebase/components';
import React from 'react';

import { useLayout } from '@react-native-community/hooks';


export interface ContainerStyles {}

export interface ContainerProps extends ViewProps {}

export const Container = ({
	style,
	styles,
	...rest
}: ContainerProps & { styles: ContainerStyles }) => {

	const { width, onLayout }  = useLayout();


	return(

		<View onLayout={onLayout}>
			<View {...rest} style={[{ width: width, alignSelf: 'center' }, style]}/>
		</View>
	);
};


