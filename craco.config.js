// craco.config.js
const { POSTCSS_MODES } = require("@craco/craco");

module.exports = {
  style: {
    postcss: {
      mode: "file",
    },
  },
};
