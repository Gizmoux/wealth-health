'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { states } from '../../data/states';
import { departments } from '@/app/data/departments';
import Header from '@/app/components/Header';
import Modal from '@/app/components/Modal';
import Footer from '@/app/components/Footer';
import DropDown from '@/app/components/DropDown';

const schema = z.object({
	firstName: z.string().min(1, { message: 'First name is required' }),
	lastName: z.string().min(1, { message: 'Last name is required' }),
	email: z.string().email({ message: 'Invalid email address' }),
	dateOfBirth: z.string().date(),
	startDate: z.string().date(),
	street: z.string().min(1, { message: 'Street is required' }),
	city: z.string().min(1, { message: 'City is required' }),
	state: z.string().min(1, { message: 'State is required' }),
	zipCode: z.string().min(1, { message: 'Zip Code is required' }),
	department: z.string().min(1, { message: 'Department is required' }),
});

type FormData = z.infer<typeof schema>;

const CreateEmployee: React.FC = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [dateOfBirth, setDateOfBirth] = useState('');
	const [startDate, setStartDate] = useState('');
	const [street, setStreet] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('Alabama');
	const [zipCode, setZipCode] = useState('');
	const [department, setDepartment] = useState('Sales');

	const [modalIsOpen, setModalIsOpen] = useState(false);
	const stateNames = states.map(state => state.name);
	const departmentNames = departments.map(department => department.name);

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});

	const saveEmployee = () => {
		const employees = JSON.parse(localStorage.getItem('employees') || '[]');
		const employee = {
			firstName,
			lastName,
			dateOfBirth,
			startDate,
			department,
			street,
			city,
			states,
			zipCode,
		};
		employees.push(employee);
		localStorage.setItem('employees', JSON.stringify(employees));
		setModalIsOpen(true);
	};

	return (
		<div className="w-full h-full mx-auto">
			<Header />

			<div className="flex justify-center items-center min-h-screen bg-green-50">
				<div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl m-10">
					<h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
						Create an Employee
					</h2>
					<form onSubmit={handleSubmit(saveEmployee)} className="space-y-6">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label
									htmlFor="firstName"
									className="block text-sm font-medium text-gray-700 mb-1"
								>
									First Name
								</label>
								<Input
									id="firstName"
									{...register('firstName')}
									value={firstName}
									onChange={e => setFirstName(e.target.value)}
									className="w-full"
								/>
								{errors.firstName && (
									<p className="mt-1 text-sm text-red-600">
										{errors.firstName.message}
									</p>
								)}
							</div>
							<div>
								<label
									htmlFor="lastName"
									className="block text-sm font-medium text-gray-700 mb-1"
								>
									Last Name
								</label>
								<Input
									id="lastName"
									{...register('lastName')}
									value={lastName}
									onChange={e => setLastName(e.target.value)}
									className="w-full"
								/>
								{errors.lastName && (
									<p className="mt-1 text-sm text-red-600">
										{errors.lastName.message}
									</p>
								)}
							</div>
						</div>

						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Email
							</label>
							<Input
								id="email"
								type="email"
								{...register('email')}
								className="w-full"
							/>
							{errors.email && (
								<p className="mt-1 text-sm text-red-600">
									{errors.email.message}
								</p>
							)}
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label
									htmlFor="dateOfBirth"
									className="block text-sm font-medium text-gray-700 mb-1"
								>
									Date of Birth
								</label>
								<Input
									id="dateOfBirth"
									type="date"
									{...register('dateOfBirth')}
									value={dateOfBirth}
									onChange={e => setDateOfBirth(e.target.value)}
									className="w-full"
								/>
								{errors.dateOfBirth && (
									<p className="mt-1 text-sm text-red-600">
										{errors.dateOfBirth.message}
									</p>
								)}
							</div>
							<div>
								<label
									htmlFor="startDate"
									className="block text-sm font-medium text-gray-700 mb-1"
								>
									Start Date
								</label>
								<Input
									id="startDate"
									type="date"
									{...register('startDate')}
									value={startDate}
									onChange={e => setStartDate(e.target.value)}
									className="w-full"
								/>
								{errors.startDate && (
									<p className="mt-1 text-sm text-red-600">
										{errors.startDate.message}
									</p>
								)}
							</div>
						</div>

						<div className="bg-green-100 p-6 rounded-lg">
							<h3 className="text-lg font-semibold mb-4 text-primary">
								Address
							</h3>
							<div className="space-y-4">
								<div>
									<label
										htmlFor="street"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Street
									</label>
									<Input
										id="street"
										{...register('street')}
										value={street}
										onChange={e => setStreet(e.target.value)}
										className="w-full"
									/>
									{errors.street && (
										<p className="mt-1 text-sm text-red-600">
											{errors.street.message}
										</p>
									)}
								</div>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<label
											htmlFor="city"
											className="block text-sm font-medium text-gray-700 mb-1"
										>
											City
										</label>
										<Input
											id="city"
											{...register('city')}
											value={city}
											onChange={e => setCity(e.target.value)}
											className="w-full"
										/>
										{errors.city && (
											<p className="mt-1 text-sm text-red-600">
												{errors.city.message}
											</p>
										)}
									</div>
									<div>
										<label
											htmlFor="state"
											className="block text-sm font-medium text-gray-700 mb-1"
										>
											State
										</label>
										<select
											id="state"
											{...register('state')}
											className="w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary-foreground"
											value={state}
											onChange={e => setState(e.target.value)}
										>
											{states.map(state => (
												<option
													key={state.abbreviation}
													value={state.abbreviation}
												>
													{state.name}
												</option>
											))}
										</select>
										{errors.state && (
											<p className="mt-1 text-sm text-red-600">
												{errors.state.message}
											</p>
										)}
									</div>
								</div>
								<div>
									<label
										htmlFor="zipCode"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Zip Code
									</label>
									<Input
										id="zipCode"
										{...register('zipCode')}
										value={zipCode}
										onChange={e => setZipCode(e.target.value)}
										className="w-full"
									/>
									{errors.zipCode && (
										<p className="mt-1 text-sm text-red-600">
											{errors.zipCode.message}
										</p>
									)}
								</div>
							</div>
						</div>

						<div>
							<label
								htmlFor="department"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Department
							</label>
							<select
								id="department"
								{...register('department')}
								className="w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary-foreground"
								value={department}
								onChange={e => setDepartment(e.target.value)}
							>
								<option>Sales</option>
								<option>Marketing</option>
								<option>Engineering</option>
								<option>Human Resources</option>
								<option>Legal</option>
							</select>
							{errors.department && (
								<p className="mt-1 text-sm text-red-600">
									{errors.department.message}
								</p>
							)}
						</div>

						<button
							type="submit"
							className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
						>
							Save
						</button>
					</form>
				</div>
			</div>
			<DropDown
				items={departmentNames}
				name={department}
				onSelect={setDepartment}
			/>
			{/* <DropDown items={stateNames} name={states} onSelect={setState} /> */}

			{modalIsOpen && (
				<Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />
			)}
			<Footer />
		</div>
	);
};

export default CreateEmployee;
