import Link from 'next/link';

interface NavItem {
	id: number;
	name: string;
	link: string;
}

const Header = () => {

	const navItems: NavItem[] = [
		{
			id: 1,
			name: 'Home',
			link: '/',
		},
		{
			id: 2,
			name: 'Articles',
			link: '/articles',
		},
		{
			id: 3,
			name: 'Post',
			link: '/articles/write-post',
		},
	];

	return (
		<>
			<header className="w-full h-[44px] sticky top-0 bg-white shadow-md">
				<div className="mx-auto w-full h-full xl:max-w-[1380px]">
						<nav className='w-full h-full relative'>
							<ul className="flex h-full justify-center items-center gap-12">
								{navItems.map((item) => (
									<li key={item.id} className='h-full flex items-center'>
										<Link href={item.link}>
											{item.name}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					</div>
			</header>
		</>
	);
};

export default Header;