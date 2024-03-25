import InputAtom from '@/components/atoms/InputAtom';
import React from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	id: string;
	label: string;
	type?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value: string | number;
	placeholder: string;
	required?: boolean;
	isError?: boolean;
}

const InputField = (props: InputFieldProps) => {
	const { id, label, type, onChange, value, placeholder, children, isError, ...rest } = props;
	return (
		<div className="flex flex-col gap-1">
			<label htmlFor={id} className="font-bold">
				{label} {props.required && <span className="text-red-500">*</span>}
				<InputAtom
					{...rest}
					id={id}
					type={type}
					placeholder={placeholder}
					onChange={onChange}
					value={value}
				/>
			</label>
			{
				isError ? (
					<span className="text-red-500 text-xs font-bold">This field is required</span>
				) : children
			}
		</div>
	);
};

export default InputField;