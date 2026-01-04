import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import MainPage from './MainPage';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import ExitPage from './components/ExitPage/ExitPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import CardPage from './components/CardPage/CardPage';
import PrivateRoute from './PrivateRoute';
import NewCardPage from './components/NewCardPage/NewCardPage';

function AppRoutes() {
    const [isAuth, setIsAuth] = useState(() => {
        return !!localStorage.getItem('token');
    });

    const handleLogin = () => {
        setIsAuth(true);
    };

    const handleLogout = () => {
        setIsAuth(false);
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