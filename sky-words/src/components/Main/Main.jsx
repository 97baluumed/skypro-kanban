import { Column } from "../Column/Column";
import { Card } from "../Card/Card";
import { useState, useEffect } from 'react';
import { cardsData } from "../../data";
import { LoadingCard } from "../LoadingCard/LoadingCard";

const groupedCards = cardsData.reduce((acc, card) => {
    const status = card.status;
    if (!acc[status]) acc[status] = [];
    acc[status].push(card);
    return acc;
}, {});

const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
];

export function Main() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="main">
            <div className="container">
                <div className="main__block">
                    <div className="main__content">
                        {loading ? (
                            statuses.map((status) => {
                                const count = groupedCards[status]?.length || 0;
                                return (
                                    <div className="main__column" key={status}>
                                        <div className="column__title">
                                            <p>{status}</p>
                                        </div>
                                        <div className="cards">
                                            {Array.from({ length: count }).map((_, index) => (
                                                <LoadingCard key={index} />
                                            ))}
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            statuses.map((status) => (
                                <Column key={status} title={status}>
                                    {groupedCards[status]?.map((card) => (
                                        <Card
                                            key={card.id}
                                            theme={
                                                card.topic === "Web Design"
                                                    ? "orange"
                                                    : card.topic === "Research"
                                                        ? "green"
                                                        : "purple"
                                            }
                                            title={card.title}
                                            date={card.date}
                                        />
                                    ))}
                                </Column>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}