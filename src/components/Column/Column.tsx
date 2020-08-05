import React, { useContext } from 'react';
import { SCREEN_SIZE, View, ViewProps } from '@bluebase/components';
import { StyleProp, ViewStyle } from 'react-native';
import { Theme, useStyles } from '@bluebase/core';

import { RowContext } from '../Row';
import { useScreenSize } from '../../hooks';

export interface ColumnStyles {
	root: StyleProp<ViewStyle>;
}

export interface ColumnProps extends ViewProps {
	/**
	 * The width of the column on extra small screen.
	 */
	size?: number;

	/**
	 * The number of columns to offset on extra small screen.
	 */
	offset?: number;

	/**
	 * The width of the column on extra small screen.
	 */
	xs?: number;

	/**
	 * The number of columns to offset on extra small screen.
	 */
	xsOffset?: number;

	/**
	 * Hide this column on extra small screen.
	 */
	xsHidden?: boolean;

	/**
	 * The width of the column on small screen.
	 */
	sm?: number;

	/**
	 * The number of columns to offset on small screen.
	 */
	smOffset?: number;

	/**
	 * Hide this column on small screen.
	 */
	smHidden?: boolean;

	/**
	 * The width of the column on medium screen.
	 */
	md?: number;

	/**
	 * The number of columns to offset on medium screen.
	 */
	mdOffset?: number;

	/**
	 * Hide this column on medium screen.
	 */
	mdHidden?: boolean;

	/**
	 * The width of the column on large screen.
	 */
	lg?: number;

	/**
	 * The number of columns to offset on large screen.
	 */
	lgOffset?: number;

	/**
	 * Hide this column on large screen.
	 */
	lgHidden?: boolean;

	/**
	 * The width of the column on extra large screen.
	 */
	xl?: number;

	/**
	 * The number of columns to offset on extra large screen.
	 */
	xlOffset?: number;

	/**
	 * Hide this column on extra large screen.
	 */
	xlHidden?: boolean;

	// styles?: Partial<ColumnStyles>;
}

const defaultStyles = (theme: Theme): ColumnStyles => ({
	root: {
		flexDirection: 'column',
		paddingHorizontal: theme.spacing.unit,
	},
});

export const Column = (props: ColumnProps & { styles: ColumnStyles }) => {
	const screenSize = useScreenSize();
	const rowSize = useContext(RowContext);

	const { style, ...rest } = props;
	const styles = useStyles('Column', props, defaultStyles);

	const width = getColumnWidth(screenSize, rowSize, rest);
	const marginLeft = getColumnOffset(screenSize, rowSize, rest);

	const stylesheet: Array<StyleProp<ViewStyle>> = [
		styles.root,
		{
			marginLeft,
			width,
		},
	];

	return (
		<View style={stylesheet}>
			<View {...rest} style={style} />
		</View>
	);
};

const toPercent = (num: number) => num * 100 + '%';

const getColumnWidth = (screenSize: SCREEN_SIZE, rowSize: number, props: ColumnProps) => {
	switch (screenSize) {
		case 'sm':
			if (props.sm) {
				return toPercent(props.sm / rowSize);
			}
			break;

		case 'xs':
			if (props.xs) {
				return toPercent(props.xs / rowSize);
			}
			break;

		case 'xl':
			if (props.xl) {
				return toPercent(props.xl / rowSize);
			}
			break;

		case 'md':
			if (props.md) {
				return toPercent(props.md / rowSize);
			}
			break;

		case 'lg':
			if (props.lg) {
				return toPercent(props.lg / rowSize);
			}
	}

	return toPercent(getSize(rowSize, props) / rowSize);
};

const getColumnOffset = (screenSize: SCREEN_SIZE, rowSize: number, props: ColumnProps) => {
	switch (screenSize) {
		case 'sm':
			if (props.smOffset) {
				return toPercent(props.smOffset / rowSize);
			}
			break;

		case 'xs':
			if (props.xsOffset) {
				return toPercent(props.xsOffset / rowSize);
			}
			break;

		case 'xl':
			if (props.xlOffset) {
				return toPercent(props.xlOffset / rowSize);
			}
			break;

		case 'md':
			if (props.mdOffset) {
				return toPercent(props.mdOffset / rowSize);
			}
			break;

		case 'lg':
			if (props.lgOffset) {
				return toPercent(props.lgOffset / rowSize);
			}
	}
	return props.offset ? toPercent(props.offset / rowSize) : 0;
};

const getSize = (rowSize: number, props: ColumnProps) => {
	if (props.size) {
		return props.size;
	}
	if (props.xs) {
		return props.xs;
	}
	if (props.sm) {
		return props.sm;
	}
	if (props.md) {
		return props.md;
	}
	if (props.lg) {
		return props.lg;
	}
	if (props.xl) {
		return props.xl;
	}

	return rowSize;
};
