module.exports = {
  devServer: {
    port: '8080',
    headers:  { "Access-Control-Allow-Origin": "*" }
  },
  lintOnSave: true,
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/style.scss";
        `,
      },
    },
  },
}
