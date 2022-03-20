const config = {
    //报告每个单独的测试
    verbose: true,
    //导入一些执行前的配置代码，你如jest-dom
    setupFilesAfterEnv:["./src/jest-setup.js"],
    
    //测试的环境
    testEnvironment:"jsDom"
};
  
module.exports = config;
  