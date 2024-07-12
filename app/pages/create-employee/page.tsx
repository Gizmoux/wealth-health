// pages/index.tsx
'use client';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { states } from '../../data/states';
import Modal from 'react-modal';
import Header from '@/app/components/Header';

const schema = z.object({
	firstName: z.string().min(1, { message: 'First name is required' }),
	lastName: z.string().min(1, { message: 'Last name is required' }),
	email: z.string().email({ message: 'Invalid email address' }),
	dateOfBirth: z.date(),
	startDate: z.date(),
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
	const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
	const [startDate, setStartDate] = useState<Date | null>(null);
	const [street, setStreet] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [zipCode, setZipCode] = useState('');
	const [department, setDepartment] = useState('Sales');
	const [modalIsOpen, setModalIsOpen] = useState(false);
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
			dateOfBirth: dateOfBirth?.toLocaleDateString(),
			startDate: startDate?.toLocaleDateString(),
			department,
			street,
			city,
			state,
			zipCode,
		};
		employees.push(employee);
		localStorage.setItem('employees', JSON.stringify(employees));
		setModalIsOpen(true);
	};

	return (
		<div className="w-full h-full mx-auto p-4">
			<Header />
			<h2 className="bg-primary-foreground w-48 m-2 p-2 rounded-md">
				Create an Employee
			</h2>
			<form onSubmit={event => event.preventDefault()}>
				<div>
					<label htmlFor="firstName">First Name</label>
					<Input
						id="firstName"
						{...register('firstName')}
						value={firstName}
						onChange={e => setFirstName(e.target.value)}
					/>
					{errors.firstName && (
						<p className="text-red-400">{errors.firstName.message}</p>
					)}
				</div>
				<div>
					<label htmlFor="lastName">Last Name</label>
					<Input
						id="lastName"
						{...register('lastName')}
						value={lastName}
						onChange={e => setLastName(e.target.value)}
					/>
					{errors.lastName && (
						<p className="text-red-400">{errors.lastName.message}</p>
					)}
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<Input id="email" type="email" {...register('email')} />
					{errors.email && (
						<p className="text-red-400">{errors.email.message}</p>
					)}
				</div>
				<div>
					<label htmlFor="dateOfBirth">Date of Birth</label>

					<Input
						id="dateOfBirth"
						type="date"
						{...register('dateOfBirth')}
						value={dateOfBirth}
						onChange={e => setStreet(e.target.value)}
					/>
					{errors.dateOfBirth && (
						<p className="text-red-400">{errors.dateOfBirth.message}</p>
					)}
				</div>
				<div>
					<label htmlFor="startDate">Start Date</label>
					<Input
						id="startDate"
						type="date"
						{...register('startDate')}
						value={startDate}
						onChange={e => setStreet(e.target.value)}
					/>
					{errors.startDate && (
						<p className="text-red-400">{errors.startDate.message}</p>
					)}
				</div>

				<div className="bg-blue-500 p-4 m4 gap-4 rounded-xl flex flex-col">
					<h3>Address</h3>
					<div className=" items-center gap-2">
						<label htmlFor="street">Street</label>
						<Input
							id="street"
							{...register('street')}
							value={street}
							onChange={e => setStreet(e.target.value)}
						/>
						{errors.street && (
							<p className="text-red-400">{errors.street.message}</p>
						)}
					</div>
					<div className=" items-center gap-2">
						<label htmlFor="city">City</label>
						<Input
							id="city"
							{...register('city')}
							value={city}
							onChange={e => setCity(e.target.value)}
						/>
						{errors.city && (
							<p className="text-red-400">{errors.city.message}</p>
						)}
					</div>
					<div className="flex flex-col">
						<label htmlFor="state">State</label>
						<select
							id="state"
							{...register('state')}
							className="w-1/2 bg-primary h-10 rounded-md hover:bg-primary-foreground"
							value={state}
							onChange={e => setState(e.target.value)}
						>
							{states.map(state => (
								<option key={state.abbreviation} value={state.abbreviation}>
									{state.name}
								</option>
							))}
						</select>
						{errors.state && (
							<p className="text-red-400">{errors.state.message}</p>
						)}
					</div>
					<div className=" items-center gap-2">
						<label htmlFor="zipCode">Zip Code</label>
						<Input
							id="zipCode"
							{...register('zipCode')}
							value={zipCode}
							onChange={e => setZipCode(e.target.value)}
						/>
						{errors.zipCode && (
							<p className="text-red-400">{errors.zipCode.message}</p>
						)}
					</div>
				</div>
				<div>
					<label htmlFor="department" className="flex flex-col">
						Department
					</label>

					<select
						id="department"
						{...register('department')}
						className="w-1/2 bg-primary h-10 rounded-md hover:bg-primary-foreground"
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
						<p className="text-red-400">{errors.department.message}</p>
					)}
				</div>
				<button type="submit" onClick={saveEmployee}>
					Save
				</button>
			</form>
			<Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
				<div>Employee Created!</div>
				<button onClick={() => setModalIsOpen(false)}>Close</button>
			</Modal>
		</div>
	);
};

export default CreateEmployee;
