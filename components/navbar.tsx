import Link from 'next/link';

interface NavItem {
	id: number;
	name: string;
	link: string;
}

const Navbar = () => {
	const navItems: NavItem[] = [
		{
			id: 1,
			name: 'Home',
			link: '/',
		},
		{
			id: 2,
			name: 'About',
			link: '/about',
		},
	];

	return (
		<div className='w-[320px] hidden xl:flex'>
			<nav className='w-full bg-white shadow-2xl'>
				<ul className='flex flex-col'>
					{navItems.map((item) => (
						<li key={item.id} className='flex px-2 py-4 border-b-[1px]'>
							<Link href={item.link}>{item.name}</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;