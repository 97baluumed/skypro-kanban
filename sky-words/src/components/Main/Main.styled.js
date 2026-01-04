import styled from 'styled-components';

export const MainWrapper = styled.main`
  width: 100%;
  background-color: #eaeef6;
  padding-top: 40px;
  padding-left: 135px;
  padding-right: 129px;
  min-height: calc(100vh - 60px);
  box-sizing: border-box;
`;

export const MainContent = styled.div`
  display: flex;
  gap: 19px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const LoadingState = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  gap: 20px;
`;

export const LoadingText = styled.p`
  color: #94a6be;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  opacity: 0.8;
  animation: fade 1.6s infinite alternate ease-in-out;
`;