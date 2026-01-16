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
            const response = await addTask({ token: user?.token, task: taskData });

            if (!response || typeof response !== 'object') {
                throw new Error('Сервер вернул некорректные данные');
            }

            const newTask = {
                ...response,
                _id: response._id || response.id || Date.now().toString(),
                status: taskData.status || 'Без статуса'
            };

            setTasks((prev) => [...prev, newTask]);
            return newTask;
        } catch (err) {
            setError(err.message);
            console.error('Ошибка добавления задачи:', err);
            throw err;
        }
    };

    const updateTask = async (id, taskData) => {
        try {
            const response = await editTask({ token: user?.token, id, task: taskData });
            const updatedTask = response.task;

            setTasks((prev) => prev.map((task) => (task._id === id ? updatedTask : task)));
            return updatedTask;
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    const removeTask = async (id) => {
        try {
            await deleteTask({ token: user?.token, id });
            setTasks((prev) => prev.filter((task) => task._id !== id));
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

