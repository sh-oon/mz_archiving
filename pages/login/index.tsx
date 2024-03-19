import Image from 'next/image';
import { Inter } from 'next/font/google';
import Layout from '@/components/layout';

const inter = Inter({ subsets: ['latin'] });

export default function Login() {
	return (
		<Layout>
			<div className="flex flex-1 flex-col p-20 items-center">
				<h4 className="font-bold text-3xl">로그인</h4>
				<form
					action="/api/login?redirect=/home"
					method="POST"
					className="flex flex-col gap-4 w-full max-w-[320px] mt-8"
				>
					<input name="id" placeholder="아이디" className="text-input" />
					<input
						name="password"
						type="password"
						placeholder="비밀번호"
						className="text-input"
						autoComplete='off'
					/>
					<button type="submit" className="button">
						로그인
					</button>
				</form>
			</div>
		</Layout>
	);
}
