import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignUp } from './modal/SignUp';

export default function SignUpPage({ onLogin }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email && password) {
            onLogin();
            navigate('/', { replace: true });
        }
    };

    return (
        <SignUp
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            onSubmit={handleSubmit}
        />
    );
} 