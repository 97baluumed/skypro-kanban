import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Main } from '../components/Main/Main';
import { Header } from '../components/Header/Header';
import { fetchTasks } from '../services/api';

export default function MainPage() {
    const [loading, setLoading] = useState(true);
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState('');
    const location = useLocation()

    const loadTasks = async () => {
        setLoading(true);
        const token = localStorage.getItem('token');
        if (!token) {
            setError('Требуется авторизация');
            setLoading(false);
            return;
        }
        try {
            const data = await fetchTasks({ token });
            console.log('📋 Все задачи:', data);
            setTasks(data);
        } catch (err) {
            console.error('Ошибка загрузки задач:', err.message);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (location.pathname === '/') {
            loadTasks();
        }
    }, [location.pathname]);

    return (
        <>
            <Header />
            <Main loading={loading} error={error} tasks={tasks} refresh={loadTasks} />
            <Outlet />
        </>
    );
}
