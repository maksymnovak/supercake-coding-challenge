Supercake Coding Challenge Web Application Documentation
Overview
This is a demo Next.js application built with TypeScript, designed to fetch and display customer and pet data. The application includes search functionality, filter options, and a responsive user interface. The solution was developed by Maksym Novak.
Features

Search customers by ID, name, email, or phone number.
Filter search results by pet type (e.g., Any Animal, Dogs, Cats, Birds, Hamsters).
Responsive design with a clean and intuitive UI.
Data is fetched from the API endpoint http://localhost:3000/api/customers.

Prerequisites

Node.js (version 14.x or later)
npm or yarn
A local API server running at http://localhost:3000/api/customers

Installation

Clone the repository to your local machine.git clone <repository-url>

Navigate to the project directory.cd SUPERCARKE-CODING-CHALLENGE

Install the dependencies.
npm install

Ensure the API server is running at http://localhost:3000/api/customers.

Running the Application

Start the development server.
npm run dev

Open your browser and navigate to http://localhost:3000.

Usage

Use the search bar to enter a customer ID, name, email, or phone number.
Select a pet type from the dropdown menu to filter results.
Click "Apply Filters" to apply the selected filters.
Click "Reset" to clear all filters and search criteria.

Project Structure
supercake-coding-challenge/
├── .next/ # Next.js build output
├── node_modules/ # Dependency files
├── src/ # Source code
│ ├── api/ # API routes
│ ├── assets/ # Static assets
│ ├── components/ # React components
│ │ ├── button.tsx # Button component
│ │ ├── customer.tsx # Customer component
│ │ ├── filter-item.tsx # Filter item component
│ │ ├── filters-dropdown.tsx # Filters dropdown component
│ │ └── search-input.tsx # Search input component
│ ├── types/ # TypeScript type definitions
│ │ ├── customer.ts # Customer type definitions
│ │ └── pets.ts # Pets type definitions
│ ├── utils/ # Utility functions
│ │ └── capitalize.ts # Capitalize utility function
│ ├── globals.css # Global CSS styles
│ ├── layout.tsx # Layout component
│ ├── page.tsx # Main page component
│ └── page.tsx # Page component with TSX
├── .gitignore # Git ignore file
├── .prettierrc.json # Prettier configuration
├── eslint.config.mjs # ESLint configuration
├── next-env.d.ts # Next.js environment types
├── next.config.ts # Next.js configuration
├── package-lock.json # Lock file for dependencies
├── package.json # Project dependencies and scripts
├── postcss.config.mjs # PostCSS configuration
├── README.md # This documentation file
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json # TypeScript configuration

API Integration
The application fetches customer data from http://localhost:3000/api/customers. Ensure the API endpoint is active and returns data in the expected format.
