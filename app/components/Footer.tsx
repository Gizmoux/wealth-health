'use client';
import { Copyright } from 'lucide-react';

const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white py-6 mt-auto">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="flex items-center mb-4 md:mb-0">
						<Copyright className="ml-2 h-4 w-4 mr-2" />
						<span className="text-sm">Created and designed by Nicolas dR</span>
					</div>
					<div className="flex space-x-4">
						<a
							href="#"
							className="hover:text-gray-300 transition-colors duration-300"
						>
							Legal Notice
						</a>
						<a
							href="#"
							className="hover:text-gray-300 transition-colors duration-300"
						>
							General Conditions
						</a>
						<a
							href="#"
							className="hover:text-gray-300 transition-colors duration-300"
						>
							Contact
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
