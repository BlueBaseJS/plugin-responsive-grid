import { getScreenSizeFromWidth } from '../helpers';
import useDimensions from 'react-native-dimensions-hooks';

export const useScreenSize = () => {
	const { window } = useDimensions();
	const size = getScreenSizeFromWidth(window.width);
	return size;
};
