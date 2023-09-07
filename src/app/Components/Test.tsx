import React from 'react';

const Test = (props) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            {props.user ? (
                <div className="text-center">
                    <h1 className="text-3xl font-semibold">Welcome, {props.user.displayName}!</h1>
                    <p className="mt-2">Welcome! <br /> {props.user.email}</p>
                    <div className="mt-4">
                        <label className="block">Display Name:</label>
                        <input
                            type='text'
                            value={props.username}
                            onChange={(e) => props.onUsernameChange(e.target.value)}
                            className="border rounded-md px-2 py-1 w-full"
                        />
                    </div>
                    <button
                        onClick={props.onUpdateDisplayName}
                        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full"
                    >
                        Update Display Name
                    </button>
                    <button
                        onClick={props.onLogout}
                        className="mt-2 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-full"
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <div className="text-center border border-red-500 p-5 rounded-md">
                    <h1 className="text-3xl font-semibold mb-10">Login</h1>
                    <label className="flex mb-1">Username:</label>
                    <input
                        type='text'
                        value={props.username}
                        onChange={(e) => props.onUsernameChange(e.target.value)}
                        className="border rounded-md px-2 py-1 w-full bg-transparent"
                    />
                    <div className="mt-4">
                        <label className="flex mb-1">Password:</label>
                        <input
                            type='password'
                            value={props.password}
                            onChange={(e) => props.onPasswordChange(e.target.value)}
                            className="border rounded-md px-2 py-1 w-full bg-transparent"
                        />
                    </div>
                    <button
                        onClick={props.onSubmit}
                        className="mt-4 bg-gray-800 hover:bg-blue-700 text-white py-2 px-4 rounded-full"
                    >
                        Login
                    </button>
                </div>
            )}
        </div>
    );
}

export default Test;
