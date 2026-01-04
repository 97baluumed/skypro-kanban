import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { Main } from '../components/Main/Main';
import { Header } from '../components/Header/Header';
import TaskContext from '../context/TaskContext';

export default function MainPage() {
    //console.log('User in MainPage:', user);
    const { loadTasks } = useContext(TaskContext);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            loadTasks();
        }
    }, [location.pathname, loadTasks]);

    return (
        <>
            <Header />
            <Main />
            <Outlet />
        </>
    );
}