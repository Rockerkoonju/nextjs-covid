/** @format */

import Link from 'next/link';

const Navbar = () => {
	return (
		<div className='flex items-center text-slate-50 font-Mitr h-14 w-full bg-sky-700 shadow-md'>
			<div className='flex  m-5'>
				<div className='flex m-2 items-center justify-center  transition-all duration-300 rounded h-8 hover:shadow-sm hover:-translate-y-0.5 hover:text-slate-800 hover:bg-slate-50 w-24'>
					<Link href='/'> Home </Link>
				</div>
				<div className='flex m-2 items-center justify-center transition-all duration-300 rounded h-8 hover:shadow-sm hover:-translate-y-0.5  hover:text-slate-800 hover:bg-slate-50 w-24'>
					<Link href='/provinces'>
						<a> Provinces </a>
					</Link>
				</div>
				<div className='flex m-2 items-center justify-center transition-all duration-300 rounded  h-8 hover:shadow-sm hover:-translate-y-0.5 hover:text-slate-800 hover:bg-slate-50 w-24'>
					<p>
						<Link href='/about'> About </Link>
					</p>
				</div>
			</div>
			<div className='flex m-2 items-center justify-center transition-all duration-300 rounded  h-8 hover:shadow-sm hover:-translate-y-0.5 hover:text-slate-800 hover:bg-slate-50 w-24 absolute right-5'>
				Donate Me
			</div>
		</div>
	);
};

export default Navbar;
