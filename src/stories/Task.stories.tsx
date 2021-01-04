import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './Button';
import {AddItemForm, AddItemFormPropsType} from "../AddItemForm";
import {action} from "@storybook/addon-actions";
import {Task, TaskPropsType} from "../Task";

export default {
  title: 'Todolist/Task',
  component: Task,
} as Meta;

const removeCallback = action('Remove btn inide Task Clicked')
const changeStatusCallback = action('Status changed inside Task')
const changeTitleCallBack = action('Title changed inside Task')


const Template: Story<TaskPropsType> = (args) => {
  return <Task {...args} />
};

const baseArg = {
  removeTask: removeCallback,
  changeTaskStatus: changeStatusCallback,
  changeTaskTitle: changeTitleCallBack
}


export const TaskIsDoneExample = Template.bind({});
TaskIsDoneExample.args = {
  ...baseArg,
  task: {id: '1', isDone: true, title: 'CSS'},
  todolistId: 'todolist1'
};

export const TaskIsNotDoneExample = Template.bind({});
TaskIsNotDoneExample.args = {
  ...baseArg,
  task: {id: '2', isDone: false, title: 'Js'},
  todolistId: 'todolist2'
};



