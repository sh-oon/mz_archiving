'use client';

import { Inter } from 'next/font/google';
import React, { useState } from 'react';
import customFetch from '@/utils/fetch';
import FormFields from '@/components/organisms/FormFields';
import { FormType } from '@/types/form';

const inter = Inter({ subsets: ['latin'] });

type RegisterForm = {
	email: FormType;
	password: FormType;
	passwordConfirm: FormType;
	name: FormType; // 이름
	mobile: FormType; //010-1234-5678
};

export default function Register(): React.ReactNode {
	const [session, setSession] = useState<number>(0);
	const [form, setForm] = useState<RegisterForm>({
		email: {
			value: '',
			isError: false,
			errorMessage: '',
		},
		password: {
			value: '',
			isError: false,
			errorMessage: '',
		},
		passwordConfirm: {
			value: '',
			isError: false,
			errorMessage: '',
		},
		name: {
			value: '',
			isError: false,
			errorMessage: '',
		},
		mobile: {
			value: '',
			isError: false,
			errorMessage: '',
		},
	});

	const validateForm = (form: RegisterForm, requiredKeys: (keyof RegisterForm)[]): boolean => {
		const copiedForm = { ...form };

		for (const key of requiredKeys) {
			const field = copiedForm[key];
			if (field.value === '') {
				copiedForm[key] = {
					...field,
					isError: true,
					errorMessage: 'This field is required',
				};
			}
		}

		if (form.passwordConfirm.value !== form.password.value) {
			copiedForm.passwordConfirm = {
				...form.passwordConfirm,
				isError: true,
				errorMessage: 'Password does not match',
			};
		}

		return Object.values(copiedForm).every((field) => !field.isError);
	};

	const submitHandler = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
		e.preventDefault();

		if (session === 0) {
			const isValid: boolean = validateForm(form, ['email', 'password', 'passwordConfirm']);
			if (!isValid) {
				return;
			}
			setSession(1);
			return;
		}

		if (session === 1) {
			const body = {
				email: form.email,
				password: form.password,
				name: form.name,
				mobile: form.mobile,
			};

			await customFetch('/api/auth/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(form),
			});
		}

	};

	return (
		<div className="flex flex-1 flex-col p-4 items-center md:p-20">
			<h4 className="font-bold text-3xl">회원가입</h4>
			<form onSubmit={submitHandler} className="flex flex-col gap-8 w-full max-w-[320px] mt-8">
				{
					session === 0 && (
						<FormFields
							fields={[
								{
									type: 'email',
									placeholder: 'email',
									onChange: (e) => setForm({
										...form,
										email: {
											...form.email,
											value: e.target.value,
										},
									}),
									value: form.email.value,
									label: 'Email',
									id: 'email',
									required: true,
								},
								{
									type: 'password',
									placeholder: 'password',
									pattern: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$',
									onChange: (e) => setForm({
										...form,
										password: {
											...form.password,
											value: e.target.value,
										},
									}),
									value: form.password.value,
									label: 'Password',
									id: 'password',
									required: true,
									children: (
										<span className="text-xs text-gray-400 font-bold">영문, 숫자 포함 8자 이상</span>
									),
								},
								{
									type: 'password',
									placeholder: 'passwordConfirm',
									onChange: (e) => setForm({
										...form,
										passwordConfirm: {
											...form.passwordConfirm,
											value: e.target.value,
										},
									}),
									value: form.passwordConfirm.value,
									label: 'PasswordConfirm',
									id: 'passwordConfirm',
								},
							]}
						>
						</FormFields>
					)
				}
				{
					session === 1 && (
						<FormFields
							fields={[
								{
									type: 'text',
									placeholder: 'name',
									onChange: (e) => setForm({
										...form,
										name: {
											...form.name,
											value: e.target.value,
										},
									}),
									value: form.name.value,
									label: 'Name',
									id: 'name',
									required: true,
								},
								{
									type: 'tel',
									placeholder: 'mobile',
									onChange: (e) => setForm({
										...form,
										mobile: {
											...form.mobile,
											value: e.target.value,
										},
									}),
									value: form.mobile.value,
									label: 'Mobile',
									id: 'mobile',
									required: true,
									children: (
										<span className="text-xs text-gray-400 font-bold">ex) 01012345678</span>
									),
								},
							]}
						>
						</FormFields>
					)
				}

				{
					session === 0 && (
						<button className="button" type="submit">
							다음
						</button>
					)
				}
				{
					session === 1 && (
						<div className="flex gap-4 w-full">
							<button className="button" onClick={() => setSession(0)}>이전으로</button>
							<button className="button" type="submit">
								회원가입
							</button>
						</div>
					)
				}
			</form>
		</div>
	);
}