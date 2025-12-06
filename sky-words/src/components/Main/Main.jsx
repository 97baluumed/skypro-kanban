import { Column } from "../Column/Column";
import { Card } from "../Card/Card";

import { cardsData } from "../../data";

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
    return (
        <main className="main">
            <div className="container">
                <div className="main__block">
                    <div className="main__content">
                        {statuses.map((status) => (
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
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
