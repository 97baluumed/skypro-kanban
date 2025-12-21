import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import MainPage from './MainPage';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import ExitPage from './ExitPage';
import NotFoundPage from './NotFoundPage';
import CardPage from './CardPage';
import PrivateRoute from './PrivateRoute';
import NewCardPage from './NewCardPage';

function AppRoutes() {
    // При обновлении страницы сбрасывает isAuth до false
    // Если isAuth = false то выбрасывает на форму авторизации
    // Возможно пригодится в будущем для API

    // const [isAuth, setIsAuth] = useState(false);

    // const handleLogin = () => setIsAuth(true);
    // const handleLogout = () => setIsAuth(false);


    // Сохраняет isAuth при обновлении
    // Для выхода из аккаунта приходится вручную выходить из акк
    // Не совсем совпадает с тем, что было в теории 

    const [isAuth, setIsAuth] = useState(() => {
        const saved = localStorage.getItem('isAuth');
        return saved === 'true';
    });

    const handleLogin = () => {
        setIsAuth(true);
        localStorage.setItem('isAuth', 'true');
    };

    const handleLogout = () => {
        setIsAuth(false);
        localStorage.removeItem('isAuth');
    };

    return (
        <Routes>
            <Route path="/login" element={<SignInPage onLogin={handleLogin} />} />
            <Route path="/register" element={<SignUpPage onLogin={handleLogin} />} />
            <Route element={<PrivateRoute isAuth={isAuth} />}>
                <Route path="/" element={<MainPage />}>
                    <Route path="card/:id" element={<CardPage />} />
                    <Route path="card/add" element={<NewCardPage />} />
                    <Route path="/exit" element={<ExitPage onConfirm={handleLogout} />} />
                </Route>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default AppRoutes;