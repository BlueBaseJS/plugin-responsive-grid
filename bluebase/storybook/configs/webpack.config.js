const { storybookWebpackConfigs } = require('@bluebase/cli-essentials');

module.exports = (bundle) => {

	config = storybookWebpackConfigs(bundle);

	return config;
};
