import { Text, View, ViewProps } from 'react-native';
import React from 'react';
import { ResponsiveLayoutProps } from '../';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const ResponsiveLayout = getComponent<ResponsiveLayoutProps>('ResponsiveLayout');

const Yellow = ({ title, style, ...rest }: ViewProps & { title: string }) => (
	<View style={[style, { backgroundColor: 'yellow' }]} {...rest}>
		<Text>{title}</Text>
	</View>
);

const Red = ({ title, style, ...rest }: ViewProps & { title: string }) => (
	<View style={[style, { backgroundColor: 'red' }]} {...rest}>
		<Text>{title}</Text>
	</View>
);

const Green = ({ title, style, ...rest }: ViewProps & { title: string }) => (
	<View style={[style, { backgroundColor: 'green' }]} {...rest}>
		<Text>{title}</Text>
	</View>
);
const stories = storiesOf('ResponsiveLayout', module);

stories

.add('Simple Example', () => (
	<ResponsiveLayout
		default={Yellow}
		title="This is a default text"
		xs={Green}
		xsProps={{ title: 'This is XS screen' }}
		sm={Red}
		smProps={{ title: 'This is SM screen' }}
		mdProps={{ title: 'This screen size shows default component, but responsive props' }}
	/>
))

;

