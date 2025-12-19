import styled from 'styled-components';

export const ColumnWrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
`;

export const ColumnTitle = styled.div`
  padding: 0 10px;
  margin-bottom: 15px;
`;

export const ColumnTitleText = styled.p`
  color: #94a6be;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
`;

export const CardsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
