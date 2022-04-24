import { useComponent } from '@bluebase/core';
import React from 'react';

import { useScreenSize } from '../../useScreenSize';

export interface ResponsiveLayoutProps {
	[key: string]: any;

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
}

export const ResponsiveLayout = (props: ResponsiveLayoutProps) => {
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
	} = props;

	if (!_default) {
		throw Error('A "default" component is required in ResponsiveLayout.');
	}

	const screenSize = useScreenSize();
	const Component = useComponent(props[screenSize] || props.default);

	return <Component {...rest} {...props[`${screenSize}Props`]} />;
};

ResponsiveLayout.displayName = 'ResponsiveLayout';
