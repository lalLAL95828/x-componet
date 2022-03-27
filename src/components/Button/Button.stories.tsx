// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import { Button,Buttontype } from './button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: '按钮',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} >按钮</Button>;

export const Linkbtn = Template.bind({});
Linkbtn.args={
  btnType:Buttontype.Link,
  href:"https://github.com/lalLAL95828/xteam-ui"
}

export const Primary = Template.bind({});
Primary.args={}

