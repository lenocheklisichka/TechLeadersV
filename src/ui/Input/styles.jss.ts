import {createUseStyles} from 'react-jss';

import {Theme} from '../../theme';

const styles = (theme: Theme) => ({
	root: {
		position: 'relative',
		margin: '1rem 0',
		fontFamily: theme.fontFamily,
	},
	input: {
		backgroundColor: 'transparent',
		borderWidth: 1,
		borderStyle: 'none none solid',
		borderColor: '#222222',
		fontSize: '1rem',
		padding: '1.2rem 1rem 0.5rem',
		boxSizing: 'border-box',

		'&::placeholder': {
			fontSize: '1rem',
			fontFamily: theme.fontFamily,
		},

		'&.outlined': {
			borderStyle: 'solid',
			borderColor: 'gray',
			padding: '1rem',
			borderRadius: 7,

			'& + label.top': {
				top: -5,
				left: 0,
				backgroundColor: theme.palette.background.default,
			},
		},

		'&.filled': {
			backgroundColor: '#adacac',
			borderRadius: 7,

			'& + label.top': {
				top: 0,
			},
		},

		'&:focus': {
			outline: 'none',
			borderColor: theme.palette.secondary.main,

			'& + label:not(.error)': {
				color: theme.palette.secondary.main,
			},
		},

		'&.error': {
			borderColor: theme.palette.error.main,
		},

		'&:not(:placeholder-shown) + label': {
			display: 'inline-block',
			visibility: 'visible',
		},
	},
	label: {
		color: 'gray',
		fontSize: '1rem',
		backgroundColor: 'transparent',
		position: 'absolute',
		left: 16,
		top: 16,

		'&:hover': {
			cursor: 'text',
		},

		'&.error': {
			color: theme.palette.error.main,
		},

		'&.top': {
			transition: '0.3s',
			top: -5,
			left: 0,
			padding: '0 3px',
			fontSize: '0.7rem',

			'&:hover': {
				cursor: 'default',
			},
		},
	},
	tip: {
		fontSize: '0.6rem',
		textAlign: 'left',
		margin: '0.3rem 0.5rem',

		'&.error': {
			color: theme.palette.error.main,
		},
	},
});

export default createUseStyles<Theme, keyof ReturnType<typeof styles>>(styles, {name: 'UI_Input'});