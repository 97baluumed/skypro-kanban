import { useState, useContext } from 'react';
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
import { AuthContext } from '../context/AuthContext';

export default function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const { updateUserInfo } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setError('');

    //     if (!email || !password) {
    //         setError('Заполните все поля');
    //         return;
    //     }

    //     try {
    //         const data = await signIn({
    //             login: email,
    //             password,
    //         });

    //         if (!data.user || !data.user.token) {
    //             console.error('❌ Токен не найден:', data);
    //             throw new Error('Не удалось авторизоваться. Проверьте логин и пароль.');
    //         }

    //         updateUserInfo({
    //             token: data.user.token,
    //             user: data.user
    //         });

    //         navigate('/', { replace: true });
    //     } catch (err) {
    //         console.error('❌ Ошибка входа:', err);
    //         setError(err.message);
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLoading) return;
        setIsLoading(true);
        setError('');

        if (!email || !password) {
            setError('Заполните все поля');
            setIsLoading(false);
            return;
        }

        try {
            const data = await signIn({ login: email, password });
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
                <Title>Вход</Title>
                <Form onSubmit={handleSubmit}>
                    {error && <ErrorMessage $visible={!!error}>{error}</ErrorMessage>}
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
                    <Button type="submit" disabled={isLoading}>
                        {isLoading ? 'Вход...' : 'Войти'}
                    </Button>
                </Form>
                <LinkText>
                    Нужно зарегистрироваться? <Link href="/register">Регистрируйтесь здесь</Link>
                </LinkText>
            </Modal>
        </AuthWrapper>
    );
}