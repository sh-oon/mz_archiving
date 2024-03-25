import React from 'react';
import { FieldType } from '@/types/form';
import InputField from '@/components/molecules/fields/Inputfield';

type FormFieldsProps = {
	fields: FieldType[];
};

const FormFields = (props: FormFieldsProps) => {
	const { fields } = props;

	return (
		<>
			<div className='flex flex-col gap-4'>
				{fields.map((field) => (
					<InputField
						key={field.id}
						id={field.id}
						label={field.label}
						type={field.type}
						value={field.value}
						onChange={field.onChange}
						placeholder={field.placeholder}
						required={field.required}
					>
						{field.children}
					</InputField>
				))}
			</div>
		</>
	);
};

export default FormFields;