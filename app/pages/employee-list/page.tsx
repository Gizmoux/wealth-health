'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import DataTable from 'react-data-table-component';
import 'tailwindcss/tailwind.css';

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
			<h1>Current Employees</h1>
			<DataTable columns={columns} data={employees} />
			<Link href="/">Home</Link>
		</div>
	);
};

export default EmployeeList;
