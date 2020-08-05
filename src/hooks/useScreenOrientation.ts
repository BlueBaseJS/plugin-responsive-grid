import useDimensions from 'react-native-dimensions-hooks';

export type ScreenOrientation = 'portrait' | 'landscape';

export const isOrientationLandscape = ({ width, height }: { width: number; height: number }) =>
	width > height;

export function useScreenOrientation(): ScreenOrientation {
	const { window } = useDimensions();
	const isLandscape = isOrientationLandscape(window);
	return isLandscape ? 'landscape' : 'portrait';
}
