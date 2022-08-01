const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#2DC071",
              "@font-family": `'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','Noto Color Emoji'`,
              "@typography-title-margin-top": "auto",
              "@text-color": "#252B42",
              "@text-color-secondary": "#737373",
              "@heading-color": "#252B42",
              "@line-height-base": "1.5",
              "@btn-font-weight": "700",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
