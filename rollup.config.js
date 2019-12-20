import configurePackage from './support/rollup/configure-package';

import editor from './packages/editor/package.json';

const configs = [
  ...configurePackage(editor),
];

export default configs;
