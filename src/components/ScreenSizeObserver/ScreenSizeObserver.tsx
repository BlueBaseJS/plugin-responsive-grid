import { ScreenSizeObserverProps } from '@bluebase/components';
import { renderChildrenWithProps } from '@bluebase/core';
import { useScreenSize } from '../../hooks';

export const ScreenSizeObserver = (props: ScreenSizeObserverProps) => {
	const size = useScreenSize();
	return renderChildrenWithProps(props.children, size);
};
