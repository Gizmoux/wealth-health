'use client';
import Header from './components/Header';
import Footer from './components/Footer';
const Home = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<div className="flex-grow flex flex-col justify-center items-center p-10">
				<h1>Notre projet</h1>

				<p className="w-1/2 h-1/2 bg-green-100 rounded-xl p-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
					itaque possimus aperiam tempora suscipit quia ad dolorem dolor, odio
					laboriosam, corporis facere. Aliquid, doloremque veniam ea quidem
					nulla in minima? Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Explicabo nulla veritatis corporis laudantium officiis iste quae
					voluptatem? Dolorum, quo illum? Ratione explicabo cum rem sapiente
					labore possimus aperiam dolor perspiciatis? Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Eos ipsum accusantium corporis similique
					nam ipsam quidem dignissimos culpa unde, ea, illo molestiae quaerat
					explicabo libero optio doloremque veniam veritatis voluptatem.
				</p>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
