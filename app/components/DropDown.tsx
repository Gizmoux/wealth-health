import {
	SetStateAction,
	AwaitedReactNode,
	JSXElementConstructor,
	Key,
	ReactElement,
	ReactNode,
	ReactPortal,
	useState,
} from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
interface DropDownProps {
	items: string[];
	name: string;
	onSelect: (value: string) => void;
}
const DropDown: React.FC<DropDownProps> = ({ items, name }) => {
	const [isChevronClicked, setIsChevronClicked] = useState(false);
	const [selectedValue, setSelectedValue] = useState('valeur défault');

	const handleClickValue = (item: SetStateAction<string>) => {
		setSelectedValue(item);
		setIsChevronClicked(false);
	};

	const handleChevronToggle = () => {
		setIsChevronClicked(!isChevronClicked);
	};

	return (
		<div className="container">
			<div className="flex bg-red-400 w-full gap-5 p-5 m-5 rounded-md">
				<p>{selectedValue}</p>

				{isChevronClicked && (
					<div>
						<ul>
							{items.map(
								(
									item:
										| string
										| number
										| bigint
										| boolean
										| ReactElement<any, string | JSXElementConstructor<any>>
										| Iterable<ReactNode>
										| ReactPortal
										| Promise<AwaitedReactNode>
										| null
										| undefined,
									index: Key | null | undefined
								) => (
									<li
										key={index}
										onClick={() => handleClickValue(item)}
										value={selectedValue}
									>
										{item}
									</li>
								)
							)}
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
