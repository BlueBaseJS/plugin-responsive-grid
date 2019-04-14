import { SCREEN_SIZE } from '../constants';

export interface HiddenOptions {
	xsHidden?: boolean,
	smHidden?: boolean,
	mdHidden?: boolean,
	lgHidden?: boolean,
	xlHidden?: boolean,
}

export const isHidden = (screenSize: SCREEN_SIZE, props: HiddenOptions & { [key: string]: any }) => {
	switch (screenSize) {
		case 'sm':
			return !!props.smHidden;
		case 'md':
			return !!props.mdHidden;
		case 'lg':
			return !!props.lgHidden;
		case 'xl':
			return !!props.xlHidden;
		case 'xs':
			return !!props.xsHidden;
		default:
			return false;
	}
};
