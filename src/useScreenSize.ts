import { useWindowDimensions } from 'react-native';

import { getScreenSizeFromWidth } from './helpers';

export function useScreenSize() {
	const { width } = useWindowDimensions();
	const size = getScreenSizeFromWidth(width);
	return size;
}
