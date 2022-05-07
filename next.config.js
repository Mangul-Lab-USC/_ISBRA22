// next.config.js
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  basePath: isProd ? "/ISBRA" : "",
  assetPrefix: isProd ? "/ISBRA/" : "",
};
