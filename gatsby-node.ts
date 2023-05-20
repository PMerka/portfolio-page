import { CreateWebpackConfigArgs } from "gatsby";
import path from "path";

exports.onCreateWebpackConfig = ({ actions }: CreateWebpackConfigArgs) => {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "src": path.resolve(__dirname, "src/"),
          "@static": path.resolve(__dirname, "static/"),
        },
        extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".png"],
      },
    });
};