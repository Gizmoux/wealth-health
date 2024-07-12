// pages/index.tsx
'use client';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { states } from './data/states';

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

const Home: React.FC = () => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});

	const onSubmit: SubmitHandler<FormData> = data => {
		console.log(data);
		// Sauvegarder les données ou effectuer d'autres actions
	};

	return (
		<div className="w-full h-full mx-auto p-4">
			<h1>HRnet</h1>
			<Link href="/pages/employee-list">View Current Employees</Link>
			<h2>Create Employee</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label htmlFor="firstName">First Name</label>
					<Input id="firstName" {...register('firstName')} />
					{errors.firstName && (
						<p className="text-red-400">{errors.firstName.message}</p>
					)}
				</div>
				<div>
					<label htmlFor="lastName">Last Name</label>
					<Input id="lastName" {...register('lastName')} />
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
					<Input id="dateOfBirth" type="date" {...register('dateOfBirth')} />
					{errors.dateOfBirth && (
						<p className="text-red-400">{errors.dateOfBirth.message}</p>
					)}
				</div>
				<div>
					<label htmlFor="startDate">Start Date</label>
					<Input id="startDate" type="date" {...register('startDate')} />
					{errors.startDate && (
						<p className="text-red-400">{errors.startDate.message}</p>
					)}
				</div>

				<div className="bg-blue-500 p-4 m4 gap-4 rounded-xl flex flex-col">
					<h3>Address</h3>
					<div className=" items-center gap-2">
						<label htmlFor="street">Street</label>
						<Input id="street" {...register('street')} />
						{errors.street && (
							<p className="text-red-400">{errors.street.message}</p>
						)}
					</div>
					<div className=" items-center gap-2">
						<label htmlFor="city">City</label>
						<Input id="city" {...register('city')} />
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
						<Input id="zipCode" {...register('zipCode')} />
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
		</div>
	);
};

export default Home;
