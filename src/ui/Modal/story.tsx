import React from 'react';
import {ThemeProvider} from 'react-jss';
import {Story, Meta} from '@storybook/react/types-6-0';

import {theme} from '../../theme';
import {ModalProps} from './types';
import { Modal } from './';

export default {
	title: 'UI/Modal',
	component: Modal,
} as Meta;

const Template: Story<ModalProps> = (args) => (
	<ThemeProvider theme={theme}>
		<Modal {...args} >{<div>Контент</div>}</Modal>
	</ThemeProvider>
);

export const Standart = Template.bind({});
Standart.args = {
	title: 'Название',
  open: true,
  onClose: ()=>{},
};




