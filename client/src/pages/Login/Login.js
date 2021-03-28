import React from 'react'
import { useHistory } from 'react-router';
import { useUserProvider } from '../../App';

export default function Login() {
    const { user, setUser } = useUserProvider();
    const history = useHistory();

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (!user) return;
        history.push('/');
    }

    return (
        <div className="login">
            <div className="login__header">Login</div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter Your Username"
                        value={user}
                        onChange={ev => setUser(ev.target.value)}
                        onKeyUp={ev => ev.key === 'Enter' ? handleSubmit() : null}
                    />
                    <button type="submit" disabled={!user}>Enter</button>
                </form>
            </div>
        </div>
    )
}
