import "../src/styles/index.scss"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  options: {
    storySort: {
      //设置按钮的展示顺序
      order: ['按钮'],
    },
  },
}