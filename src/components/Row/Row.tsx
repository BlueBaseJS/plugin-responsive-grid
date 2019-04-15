import { Platform, StyleProp, ViewStyle } from 'react-native';
import React, { createContext } from 'react';
import { View, ViewProps } from '@bluebase/components';
import { ScreenSizeConsumer } from '../ScreenSize';
import { Theme } from '@bluebase/core';
import { isHidden } from '../../helpers';

const initialSize = 12;

export const RowContext: React.Context<number> = createContext(initialSize);

export const RowConsumer = RowContext.Consumer;

export interface RowStyles {
	root: StyleProp<ViewStyle>;
}

export interface RowProps extends ViewProps {
	alignItems?: ViewStyle['alignItems'],
	justifyContent?: ViewStyle['justifyContent'],
	nowrap?: boolean,
	rowSize?: number,
}

export const Row = (props: RowProps & { styles: RowStyles }) => (
	<ScreenSizeConsumer>
		{(screenSize) => {

			if (isHidden(screenSize, props)) {
				return null;
			}

			const { alignItems, justifyContent, nowrap, rowSize, style, styles, ...rest } = props;

			const stylesheet: Array<StyleProp<ViewStyle>> = [
				style,
				styles.root,
				{
					alignItems,
					flexWrap: nowrap ? 'nowrap' : 'wrap',
					justifyContent,
				},
				Platform.OS === 'web' ? { overflow: 'visible' } : {}
			];

			return (
				<RowContext.Provider value={rowSize as number}>
					<View {...rest} style={stylesheet} />
				</RowContext.Provider>
			);
		}}
	</ScreenSizeConsumer>
);

Row.defaultProps = {
	rowSize: initialSize
};

Row.defaultStyles = (theme: Theme) => ({
	root: {
		flexDirection: 'row',
		marginHorizontal: -1 * theme.spacing.unit,
		paddingVertical: theme.spacing.unit,
	}
});
