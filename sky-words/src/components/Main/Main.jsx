import { useContext } from 'react';
import TaskContext from '../../context/TaskContext';
import { Column } from '../Column/Column';
import { Card } from '../Card/Card';
import { LoadingCard } from '../LoadingCard/LoadingCard';
import { MainWrapper, MainContent } from './Main.styled';

const statuses = [
    'Без статуса',
    'Нужно сделать',
    'В работе',
    'Тестирование',
    'Готово',
];

export function Main() {
    const { tasks, loading, error } = useContext(TaskContext);

    const groupedTasks = tasks.reduce((acc, task) => {
        const status = task.status || 'Без статуса';
        if (!acc[status]) acc[status] = [];
        acc[status].push(task);
        return acc;
    }, {});

    if (error) {
        return (
            <div style={{ color: 'red', padding: '20px', textAlign: 'center' }}>
                Ошибка: {error}
            </div>
        );
    }

    return (
        <MainWrapper>
            <MainContent>
                {loading
                    ? statuses.map((status) => (
                        <div key={status}>
                            <Column title={status}>
                                {Array.from({ length: groupedTasks[status]?.length || 1 }).map((_, index) => (
                                    <LoadingCard key={index} />
                                ))}
                            </Column>
                        </div>
                    ))
                    : statuses.map((status) => (
                        <div key={status}>
                            <Column title={status}>
                                {groupedTasks[status]?.map((task) => (
                                    <Card
                                        key={task._id}
                                        id={task._id}
                                        title={task.title}
                                        date={new Date(task.date).toLocaleDateString('ru-RU')}
                                        theme={
                                            task.topic === 'Web Design' ? 'orange' :
                                                task.topic === 'Research' ? 'green' : 'purple'
                                        }
                                    />
                                ))}
                                {(!groupedTasks[status] || groupedTasks[status].length === 0) && !loading && (
                                    <p key={`${status}-empty`}>Нет задач</p>
                                )}
                            </Column>
                        </div>
                    ))}
            </MainContent>
        </MainWrapper>
    );
}
