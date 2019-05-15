const nodeExternals = require('webpack-node-externals');

module.exports = {
  siteName: 'Frontline Developer',
  siteUrl: 'https://developer.frontlineeducation.com',
  titleTemplate: '%s - Frontline Developer',
  siteDescription: 'Develop and integrated with Frontline Educations K12 platform.',

  chainWebpack(config, { isServer }) {
    config.module.rules.delete('svg');
    config.module.rule('svg')
      .test(/\.svg$/)
      .use('vue')
      .loader('vue-loader')
      .end()
      .use('svg-to-vue-component')
      .loader('svg-to-vue-component/loader');

    if (isServer) {
      config.externals(nodeExternals({
        whitelist: [
          /\.css$/,
          /\?vue&type=style/,
          /vue-instantsearch/,
          /instantsearch.js/,
          /typeface-league-spartan/,
        ],
      }));
    }
  },

  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: '???????', // TODO add Frontline Google Analytics key
      },
    },
    {
      use: '@gridsome/plugin-critical',
      options: {
        paths: ['/'],
        width: 1300,
        height: 900,
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        index: ['index'],
        path: 'docs/**/*.md',
        typeName: 'DocPage',
        remark: {
          autolinkHeadings: {
            content: {
              type: 'text',
              value: '#',
            },
          },
          plugins: [
            '@gridsome/remark-prismjs',
          ],
        },
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'examples/*.md',
        typeName: 'Example',
        remark: {
          plugins: [
            '@gridsome/remark-prismjs',
          ],
        },
      },
    },
  ],
  // Create routes from GraphQL nodes
  nodeRoutes: {
  },
  // Create dynamic routes
  clientRoutes: [
  ],
};
