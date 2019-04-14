import { Dimensions, ScaledSize } from 'react-native';
import React, { createContext } from 'react';
import { SCREEN_SIZE } from '../../constants';
import { getScreenSizeFromWidth } from '../../helpers';

const initialSize = getScreenSizeFromWidth(Dimensions.get('screen').width);

export const ScreenSizeContext: React.Context<SCREEN_SIZE> = createContext(initialSize);

export const ScreenSizeConsumer = ScreenSizeContext.Consumer;


export interface ScreenSizeProviderState {
	readonly size: SCREEN_SIZE
}

export class ScreenSizeProvider extends React.Component<{}, ScreenSizeProviderState> {

	readonly state = {
		size: initialSize
	};

	componentDidMount() {
		Dimensions.addEventListener('change', this.dimensionHandler);
	}

	componentWillUnmount() {
		Dimensions.removeEventListener('change', this.dimensionHandler);
	}

	dimensionHandler({ screen }: { window: ScaledSize; screen: ScaledSize }) {

		const size = getScreenSizeFromWidth(screen.width);

		if (size !== this.state.size) {
			this.setState({ size });
		}
	}

	render() {
		return (
			<ScreenSizeContext.Provider value={this.state.size}>
				{this.props.children}
			</ScreenSizeContext.Provider>
		);
	}
}