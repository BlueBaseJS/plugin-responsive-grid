import { getScreenSizeFromWidth } from '../helpers';
import useDimensions from 'react-native-dimensions-hooks';

export function useScreenSize() {
	const { window } = useDimensions();
	const size = getScreenSizeFromWidth(window.width);
	return size;
}
