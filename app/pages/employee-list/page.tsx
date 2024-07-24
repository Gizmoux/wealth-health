'use client';
import { Input } from '@/components/ui/input';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const EmployeeList: React.FC = () => {
	const [employees, setEmployees] = useState([]);
	const [search, setSearch] = useState('');
	const [filteredResults, setFilteredResults] = useState<any[]>([]);

	const filterEmployees = (searchValue: string, employees: any[]) => {
		const filteredEmployees = employees.filter(employee =>
			Object.values(employee).some(value =>
				String(value).toLowerCase().includes(searchValue.toLowerCase())
			)
		);
		console.log('filteredEmployees', filteredEmployees);

		return filteredEmployees;
	};

	const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		const searchValue = event.target.value;
		setSearch(searchValue);
	};
	useEffect(() => {
		setFilteredResults(filterEmployees(search, employees));
	}, [search, employees]);
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
		<div className="flex flex-col min-h-screen ">
			<Header />
			<main className="flex-grow p-2">
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
						<Input onChange={handleChangeSearch} value={search} />
					</div>
				</div>
				<DataTable columns={columns} data={filteredResults} pagination />
			</main>

			<Footer />
		</div>
	);
};

export default EmployeeList;
