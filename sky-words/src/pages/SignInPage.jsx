import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignIn } from './modal/SignIn';

export default function SignInPage({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            onLogin();
            navigate('/', { replace: true });
        }
    };

    return (
        <SignIn
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            onSubmit={handleSubmit}
        />
    );
}
