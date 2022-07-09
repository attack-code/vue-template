module.exports = {
  // 设置强制单引号
  singleQuote: false,
  // 为多行数组的非末尾行添加逗号 es5的对象，数组等
  trailingComma: "es5",
  // 每行最大宽度 100
  printWidth: 100,
  // 设置语句末尾不加分号
  semi: true,
  // jsx中使用单引号
  jsxSingleQuote: false,
  // 箭头函数, 只有一个参数时, 也需要括号
  arrowParens: "always",
  // 不使用缩进符，使用空格
  useTabs: false,
  // 缩进时的宽度
  tabWidth: 2,
  // 换行
  endOfLine: "lf",
  // 不格式化 vue
  disableLanguages: ["vue"],
  // > 标签单独放在下一行
  bracketSameLine: false,
  // 不让 prettier 使用 stylelint 的代码格式进行校验
  stylelintIntegration: false,
  // 不让 prettier 使用 tslint 的代码格式进行校验
  tslintIntegration: false,
  // 不使用 prettier 格式化的文件填写在项目的 .prettierignore文件中
  ignorePath: ".prettierignore",
  extends: [
    // 继承 vue 的标准特性
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    // 避免与 prettier 冲突
    "plugin:prettier/recommended",
  ],
};
