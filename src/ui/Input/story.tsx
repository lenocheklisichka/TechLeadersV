import React from 'react';
import {ThemeProvider} from 'react-jss';
import {Story, Meta} from '@storybook/react/types-6-0';

import {theme} from '../../theme';
import {Input} from '../Input';
import {IInputProps} from './types';

export default {
	title: 'UI/Input',
	component: Input,
} as Meta;

const Template: Story<IInputProps> = (args) => (
	<ThemeProvider theme={theme}>
		<Input {...args} />
	</ThemeProvider>
);

export const Standart = Template.bind({});
Standart.args = {
    variant: 'standart',
    label: 'login',
    tip: 'Enter your login'
};

export const Filled = Template.bind({});
Filled.args = {
	variant: 'filled',
	label: 'login',
	tip: 'Enter your login',
};

export const Outlined = Template.bind({});
Outlined.args = {
	variant: 'outlined',
	label: 'login',
	tip: 'Enter your login',
};

export const Error = Template.bind({});
Error.args = {
	disabled: true,
	variant: 'outlined',
	error: 'Invalid input',
	label: 'login',
};

export const NoLabelInput = Template.bind({});
NoLabelInput.args = {
	variant: 'standart',
	placeholder: 'login',
	tip: 'Enter your login',
};



