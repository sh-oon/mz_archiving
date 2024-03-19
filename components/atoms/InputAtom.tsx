import React from 'react';

interface InputAtomProps {
	value: string | number;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
	className?: string;
	style?: React.CSSProperties;
}

const InputAtom = (props: InputAtomProps) => {
	return (
		<>
			<input
				className={`border border-gray-300 h-10 rounded-md p-2 ${props.className}`}
				{...props}
				autoComplete={'off'}
			/>
		</>
	);
};

export default InputAtom;