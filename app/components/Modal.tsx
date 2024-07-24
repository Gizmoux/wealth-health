import React from 'react';
import { CircleX } from 'lucide-react';
interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
}
const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
	const handleCloseModale = () => {
		onClose();
	};
	return (
		<div className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-primary-foreground w-1/4 h-1/7 p-4 items-center rounded-md flex justify-between">
				<h1>Employee created!</h1>
				<CircleX
					size={48}
					onClick={handleCloseModale}
					className="cursor-pointer"
				/>
			</div>
		</div>
	);
};

export default Modal;
