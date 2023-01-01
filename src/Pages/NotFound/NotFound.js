import React from 'react';
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
            {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
            <div className="bg-white min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
                <div className="max-w-max  mx-auto">
                    <main className="sm:flex">
                        <p className="text-4xl font-extrabold text-blue-600 sm:text-5xl">403</p>
                        <div className="sm:ml-6">
                            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page Forbidden</h1>
                                <p className="mt-5 text-base text-gray-500">The page you are trying to access has restricted access. If you feel this is a mistake contact your admin.</p>
                            </div>
                            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                                <Link
                                    to="/home"
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Go back home
                                </Link>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Contact support
                                </Link>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default NotFound;