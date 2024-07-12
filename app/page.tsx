'use client';
import CreateEmployee from './pages/create-employee/page';
import Header from './components/Header';
import Image from 'next/image';
import healthImage from '../app/assets/images/healthiswealth.jpg';
const Home = () => {
	return (
		<div className="">
			<Header />
			<div className="flex justify-center items-center">
				<Image
					src={healthImage}
					width={500}
					height={500}
					alt="healthiswealth"
				/>
			</div>
		</div>
	);
};

export default Home;
