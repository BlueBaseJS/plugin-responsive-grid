import { Dimensions, ScaledSize } from 'react-native';
import { RenderPropChildren, renderChildrenWithProps } from '@bluebase/core';
import React from 'react';
import { SCREEN_SIZE } from '../../constants';
import { getScreenSizeFromWidth } from '../../helpers';

export interface ScreenSizeObserverProps {
	children: RenderPropChildren<SCREEN_SIZE>
}

export interface ScreenSizeObserverState {
	readonly size: SCREEN_SIZE;
}

export class ScreenSizeObserver extends React.Component<ScreenSizeObserverProps, ScreenSizeObserverState> {
	constructor(props: ScreenSizeObserverProps) {
		super(props);

		const size = getScreenSizeFromWidth(Dimensions.get('window').width);
		
		this.state = { size };
	}

	componentDidMount() {
		Dimensions.addEventListener('change', this.handleOrientationChange);
	}

	componentWillUnmount() {
		Dimensions.removeEventListener('change', this.handleOrientationChange);
	}

	handleOrientationChange = ({ window }: { window: ScaledSize }) => {
		const size = getScreenSizeFromWidth(window.width);


		if (size !== this.state.size) {
			this.setState({ size });
		}
	}

	render() {
		return renderChildrenWithProps(this.props.children, this.state.size);
	}
}