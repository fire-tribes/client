// next.js + Lint-staged를 함꼐
const path = require('path');

const buildEslintCommand = (filenames) => {
  return `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;
};

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
};
