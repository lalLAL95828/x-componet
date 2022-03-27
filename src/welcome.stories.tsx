import React from "react";
import {storiesOf} from "@storybook/react"

storiesOf("welcome page",module)
.add("welcome",()=>{
    return (
        <>
          <h1>欢迎来到 xteam-ui 组件库</h1>
          <h3>安装</h3>
          <code>
            npm install xteam-ui --save
          </code>
          <h3>git地址</h3>
          <a href="https://github.com/lalLAL95828/xteam-ui" target="_blank" rel="noopener noreferrer">地址</a>
        </>
      )
},{
    info:{
        disable:true
    }
})