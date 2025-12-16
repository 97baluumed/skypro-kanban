import styled from 'styled-components';

export const CardItem = styled.div`
  padding: 5px;
  animation: card-animation 500ms linear;
`;

export const CardWrapper = styled.div`
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

export const CardGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardTheme = styled.div`
  width: fit-content;
  padding: 4px 8px;
  border-radius: 6px;
  background: ${(props) => {
    if (props.theme === 'orange') return '#ffe4c2';
    if (props.theme === 'green') return '#b4fdd1';
    if (props.theme === 'purple') return '#e9d4ff';
    return '#94a6be';
  }};
  color: ${(props) => {
    if (props.theme === 'orange') return '#ff6d00';
    if (props.theme === 'green') return '#06b16e';
    if (props.theme === 'purple') return '#9a48f1';
    return '#fff';
  }};
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
`;

export const CardButton = styled.div`
  width: 18px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  cursor: pointer;

  div {
    width: 100%;
    height: 2px;
    background: #94a6be;
    border-radius: 1px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000;
  margin: 0;
  padding: 0;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #94a6be;
  font-size: 10px;
  line-height: 13px;
  letter-spacing: 0.2px;
`;
