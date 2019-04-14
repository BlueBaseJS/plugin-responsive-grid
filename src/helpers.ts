import { BREAKPOINTS, SCREEN_SIZE } from './constants';

export const getScreenSizeFromWidth = (width: number): SCREEN_SIZE => {

	if (width < BREAKPOINTS.xs) {
		return 'xs';
	} else if (width < BREAKPOINTS.sm) {
		return 'sm';
	} else if (width < BREAKPOINTS.md) {
		return 'md';
	} else if (width < BREAKPOINTS.lg) {
		return 'lg';
	}

	return 'xl';
};