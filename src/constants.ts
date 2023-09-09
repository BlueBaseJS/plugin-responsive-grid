// tslint:disable: object-literal-sort-keys

import { DimensionValue } from 'react-native';

export type SCREEN_SIZE = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const BREAKPOINTS = {
	xs: 576,
	sm: 768,
	md: 992,
	lg: 1200,
};

export const MAX_CONTAINER_WIDTH: { [key: string]: DimensionValue } = {
	xs: '100%',
	sm: 540,
	md: 720,
	lg: 960,
	xl: 1140,
};
