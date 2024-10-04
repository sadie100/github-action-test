const path = require("path");

module.exports = (env) => {
  const entry = process.env.FLAG ? "./src/yesFlag.js" : "./src/noFlag.js";
  return {
    entry: entry,
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
    },
  };
};
