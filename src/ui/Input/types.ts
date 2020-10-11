import { ChangeEvent, RefObject } from "react";

export interface IInputProps {
	id?: string;
	disabled?: boolean;
	tip?: string;
	label?: string;
	error?: string;
	variant?: 'standart' | 'filled' | 'outlined';
	size?: 'small' | 'medium' | 'large';
	placeholder?: string;
	className?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
};


