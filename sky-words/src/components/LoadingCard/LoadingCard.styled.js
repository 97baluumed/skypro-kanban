import styled from 'styled-components';

// Единый стиль для всех скелетов
export const Skeleton = styled.div`
  background: #eaeef6;
  border-radius: 8px;
  animation: pulse 1.6s infinite ease-in-out;
`;

// Обёртка — как у реальной карточки
export const LoadingItem = styled.div`
  padding: 5px;
`;

export const LoadingWrapper = styled.div`
  width: 274px;
  min-height: 112px;
  border-radius: 10px;
  border: 0.7px solid #e0e0e0;
  background: #fff;
  box-shadow: 0 10px 39px 0 rgba(26, 56, 101, 0.07);
  display: flex;
  flex-direction: column;
  padding: 14px;
  gap: 12px;
`;

export const LoadingGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Тема — серая полоска
export const LoadingTheme = styled.div`
  width: 70px;
  height: 20px;
  ${Skeleton}
`;

// Кнопка с тремя полосками
export const LoadingButton = styled.div`
  width: 18px;
  display: flex;
  flex-direction: column;
  gap: 3px;

  div {
    width: 100%;
    height: 2px;
    ${Skeleton}
  }
`;

export const LoadingContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// Заголовок — длинная полоска
export const LoadingTitle = styled.div`
  width: 150px;
  height: 18px;
  ${Skeleton}
`;

export const LoadingDate = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

// Иконка календаря
export const LoadingDateIcon = styled.div`
  width: 13px;
  height: 13px;
  ${Skeleton}
`;

// Текст даты
export const LoadingDateText = styled.div`
  width: 60px;
  height: 10px;
  ${Skeleton}
`;
