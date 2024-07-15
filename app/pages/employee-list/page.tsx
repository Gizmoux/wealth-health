'use client';
import { Input } from '@/components/ui/input';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import 'tailwindcss/tailwind.css';
import Header from '@/app/components/Header';

const EmployeeList: React.FC = () => {
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		const storedEmployees = JSON.parse(
			localStorage.getItem('employees') || '[]'
		);
		setEmployees(storedEmployees);
	}, []);

	const columns = [
		{
			name: 'First Name',
			selector: (row: any) => row.firstName,
			sortable: true,
		},
		{ name: 'Last Name', selector: (row: any) => row.lastName, sortable: true },
		{
			name: 'Start Date',
			selector: (row: any) => row.startDate,
			sortable: true,
		},
		{
			name: 'Department',
			selector: (row: any) => row.department,
			sortable: true,
		},
		{
			name: 'Date of Birth',
			selector: (row: any) => row.dateOfBirth,
			sortable: true,
		},
		{ name: 'Street', selector: (row: any) => row.street, sortable: true },
		{ name: 'City', selector: (row: any) => row.city, sortable: true },
		{ name: 'State', selector: (row: any) => row.state, sortable: true },
		{ name: 'Zip Code', selector: (row: any) => row.zipCode, sortable: true },
	];

	return (
		<div className="mx-auto p-2">
			<Header />
			<h1 className="bg-primary rounded-md w-48 p-2 m-2 hover:bg-primary-foreground">
				Current Employees
			</h1>
			<div className="flex justify-between items-center">
				<h2>
					Show{'  '}
					<select>
						<option>10</option>
						<option>25</option>
						<option>50</option>
						<option>100</option>
					</select>
					entries
				</h2>
				<div className="flex items-center gap-2">
					<label htmlFor="">Search</label>
					<Input />
				</div>
			</div>
			<DataTable columns={columns} data={employees} pagination />
		</div>
	);
};

export default EmployeeList;
