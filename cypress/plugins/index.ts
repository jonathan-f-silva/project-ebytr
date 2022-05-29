import dbReset from '../../scripts/dbReset';

const cucumber = require('cypress-cucumber-preprocessor').default;
const browserify = require('@cypress/browserify-preprocessor');

const pluginSetup = (on: any) => {
  const options = {
    ...browserify.defaultOptions,
    typescript: require.resolve('typescript'),
  };

  on('file:preprocessor', cucumber(options));

  on('task', {
    'db:teardown': async () => dbReset(),
    'db:seed': () => {},
  });
};

export default pluginSetup;
