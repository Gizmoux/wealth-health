import logo from '../assets/images/logowealth.png';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
const Header = () => {
	return (
		<header className="bg-white shadow-md">
			<div className="container mx-auto px-4 py-3 flex items-center justify-between">
				<div className="flex items-center">
					<Image
						src={logo}
						width={100}
						height={100}
						alt="logo hrnet"
						className="mr-4"
					/>
					<h1 className="text-2xl font-bold text-gray-800">HRnet</h1>
				</div>
				<nav>
					<ul className="flex space-x-10">
						<li>
							<Link
								href="/"
								className="text-gray-600 hover:text-primary transition duration-300"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								href="/pages/employee-list"
								className="text-gray-600 hover:text-primary transition duration-300"
							>
								View Current Employees
							</Link>
						</li>
						<li>
							<Link
								href="/pages/create-employee"
								className="text-gray-600 hover:text-primary transition duration-300"
							>
								Create Employee
							</Link>
						</li>
						<li>
							<Link
								href="/"
								className="text-gray-600 hover:text-primary transition duration-300"
							>
								Sign In
							</Link>
						</li>
						<li>
							<Link
								href="/"
								className="text-gray-600 hover:text-primary transition duration-300"
							>
								Sign Up
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
