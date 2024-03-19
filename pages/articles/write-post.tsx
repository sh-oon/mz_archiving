import { Inter } from 'next/font/google';
import Layout from '@/components/layout';

const inter = Inter({ subsets: ['latin'] });

const WritePostPage = () => {
	return (
			<div className="flex flex-1 flex-col p-20 items-center">
				<h4 className="font-bold text-3xl">글작성</h4>
				<form
					action="/api/post/new"
					method="POST"
					className="flex flex-col gap-4 w-full max-w-[320px] mt-8"
				>
					<input name="title" placeholder="제목" className="text-input" />
					<textarea
						name="content"
						placeholder="내용"
						className="border border-gray-300 h-44 overflow-auto rounded-md p-2 resize-none"
					/>
					<button type="submit" className='button'>제출</button>
				</form>
			</div>
	);
};

export default WritePostPage;
