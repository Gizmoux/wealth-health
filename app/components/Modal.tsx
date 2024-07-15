import React from 'react';
import { CircleX } from 'lucide-react';
const Modal = () => {
	return (
		<div className="bg-red-500 flex flex-center items-center justify-center h-36">
			<h1>Employee created!</h1>
			<CircleX size={48} />
		</div>
	);
};

export default Modal;
