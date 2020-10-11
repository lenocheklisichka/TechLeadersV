import React, {ChangeEvent, useState} from 'react';
import clsx from 'clsx';
import useStyles from './styles.jss';
import {IInputProps} from './types';

export const Input: React.FC<IInputProps> = React.forwardRef<HTMLInputElement, IInputProps>(
	(
		{
			id,
			disabled,
			error,
			children,
			className,
			variant = 'standart',
			size = 'medium',
			placeholder,
			tip,
			onChange,
			onBlur,
			label,
			...props
		},
		ref
	) => {
		const classes = useStyles();
		const [isLabelTop, setIsLabelTop] = useState<boolean>(false);

		const handleInputFocus = () => setIsLabelTop(true);
		const handleInputBlur = (e: ChangeEvent<HTMLInputElement>) => {
			if (!e.target.value) {
				setIsLabelTop(false);
			}
		};

		return (
			<div className={clsx(classes.root)}>
				<input
					{...props}
					disabled={disabled}
					id={id || 'defaultInput'}
					ref={ref}
					onChange={onChange}
					onBlur={handleInputBlur}
					onFocus={handleInputFocus}
					type="text"
					placeholder={placeholder}
					className={clsx(
						classes.input,
						{
							[`${variant}`]: true,
							[`${size}`]: true,
							error: !!error,
						},
						className
					)}
				/>
				{label && (
					<label
						htmlFor={id || "defaultInput"}
						className={clsx(classes.label, {
							error: !!error,
							top: isLabelTop || placeholder,
						})}
					>
						{label}
					</label>
				)}
				{(tip || error) && (
					<p
						className={clsx(classes.tip, {
							error: !!error,
						})}
					>
						{error || tip}
					</p>
				)}
			</div>
		);
	}
);
