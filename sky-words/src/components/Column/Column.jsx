import { ColumnWrapper, ColumnTitle, ColumnTitleText, CardsList } from './Column.styled';

export function Column({ title, children }) {
    return (
        <ColumnWrapper>
            <ColumnTitle>
                <ColumnTitleText>{title}</ColumnTitleText>
            </ColumnTitle>
            <CardsList>{children}</CardsList>
        </ColumnWrapper>
    );
}