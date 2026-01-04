import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../services/auth';
import {
    AuthWrapper,
    Modal,
    Title,
    Form,
    InputWrapper,
    Input,
    Button,
    ErrorMessage,
    LinkTextUp,
    LinkUp
} from './components/AuthPage/AuthPage.styled';

export default function SignUpPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!name || !email || !password) {
            setError('Заполните все поля');
            return;
        }

        try {
            const data = await signUp({
                name,
                login: email,
                password,
            });

            // localStorage.setItem('token', data.token);
            localStorage.setItem('userInfo', JSON.stringify({
                token: data.user.token,
                user: data.user
            }));

            navigate('/', { replace: true });
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <AuthWrapper>
            <Modal>
                <Title>Регистрация</Title>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <Form onSubmit={handleSubmit}>
                    <InputWrapper>
                        <Input
                            type="text"
                            placeholder="Имя"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            autoFocus
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Input
                            type="email"
                            placeholder="Эл. почта"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Input
                            type="password"
                            placeholder="Пароль"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </InputWrapper>
                    <Button type="submit">Зарегистрироваться</Button>
                </Form>
                <LinkTextUp>
                    Уже есть аккаунт? <LinkUp href="/login">Войдите здесь</LinkUp>
                </LinkTextUp>
            </Modal>
        </AuthWrapper>
    );
}