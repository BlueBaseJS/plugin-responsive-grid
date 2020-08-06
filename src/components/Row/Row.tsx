import { Platform, StyleProp, ViewStyle } from 'react-native';
import React, { createContext } from 'react';
import { View, ViewProps, SCREEN_SIZE } from '@bluebase/components';
import { useLayout } from '@react-native-community/hooks'
import { getScreenSizeFromWidth } from '../../helpers';

import { Theme } from '@bluebase/core';
import { isHidden } from '../../helpers';
import { useScreenSize } from '../../hooks';




interface RowInterface {
	rowsize: number;
    rowwidth: SCREEN_SIZE;
  
}
const initialDimension: RowInterface = {
    rowsize:12,
	rowwidth:"lg"
}


export const RowContext: React.Context<RowInterface> = createContext(initialDimension);

export const RowConsumer = RowContext.Consumer;

export interface RowStyles {
	root: StyleProp<ViewStyle>;
}

export interface RowProps extends ViewProps {
	alignItems?: ViewStyle['alignItems'];
	justifyContent?: ViewStyle['justifyContent'];
	nowrap?: boolean;
	rowSize: number;
	layoutCalculation:String,
}

export const Row = (props: RowProps & { styles: RowStyles }) => {
	const screenSize = useScreenSize();
	const { alignItems, justifyContent, nowrap, rowSize, style, styles, ...rest } = props;

	const rowsize=rowSize?rowSize:12;
	const { width, onLayout}  = useLayout()

	const layoutWidth =props.layoutCalculation=="screen"?screenSize:getScreenSizeFromWidth(width);
	

	if (isHidden(screenSize, props)) {
		return null;
	}

	

	const rowDimension={rowsize:rowsize,rowwidth:layoutWidth}

	
	const stylesheet: Array<StyleProp<ViewStyle>> = [
		style,
		styles.root,
		{
			alignItems,
			flexWrap: nowrap ? 'nowrap' : 'wrap',
			justifyContent,
		},
		Platform.OS === 'web' ? { overflow: 'visible' } : {},
	];

	return (
		<View onLayout={onLayout}>
		<RowContext.Provider value={rowDimension}>
			<View {...rest} style={stylesheet} />
		</RowContext.Provider>
		</View>
	);
};

Row.defaultProps = {
	rowDimension:initialDimension
};

Row.defaultStyles = (theme: Theme) => ({
	root: {
		flexDirection: 'row',
		marginHorizontal: -1 * theme.spacing.unit,
		paddingVertical: theme.spacing.unit,
	},
});
