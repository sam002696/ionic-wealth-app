import React from 'react';
import { useHistory } from "react-router-dom";

const NotFound = () => {
    let history = useHistory();
    const handleHome = () => {
        history.push("/home");
    }
    const handleLogin = () => {
        history.push("/login");
    }
    return (
        <div>
            <div className="bg-gradient-to-r from-sky-300 to-blue-200">
                <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
                        <div className="border-t border-gray-200 text-center pt-8">
                            <h1 className="text-9xl font-bold text-sky-400">403</h1>
                            <h1 className="text-6xl font-medium py-8">You are not permitted to see this.</h1>
                            <p className="text-2xl pb-8 px-12 font-medium">The page you are trying to access has restricted access. If you feel this is a mistake contact your admin.</p>
                            <button onClick={handleHome} className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
                                HOME
                            </button>
                            <button onClick={handleLogin} className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-semibold px-6 py-3 rounded-md">
                                LOGIN
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;