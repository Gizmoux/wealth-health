'use client';

import React, { createContext, useState, useContext } from 'react';

type Employee = {
	firstName: string;
	lastName: string;
	dateOfBirth: string;
	startDate: string;
	department: string;
	street: string;
	city: string;
	state: string;
	zipCode: string;
};

type EmployeeContextType = {
	employees: Employee[];
	addEmployee: (employee: Employee) => void;
};

const EmployeeContext = createContext<EmployeeContextType | undefined>(
	undefined
);

export const EmployeeProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [employees, setEmployees] = useState<Employee[]>([]);

	const addEmployee = (employee: Employee) => {
		setEmployees(prevEmployees => [...prevEmployees, employee]);
	};

	return (
		<EmployeeContext.Provider value={{ employees, addEmployee }}>
			{children}
		</EmployeeContext.Provider>
	);
};

export const useEmployees = () => {
	const context = useContext(EmployeeContext);
	if (context === undefined) {
		throw new Error('useEmployees must be used within an EmployeeProvider');
	}
	return context;
};
