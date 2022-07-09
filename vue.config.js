const { defineConfig } = require("@vue/cli-service");
// const AutoImport = require("unplugin-auto-import/webpack");
// const Components = require("unplugin-vue-components/webpack");
// const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8081",
        ws: true,
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {
    resolve: { extensions: [".js", ".ts", ".jsx", ".tsx"] },
    // plugins: [
    //   AutoImport({
    //     resolvers: [ElementPlusResolver()],
    //     dts: "./auto-imports.d.ts",
    //   }),
    //   Components({
    //     resolvers: [ElementPlusResolver()],
    //   }),
    // ],
  },
});
