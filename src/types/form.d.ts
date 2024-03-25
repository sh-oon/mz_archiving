import React from 'react';

type FieldType = {
	id: string;
	label: string;
	type?: string;
	value: string | number;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	pattern?: string;
	placeholder: string;
	required?: boolean;
	children?: React.ReactNode;
};

type FormType = {
	value: string;
	isError: boolean;
	errorMessage?: string;
}