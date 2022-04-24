import BlueBasePluginJsonSchemaComponents from '@bluebase/plugin-json-schema-components';
import BlueBasePluginLauncher from '@bluebase/plugin-launcher';
import BlueBasePluginReactNativePaper from '@bluebase/plugin-react-native-paper';
import BlueBasePluginReactNavigation from '@bluebase/plugin-react-navigation';
import BlueBasePluginSettingsApp from '@bluebase/plugin-settings-app';
import { MaterialCommunityIcons } from '@bluebase/plugin-vector-icons';

import Plugin from './src';

export const plugins = [
	BlueBasePluginJsonSchemaComponents,
	BlueBasePluginLauncher,
	BlueBasePluginReactNativePaper,
	BlueBasePluginReactNavigation,
	MaterialCommunityIcons,
	Plugin,
	BlueBasePluginSettingsApp,
];
