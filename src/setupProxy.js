const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/",
    createProxyMiddleware({
      target: "https://custom2.mystagingserver.site/food-stadium/public",
      changeOrigin: true,
      pathRewrite: {
        "^/api/": "/"
      },
    })
  );
};
