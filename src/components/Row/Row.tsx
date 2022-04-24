import React, { createContext } from 'react';
import { StyleProp, ViewStyle, Platform } from 'react-native';
import { View, ViewProps } from '@bluebase/components';
import { ScreenSizeConsumer } from '../ScreenSize';
import { isHidden } from '../../helpers';

const initialSize = 12;

export const RowContext: React.Context<number> = createContext(initialSize);

export const RowConsumer = RowContext.Consumer;

export interface RowProps extends ViewProps {
	alignItems?: ViewStyle['alignItems'],
	justifyContent?: ViewStyle['justifyContent'],
	nowrap?: boolean,
	rowSize?: number,
}

export const Row = (props: RowProps) => (
	<ScreenSizeConsumer>
		{(screenSize) => {

			if (isHidden(screenSize, props)) {
				return null;
			}

			const { alignItems, justifyContent, nowrap, rowSize, style, ...rest } = props;

			const styles: Array<StyleProp<ViewStyle>> = [
				{
					alignItems,
					flexDirection: 'row',
					flexWrap: nowrap ? 'nowrap' : 'wrap',
					justifyContent,
				},
				Platform.OS === 'web' ? { overflow: 'visible' } : {},
				style,
			];

			return (
				<RowContext.Provider value={rowSize as number}>
					<View {...rest} style={styles} />
				</RowContext.Provider>
			);
		}}
	</ScreenSizeConsumer>
);

Row.defaultProps = {
	rowSize: initialSize
};

Row.displayName = 'Row';
