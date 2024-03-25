'use client';

import { Inter } from 'next/font/google';
import React, { useState } from 'react';
import customFetch from '@/utils/fetch';
import InputAtom from '@/components/atoms/InputAtom';

const inter = Inter({ subsets: ['latin'] });

export default function Login(): React.ReactNode {
	const [form, setForm] = useState({
		email: "",
		password: "",
	})

	const submitHandler = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
		e.preventDefault();
		// submit 핸들러 내용
		await customFetch('/api/auth/login', {
			method: "POST",
			body: JSON.stringify(form)
		})
	};

	return (
		<div className="flex flex-1 flex-col p-20 items-center">
			<h4 className="font-bold text-3xl">로그인</h4>
			<form onSubmit={submitHandler} className="flex flex-col gap-4 w-full max-w-[320px] mt-8">
				<input name="id" placeholder="아이디" className="text-input" />
				<InputAtom
					type='email'
					placeholder='email'
					onChange={(e)=> setForm({
						...form,
						email: e.target.value
					})}
					value={form.email}
				/>

				<input
					name="password"
					type="password"
					placeholder="비밀번호"
					className="text-input"
					autoComplete="off"
				/>
				<button type='submit' className="button">
					로그인
				</button>
			</form>
		</div>
	);
}