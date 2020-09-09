import { OrientationObserverProps } from '@bluebase/components';
import { renderChildrenWithProps } from '@bluebase/core';
import { useScreenOrientation } from '../../hooks';

export const OrientationObserver = (props: OrientationObserverProps) => {
	const orientation = useScreenOrientation();

	return renderChildrenWithProps(props.children, orientation === 'landscape');
};
