'use client';
import { Input } from '@/components/ui/input';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import DataTable from 'react-data-table-component';
import 'tailwindcss/tailwind.css';
import { ArrowUpDown } from 'lucide-react';
import PaginationComp from '@/app/components/PaginationComp';

const EmployeeList: React.FC = () => {
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		const storedEmployees = JSON.parse(
			localStorage.getItem('employees') || '[]'
		);
		setEmployees(storedEmployees);
	}, []);

	const columns = [
		{ name: 'First Name', selector: (row: any) => row.firstName },
		{ name: 'Last Name', selector: (row: any) => row.lastName },
		{ name: 'Start Date', selector: (row: any) => row.startDate },
		{ name: 'Department', selector: (row: any) => row.department },
		{ name: 'Date of Birth', selector: (row: any) => row.dateOfBirth },
		{ name: 'Street', selector: (row: any) => row.street },
		{ name: 'City', selector: (row: any) => row.city },
		{ name: 'State', selector: (row: any) => row.state },
		{ name: 'Zip Code', selector: (row: any) => row.zipCode },
	];

	return (
		<div className="container mx-auto p-4">
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
			<DataTable columns={columns} data={employees} />
			<ArrowUpDown className="ml-2 h-4 w-4" />

			<PaginationComp />
			<Link href="/">Home</Link>
		</div>
	);
};

export default EmployeeList;
