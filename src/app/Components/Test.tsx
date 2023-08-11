'use client';

function Test(props) {
    return (
        <div>
            {props.user ? (
                <div>
                    <h1>Welcome, {props.user.displayName}!</h1>
                    <p>Welcome! <br /> {props.user.email}</p>
                    <div>
                        <label>Display Name:</label>
                        <input
                            type='text'
                            value={props.displayName}
                            onChange={(e) => props.onDisplayNameChange(e.target.value)}
                        />
                    </div>
                    <button onClick={props.onUpdateDisplayName}>Update Display Name</button>
                    <button onClick={props.onLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <h1>Login</h1>
                    <label>Username:</label>
                    <input
                        type='text'
                        value={props.username}
                        onChange={(e) => props.onUsernameChange(e.target.value)}
                    />
                    <div>
                        <label>Password:</label>
                        <input
                            type='password'
                            value={props.password}
                            onChange={(e) => props.onPasswordChange(e.target.value)}
                        />
                    </div>
                    <button onClick={props.onSubmit}>Login</button>
                </div>
            )}
        </div>
    );
}

export default Test;