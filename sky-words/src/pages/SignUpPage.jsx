import { useState, useContext } from 'react';
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
import { AuthContext } from '../context/AuthContext';

export default function SignUpPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { updateUserInfo } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLoading) return;
        setIsLoading(true);
        setError('');

        if (!name || !email || !password) {
            setError('Заполните все поля');
            setIsLoading(false);
            return;
        }

        try {
            const data = await signUp({ name, login: email, password });
            updateUserInfo({ token: data.user.token, user: data.user });
            navigate('/', { replace: true });
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthWrapper>
            <Modal>
                <Title>Регистрация</Title>
                <Form onSubmit={handleSubmit}>
                    <ErrorMessage $visible={!!error}>{error}</ErrorMessage>
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
                    <Button type="submit" disabled={isLoading}>
                        {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
                    </Button>
                </Form>
                <LinkTextUp>
                    Уже есть аккаунт? <LinkUp href="/login">Войдите здесь</LinkUp>
                </LinkTextUp>
            </Modal>
        </AuthWrapper>
    );
}
