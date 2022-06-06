// use `mergeConfig` to recursively merge Vite options
const { mergeConfig } = require('vite')

module.exports = {
  stories: ['../packages/**/*.stories.mdx', '../packages/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@react-theming/storybook-addon'
  ],
  framework: '@storybook/react',
  core: {
    builder: 'storybook-builder-vite'
  },
  staticDirs: ['../public'],
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        dedupe: ['@emotion/react', 'react', 'react-dom']
      }
    })
  },
  features: {
    buildStoriesJson: true,
  }
}
