import { Dimensions, ScaledSize } from 'react-native';
import React, { createContext } from 'react';
import { SCREEN_SIZE } from '../../constants';
import { getScreenSizeFromWidth } from '../../helpers';

const initialSize = getScreenSizeFromWidth(Dimensions.get('window').width);

export const ScreenSizeContext: React.Context<SCREEN_SIZE> = createContext(initialSize);

// FIXME: For some react add this component as is to the plugin messes up build
// export const ScreenSizeConsumer = ScreenSizeContext.Consumer;
export const ScreenSizeConsumer = (props: { children: (size: SCREEN_SIZE) => React.ReactNode }) =>
<ScreenSizeContext.Consumer {...props} />;


export interface ScreenSizeProviderState {
	readonly size: SCREEN_SIZE
}

export class ScreenSizeProvider extends React.Component<{}, ScreenSizeProviderState> {

	readonly state = {
		size: initialSize
	};

	constructor(props: {}) {
		super(props);

    // This binding is necessary to make `this` work in the callback
		this.dimensionHandler = this.dimensionHandler.bind(this);
	}

	componentDidMount() {
		Dimensions.addEventListener('change', this.dimensionHandler);
	}

	componentWillUnmount() {
		Dimensions.removeEventListener('change', this.dimensionHandler);
	}

	dimensionHandler({ window }: { window: ScaledSize; screen: ScaledSize }) {

		// debugger;
		const size = getScreenSizeFromWidth(window.width);

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