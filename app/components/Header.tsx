import logo from '../assets/images/logowealth.png';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
const Header = () => {
	return (
		<div className=" flex items-center justify-between">
			<Image src={logo} width={100} height={100} alt="logo hrnet" />
			<div className=" flex items-center">
				<Link href="/pages/employee-list" className="mr-2 hover:text-slate-400">
					View Current Employees
				</Link>
				<Link href="/pages/create-employee">Create Employee</Link>
				<Button className="mr-2">Signin</Button>
				<Button>Signup</Button>
			</div>
		</div>
	);
};

export default Header;
