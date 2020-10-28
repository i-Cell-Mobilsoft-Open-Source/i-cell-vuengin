// module.exports = {
//   configureWebpack: (config) => {
//     config.externals = {
//       lodash: 'lodash',
//       moment: 'moment',
//       buefy: 'buefy',
//       'vee-validate': 'vee-validate',
//       axios: 'axios',
//     };
//   }
// };

const fixEmitDeclarationFilesForTypeScript = {
  chainWebpack: (config) => {
    config.module.rule('ts').uses.delete('cache-loader');
    config.module
      .rule('ts')
      .use('ts-loader')
      .loader('ts-loader')
      .tap((options) => {
        return {
          ...options,
          transpileOnly: false,
          happyPackMode: false,
        };
      });
  },
  parallel: false,
};

module.exports = {
  ...fixEmitDeclarationFilesForTypeScript,
  // some other configuration
  configureWebpack: {
    externals: {
      lodash: 'lodash',
      moment: 'moment',
    },
    // output: {
    //   libraryExport: 'default',
    // },
  },
};
