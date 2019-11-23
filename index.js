const { transformSync } = require('@babel/core');
const { dirname, resolve, join } = require('path');
const { existsSync } = require('fs');

/* eslint-env node */

const excludeRoot = path => (
  path === '/' ? undefined : path
);

const recLocatePackageJson = path => (
  path === '/' || existsSync(join(path, 'package.json'))
    ? excludeRoot(path)
    : recLocatePackageJson(dirname(path))
);

const locatePackageJson = path =>
  recLocatePackageJson(resolve(path));

module.exports.process = (src, filename, config, _transformOptions) => {
  let rootDir;

  if (filename.match(/^.+\/node_modules\//)) {
    rootDir = locatePackageJson(filename);
  }

  if (rootDir == null) {
    rootDir = config.cwd;
  }

  return transformSync(src, {
    root: rootDir,
    filename,
  });
};
