import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
                <p className="text-lg mb-6">
                    Sorry, the page you're looking for doesn't exist or has been moved.
                </p>
                <Link
                    to="/" // Update href to to="/" for React Router
                    className="px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded hover:bg-blue-700 transition"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
