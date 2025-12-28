import axios from 'axios';

const API_URL = 'https://wedev-api.sky.pro/api/kanban/';

// Получить все задачи
export async function fetchTasks({ token }) {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
        return response.data.tasks;
    } catch (error) {
        throw new Error(error.response?.data?.error || error.message);
    }
}

// Получить задачу по id
export async function fetchTaskById({ token, id }) {
    try {
        const response = await axios.get(`${API_URL}${id}`, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
        return response.data.task;
    } catch (error) {
        throw new Error(error.response?.data?.error || error.message);
    }
}

// Добавить задачу
export async function addTask({ token, task }) {
    try {
        const response = await axios.post(API_URL, task, {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'text/html'
            },
        });
        return response.data;
    } catch (error) {
        console.error('❌ Ошибка при добавлении задачи:', {
            status: error.response?.status,
            data: error.response?.data,
            message: error.message,
        });
        throw new Error(error.response?.data?.error || error.message || 'Не удалось создать задачу');
    }
}

// Изменить задачу
export async function editTask({ token, id, task }) {
    try {
        const response = await axios.put(`${API_URL}${id}`, task, {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'text/html'
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.error || error.message);
    }
}

// Удалить задачу
export async function deleteTask({ token, id }) {
    try {
        const response = await axios.delete(`${API_URL}${id}`, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.error || error.message);
    }
}