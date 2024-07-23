import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
const DropDown = ({ items }) => {
	const [isChevronClicked, setIsChevronClicked] = useState(false);
	const handleChevronToggle = () => {
		setIsChevronClicked(!isChevronClicked);
	};

	return (
		<div className="container">
			<div className="flex">
				<p>Dropdown</p>
				{isChevronClicked && (
					<div>
						<ul>
							{items.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					</div>
				)}
				<ChevronDown
					onClick={handleChevronToggle}
					className={isChevronClicked ? 'hidden' : 'block'}
				/>
				<ChevronUp
					onClick={handleChevronToggle}
					className={isChevronClicked ? 'block' : 'hidden'}
				/>
			</div>
		</div>
	);
};

export default DropDown;
