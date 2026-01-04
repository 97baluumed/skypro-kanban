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

export function Main({ loading, error, tasks = [] }) {
    const groupedTasks = tasks.reduce((acc, task) => {
        const status = task.status || 'Без статуса';
        if (!acc[status]) acc[status] = [];
        acc[status].push(task);
        return acc;
    }, {});

    if (error) {
        return (
            <div style={{ color: 'red', padding: '20px', textAlign: 'center' }}>
                {error}
            </div>
        );
    }

    return (
        <MainWrapper>
            <MainContent>
                {loading
                    ?
                    statuses.map((status) => {
                        const count = groupedTasks[status]?.length || 1;
                        return (
                            <Column key={status} title={status}>
                                {Array.from({ length: count }).map((_, index) => (
                                    <LoadingCard key={index} />
                                ))}
                            </Column>
                        );
                    })
                    :
                    statuses.map((status) => (
                        <Column key={status} title={status}>
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
                            {!groupedTasks[status] && !loading && <p>Нет задач</p>}
                        </Column>
                    ))}
            </MainContent>
        </MainWrapper>
    );
}