import React from 'react';

interface InputAtomProps extends React.InputHTMLAttributes<HTMLInputElement> {
	value: string | number;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
	className?: string;
	style?: React.CSSProperties;
}

const InputAtom = (props: InputAtomProps) => {
	return (
		<input
			{...props}
			className={`border border-gray-300 h-10 w-full mt-2 rounded-md p-2 text-black font-medium transition outline-0 focus:outline-2 focus:border-blue-500 ${props.className}`}
			autoComplete={'off'}
		/>
	);
};

export default InputAtom;