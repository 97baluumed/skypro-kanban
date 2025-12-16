import styled from 'styled-components';
import { pulse } from '../../styles/GlobalStyles';

// Основной стиль скелета
export const Skeleton = styled.div`
  background: #eaeef6;
  border-radius: 8px;
  animation: ${pulse} 1.6s infinite ease-in-out;
`;

// Обёртка
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

// Тема — короткая полоска
export const LoadingTheme = styled.div`
  width: 70px;
  height: 20px;
  ${Skeleton}
`;

// Кнопка "три точки"
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
  gap: 8px;
`;

// Заголовок — длинная полоска
export const LoadingTitle = styled.div`
  width: 100%;
  height: 14px;
  max-width: 150px;
  ${Skeleton}
`;

// Подзаголовок — короткая полоска (имитация обрезанного текста)
export const LoadingSubtitle = styled.div`
  width: 100%;
  height: 10px;
  max-width: 120px;
  ${Skeleton}
`;

// Дата
export const LoadingDate = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
`;

export const LoadingDateIcon = styled.div`
  width: 13px;
  height: 13px;
  ${Skeleton}
`;

export const LoadingDateText = styled.div`
  width: 60px;
  height: 10px;
  ${Skeleton}
`;
