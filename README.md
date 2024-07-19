This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Employee Management System

This is a Next.js application with TypeScript and Tailwind CSS, using the ShadCN UI library. It allows users to create and view employee records.

## Features

- Create new employee records
- View a list of all employees
- Sortable and searchable employee data table
- Responsive design

## Pages

1. Create Employee (`app/pages/create-employee/page.tsx`)

   - Form to input employee details
   - Validation using Zod
   - Modal confirmation on successful employee creation

2. Employee List (`app/pages/employee-list/page.tsx`)
   - Displays all employees in a sortable table
   - Search functionality
   - Pagination

## Components

- Header: Navigation component
- Footer: Footer component
- Modal: Confirmation modal for employee creation

## Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- ShadCN UI
- React Hook Form
- Zod (for form validation)
- react-data-table-component (for the employee list table)

## Setup and Installation

1. Clone the repository
2. Install dependencies:
   - npm install
3. Run the development server:
   - npm run dev
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. Navigate to the "Create Employee" page to add a new employee
2. Fill out the form and submit
3. View the confirmation modal
4. Navigate to the "Employee List" page to view all employees
5. Use the search bar to filter employees
6. Click on column headers to sort the table

## Data Storage

Employee data is stored in the browser's localStorage.
