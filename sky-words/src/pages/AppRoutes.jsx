import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import ExitPage from './components/ExitPage/ExitPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import CardPage from './components/CardPage/CardPage';
import PrivateRoute from './PrivateRoute';
import NewCardPage from './components/NewCardPage/NewCardPage';
import { AuthContext } from '../context/AuthContext';

function AppRoutes() {

    return (
        <Routes>
            <Route path="/login" element={<SignInPage />} />
            <Route path="/register" element={<SignUpPage />} />
            <Route element={<PrivateRoute />}>
                <Route path="/" element={<MainPage />}>
                    <Route path="card/:id" element={<CardPage />} />
                    <Route path="card/add" element={<NewCardPage />} />
                    <Route path="/exit" element={<ExitPage />} />
                </Route>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default AppRoutes;