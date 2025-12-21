import styled from 'styled-components';

export const ExitWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;
export const ExitBlock = styled.div`
  display: flex;
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  background: #fff;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0 4px 67px -12px rgba(0, 0, 0, 0.13);
  text-align: center;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h2`
  width: 190px;
  height: 30px;
  color: var(--Black / 90, rgba(0, 0, 0, 1));
  font-family: Roboto;
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -2%;
  text-align: center;
`;
export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  gap: 7px;
`;
export const Button = styled.button`
  width: 153px;
  height: 30px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &.yes {
    background: #565eef;
    color: #fff;
    border: none;
      &:hover {
      background: #4a51c8;
  }
  }

  &.no {
    background: transparent;
    color: #565eef;
    border: 0.7px solid #565eef;
      &:hover {
      background: #4a51c8;
      color: #fff;
  }
  }
`;