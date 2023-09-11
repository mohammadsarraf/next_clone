import React, { useState } from 'react';
import { signInUser, signOutUser } from './UserContext'; // Import the signInUser and signOutUser functions

const Login = ({ user }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async () => {
        const result = await signInUser(username, password);
        if (result.success) {
            // User logged in successfully
            setError('');
        } else {
            // Login failed, display an error message
            setError(result.error);
        }
    };

    const handleLogout = async () => {
        const result = await signOutUser();
        if (result.success) {
            // User logged out successfully
        } else {
            // Logout failed, display an error message
            setError(result.error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            {error && <p className="text-red-500">{error}</p>}
            <div className="text-center border border-red-500 p-5 rounded-md">
                {user ? (
                    // User is logged in, display logout button
                    <div>
                        <h1 className="text-3xl font-semibold">Welcome, {user.displayName}!</h1>
                        <p className="mt-2">Email: {user.email}</p>
                        <button
                            onClick={handleLogout}
                            className="mt-2 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-full"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    // User is not logged in, display login form
                    <div>
                        <h1 className="text-3xl font-semibold mb-10">Login</h1>
                        <label className="flex mb-1">Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={handleUsernameChange}
                            className="border rounded-md px-2 py-1 w-full bg-transparent"
                        />
                        <div className="mt-4">
                            <label className="flex mb-1">Password:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                                className="border rounded-md px-2 py-1 w-full bg-transparent"
                            />
                        </div>
                        <button
                            onClick={handleLogin}
                            className="mt-4 bg-gray-800 hover:bg-blue-700 text-white py-2 px-4 rounded-full"
                        >
                            Login
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
