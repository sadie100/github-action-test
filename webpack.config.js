const path = require("path");

console.log("웹팩에서의 플래그 찍어 봄...");
console.log(process.env.FLAG);

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
