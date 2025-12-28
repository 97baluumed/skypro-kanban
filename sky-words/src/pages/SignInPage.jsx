import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../services/auth';
import {
    AuthWrapper,
    Modal,
    Title,
    Form,
    InputWrapper,
    Input,
    Button,
    ErrorMessage,
    LinkText,
    Link
} from './components/AuthPage/AuthPage.styled';

export default function SignInPage({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError('Заполните все поля');
            return;
        }

        try {
            const data = await signIn({
                login: email,
                password,
            });

            if (!data.user || !data.user.token) {
                console.error('❌ Токен не найден:', data);
                throw new Error('Не удалось авторизоваться. Проверьте логин и пароль.');
            }

            localStorage.setItem('token', data.user.token);
            localStorage.setItem('user', JSON.stringify(data.user));

            onLogin();
            navigate('/', { replace: true });
        } catch (err) {
            console.error('❌ Ошибка входа:', err);
            setError(err.message);
        }
    };

    return (
        <AuthWrapper>
            <Modal>
                <Title>Вход</Title>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <Form onSubmit={handleSubmit}>
                    <InputWrapper>
                        <Input
                            type="email"
                            placeholder="Эл. почта"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoFocus
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
                    <Button type="submit">Войти</Button>
                </Form>
                <LinkText>
                    Нужно зарегистрироваться? <Link href="/register">Регистрируйтесь здесь</Link>
                </LinkText>
            </Modal>
        </AuthWrapper>
    );
}