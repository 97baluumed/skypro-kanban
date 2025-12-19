import { useState, useEffect } from 'react';
import { Column } from '../Column/Column';
import { Card } from '../Card/Card';
import { LoadingCard } from '../LoadingCard/LoadingCard';
import { cardsData } from '../../data';
import { MainWrapper, MainContent } from './Main.styled';

const groupedCards = cardsData.reduce((acc, card) => {
    const status = card.status;
    if (!acc[status]) acc[status] = [];
    acc[status].push(card);
    return acc;
}, {});

const statuses = [
    'Без статуса',
    'Нужно сделать',
    'В работе',
    'Тестирование',
    'Готово',
];

export function Main() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <MainWrapper>
            <MainContent>
                {loading
                    ? statuses.map((status) => {
                        const count = groupedCards[status]?.length || 0;
                        return (
                            <Column key={status} title={status}>
                                {Array.from({ length: count }).map((_, index) => (
                                    <LoadingCard key={index} />
                                ))}
                            </Column>
                        );
                    })
                    : statuses.map((status) => (
                        <Column key={status} title={status}>
                            {groupedCards[status]?.map((card) => (
                                <Card
                                    key={card.id}
                                    theme={card.topic === 'Web Design' ? 'orange' : card.topic === 'Research' ? 'green' : 'purple'}
                                    title={card.title}
                                    date={card.date}
                                />
                            ))}
                        </Column>
                    ))}
            </MainContent>
        </MainWrapper>
    );
}
