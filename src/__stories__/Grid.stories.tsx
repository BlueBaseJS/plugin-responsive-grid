import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import React from 'react';
import { Text, View } from 'react-native';

import { ColumnProps, ContainerProps, RowProps } from '../components';

const Container = getComponent<ContainerProps>('Container');
const Row = getComponent<RowProps>('Row');
const Column = getComponent<ColumnProps>('Column');

const stories = storiesOf('Grid', module);

stories

	.add('Grid', () => (
		<View>
			<Container style={{ backgroundColor: 'rgba(0,0,0,.12)' }}>
				<Row rowSize={12}>
					<Column sm={6} md={4} lg={3} style={{ backgroundColor: 'yellow' }}>
						<Text>
						First Column
						</Text>
					</Column>
					<Column sm={6} md={4} lg={3} style={{ backgroundColor: 'green' }}>
						<Text>
						Second Column
						</Text>
					</Column>
				</Row>
			</Container>
		</View>
	))

;

