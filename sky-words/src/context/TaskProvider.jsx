import { useContext, useState, useEffect, useCallback } from 'react';
import { fetchTasks, addTask, editTask, deleteTask } from '../services/api';
import { AuthContext } from './AuthContext';
import TaskContext from './TaskContext';

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { user } = useContext(AuthContext);

    const loadTasks = useCallback(async () => {
        setLoading(true);
        setError('');
        try {
            const data = await fetchTasks({ token: user?.token });
            setTasks(data);
        } catch (err) {
            setError(err.message);
            console.error('Ошибка загрузки задач:', err);
        } finally {
            setLoading(false);
        }
    }, [user]);

    const addNewTask = async (taskData) => {
        try {
            const newTasks = await addTask({ token: user?.token, task: taskData });
            setTasks(newTasks);
            return newTasks;
        } catch (err) {
            setError(err.message);
            console.error('Ошибка добавления задачи:', err);
            throw err;
        }
    };

    const updateTask = async (id, taskData) => {
        try {
            const newTasks = await editTask({ token: user?.token, id, task: taskData });
            setTasks(newTasks);
            return newTasks;
        } catch (err) {
            setError(err.message);
            console.error('Ошибка редактирования задачи:', err);
            throw err;
        }
    };

    const removeTask = async (id) => {
        try {
            const newTasks = await deleteTask({ token: user?.token, id });
            setTasks(newTasks);
        } catch (err) {
            setError(err.message);
            console.error('Ошибка удаления задачи:', err);
            throw err;
        }
    };

    useEffect(() => {
        if (user) {
            loadTasks();
        }
    }, [user, loadTasks]);

    return (
        <TaskContext.Provider value={{
            tasks,
            loading,
            error,
            loadTasks,
            addNewTask,
            updateTask,
            removeTask
        }}>
            {children}
        </TaskContext.Provider>
    );
};
