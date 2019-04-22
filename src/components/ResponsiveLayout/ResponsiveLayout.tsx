import React from 'react';
import { SCREEN_SIZE } from '../../constants';
import { ScreenSizeObserver } from '../ScreenSizeObserver';
import { getComponent } from '@bluebase/core';

export interface ResponsiveLayoutProps {

	/**
	 * The default component to render, if a current size component is not given.
	 */
	default: string | React.ComponentType<any>;

	/**
	 * The component to render when the screen size is "xs".
	 */
	xs?: string | React.ComponentType<any>;

	/**
	 * The props to pass on to the child compoent when screen size is "xs"
	 */
	xsProps?: { [key: string]: any };

	/**
	 * The component to render when the screen size is "sm".
	 */
	sm?: string | React.ComponentType<any>;

	/**
	 * The props to pass on to the child compoent when screen size is "sm"
	 */
	smProps?: { [key: string]: any };

	/**
	 * The component to render when the screen size is "md".
	 */
	md?: string | React.ComponentType<any>;

	/**
	 * The props to pass on to the child compoent when screen size is "md"
	 */
	mdProps?: { [key: string]: any };

	/**
	 * The component to render when the screen size is "lg".
	 */
	lg?: string | React.ComponentType<any>;

	/**
	 * The props to pass on to the child compoent when screen size is "lg"
	 */
	lgProps?: { [key: string]: any };

	/**
	 * The component to render when the screen size is "xl".
	 */
	xl?: string | React.ComponentType<any>;

	/**
	 * The props to pass on to the child compoent when screen size is "xl"
	 */
	xlProps?: { [key: string]: any };

	[key: string]: any;
}

export class ResponsiveLayout extends React.PureComponent<ResponsiveLayoutProps> {

	private DefaultComponent?: React.ComponentType<any>;
	private XSComponent?: React.ComponentType<any>;
	private SMComponent?: React.ComponentType<any>;
	private MDComponent?: React.ComponentType<any>;
	private LGComponent?: React.ComponentType<any>;
	private XLComponent?: React.ComponentType<any>;

	componentWillMount() {

		this.DefaultComponent = (typeof this.props.default === 'string')
			? getComponent(typeof this.props.default)
			: this.props.default;

		this.XSComponent = (typeof this.props.xs === 'string')
			? getComponent(typeof this.props.xs)
			: this.props.xs;

		this.SMComponent = (typeof this.props.sm === 'string')
			? getComponent(typeof this.props.sm)
			: this.props.sm;

		this.MDComponent = (typeof this.props.md === 'string')
			? getComponent(typeof this.props.md)
			: this.props.md;

		this.LGComponent = (typeof this.props.lg === 'string')
			? getComponent(typeof this.props.lg)
			: this.props.lg;

		this.XLComponent = (typeof this.props.xl === 'string')
			? getComponent(typeof this.props.xl)
			: this.props.xl;
	}

	render() {

		const {
			default: _default,
			lg,
			lgProps,
			md,
			mdProps,
			sm,
			smProps,
			xl,
			xlProps,
			xs,
			xsProps,
			...rest
		} = this.props;

		return (
			<ScreenSizeObserver>
				{(screenSize: SCREEN_SIZE) => {
					console.log('screen size ',screenSize)
					if (!this.DefaultComponent) {
						throw Error('A "default" component is required in ResponsiveLayout.');
					}

					switch (screenSize) {
						case 'xs':
							return React.createElement(
								this.XSComponent || this.DefaultComponent,
								{ ...rest, ...xsProps }
							);

						case 'sm':
							return React.createElement(

								this.SMComponent || this.DefaultComponent,
								{ ...rest, ...smProps }
							);

						case 'md':
							return React.createElement(
								this.MDComponent || this.DefaultComponent,
								{ ...rest, ...mdProps }
							);

						case 'lg':
							return React.createElement(
								this.LGComponent || this.DefaultComponent,
								{ ...rest, ...lgProps }
							);

						case 'xl':
							return React.createElement(
								this.XLComponent || this.DefaultComponent,
								{ ...rest, ...xlProps }
							);

						default:
							return React.createElement(this.DefaultComponent, rest);
					}
				}}
			</ScreenSizeObserver>
		);

	}
}