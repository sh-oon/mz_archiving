import Footer from '@/components/footer';
import React from 'react';
import Header from '@/components/header';

type LayoutProps = {
	children?: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<Header />
			<main className="flex min-h-svh xl:max-w-[1380px] mx-auto justify-center">
				{children}
			</main>
			<Footer />
		</>
	);
}