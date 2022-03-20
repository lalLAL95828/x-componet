```js
// 构建工具相关/
npm i --save react react-dom
npm i --save-dev babel-loader
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm i -D typescript

//安装storybook（这种方式会安装各个包的.d.ts）
npx sb init


//安装scss，如果有报错，请参考官网
//https://github.com/storybookjs/storybook/issues/16115
npm install @storybook/preset-scss sass --save-dev
npm i -D css-loader@5 sass-loader@10 style-loader@2

//安装eslint
npm install eslint --save-dev
npx eslint --init

//安装测试用例
npm install --save-dev jest
npm install --save-dev @testing-library/react
npm install --save-dev @testing-library/jest-dom

//清空文件夹
npm i -D rimraf
//装scss的命令工具
npm i -D node-sass

//git命令执行前的操作
npm i -D husky

//解决问题html-webpack-plugin报错，特地升级一下，如果报错，可以不升级
npm i --save-dev html-webpack-plugin

//判断是否为持续化继承服务器
npm install is-ci --save

//react-docgen 组件的详细信息（组件参数文档生成器）（新版storybook不用特点下载）
//npm install --save-dev react-docgen-typescript-loader

//【测试工具】react-test-renderer如何使用，参考react官网（使用不到，可以不下载）
npm i -D react-test-renderer
```




```js
// ui搭建工具相关/
npm i classnames

```