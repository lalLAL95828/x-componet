const path = require('path');
// type PropFilter = (prop: PropItem, component: Component) => boolean;

module.exports = {
    "core": {
        "builder": 'webpack5',
    },
    "features": {
        babelModeV7: true,
    },
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/preset-scss",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    "framework": "@storybook/react",

    
    "typescript": {
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            // tsconfigPath:path.join(__dirname,"../","tsconfig.json"),
            tsconfigPath:"../tsconfig.json",
            //解决因为合并原生属性引发的问题
            //https://github.com/styleguidist/react-docgen-typescript#parseroptions
            propFilter: (prop, component) => {
                if (prop.declarations !== undefined && prop.declarations.length > 0) {
                  const hasPropAdditionalDescription = prop.declarations.find((declaration) => {
                    return !declaration.fileName.includes("node_modules");
                  });
            
                  return Boolean(hasPropAdditionalDescription);
                }
                return true;
            },
        }
    }
      // 展示Storybook UI组件的例子
    // "refs": {
    //     'design-system': {
    //         title: "Storybook Design System",
    //         url: "https://5ccbc373887ca40020446347-yldsqjoxzb.chromatic.com",
    //         expanded: false // optional, true by default
    //     }
    // },
}