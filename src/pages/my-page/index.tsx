import { Inter } from 'next/font/google';
import { GetServerSideProps } from 'next';
import { cookieParser } from '@/utils/common';

const inter = Inter({ subsets: ['latin'] });

interface MyPageProps {
	// 페이지 컴포넌트로 전달할 데이터
	cookie: any;
}

export const getServerSideProps: GetServerSideProps<MyPageProps> = async (context) => {
	const { req } = context;
	const cookie = req.headers.cookie || null;
	// 쿠키 처리 로직
	return {
		props: {
			// 페이지 컴포넌트로 전달할 데이터
			cookie,
		}
	};
};
const WritePostPage = ({ cookie }:MyPageProps) => {
	const cookies = cookieParser(cookie);

	return (
		<div className="flex flex-1 flex-col p-20 items-center">
			<h4 className="font-bold text-3xl">글작성</h4>
			<form
				action="/api/post?redirect=/posts"
				method="POST"
				className="flex flex-col gap-4 w-full max-w-[320px] mt-8"
			>
				<input name="title" placeholder="제목" className="text-input" />
				<textarea
					name="content"
					placeholder="내용"
					className="border border-gray-300 h-44 overflow-auto rounded-md p-2 resize-none"
				/>
				<button type="submit" className="button">제출</button>
			</form>
		</div>
	);
};

export default WritePostPage;
