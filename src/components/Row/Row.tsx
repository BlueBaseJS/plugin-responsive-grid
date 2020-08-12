import { Platform, StyleProp, ViewStyle } from 'react-native';
import React, { createContext } from 'react';
import { SCREEN_SIZE, View, ViewProps } from '@bluebase/components';
import { Theme, useStyles } from '@bluebase/core';
import { getScreenSizeFromWidth , isHidden } from '../../helpers';
import { useLayout } from '@react-native-community/hooks';
import { useScreenSize } from '../../hooks';




interface RowInterface {
	rowsize: number;
	rowwidth: SCREEN_SIZE;

}
const initialDimension: RowInterface = {
	rowsize:12,
	rowwidth:'lg'
};


export const RowContext: React.Context<RowInterface> = createContext(initialDimension);

export const RowConsumer = RowContext.Consumer;

export interface RowStyles {
	root: ViewStyle;
}

export interface RowProps extends ViewProps {
	alignItems?: ViewStyle['alignItems'];
	justifyContent?: ViewStyle['justifyContent'];
	nowrap?: boolean;
	rowSize?: number;
	Dimension:'layout'|'screen',


}

const defaultStyles = (theme: Theme): RowStyles => ({
	root: {
		flexDirection: 'row',
		marginHorizontal: -1 * theme.spacing.unit,
		paddingVertical: theme.spacing.unit,
	},
});

export const Row = (props: RowProps & { styles: RowStyles }) => {
	const { alignItems, justifyContent, nowrap, rowSize, style, ...rest } = props;

	const styles = useStyles('Row', props, defaultStyles);
	const screenSize = useScreenSize();

	const rowsize=rowSize===undefined?12:rowSize;

	const { width, onLayout }  = useLayout();

	const layoutWidth =props.Dimension==='screen'?screenSize:getScreenSizeFromWidth(width);


	if (isHidden(screenSize,props)) {
		return null;
	}



	const rowDimension={ rowsize:rowsize,rowwidth:layoutWidth };


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

