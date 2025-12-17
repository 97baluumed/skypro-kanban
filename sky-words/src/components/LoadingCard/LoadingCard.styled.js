import styled from 'styled-components';
import { pulse } from '../../styles/GlobalStyles';

export const Skeleton = styled.div`
  background: #eaeef6;
  border-radius: 8px;
  animation: ${pulse} 1.6s infinite ease-in-out;
`;
export const LoadingWrapper = styled.div`
  width: 220px;
  height: 130px;
  border-radius: 10px;
  border: 0.7px solid #e0e0e0;
  background: #fff;
  box-shadow: 0 10px 39px 0 rgba(26, 56, 101, 0.07);
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  padding-left: 13px;
  padding-right: 13px;
  gap: 12px;
`;
export const LoadingGroup = styled.div`
display: flex;
flex-direction: column;
gap: 36px;
`;
export const LoadingText = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;
export const LoadingButton = styled.div`
  width: 18px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  cursor: pointer;

  div {
    width: 4px;
    height: 4px;
    background: #94a6be;
    border-radius: 50%;
  }
`;
export const LoadingContent = styled.div`
width: 113px;
height: 13px;
background: linear-gradient(90.00deg, 
rgba(193.26, 204.72, 220, 1),
rgba(233.02, 237.53, 246.56, 1) 46%,
rgba(193, 205, 220, 1) 97%);
`;
export const LoadingTitle = styled.div`
margin: 0px;
width: 82px;
height: 20px;
border-radius: 18px;
background: linear-gradient(90.00deg,
 rgba(193.26, 204.72, 220, 1),
 rgba(233.02, 237.53, 246.56, 1) 46%,
 rgba(193, 205, 220, 1) 97%);
`;
export const LoadingDate = styled.div`
width: 58px;
height: 13px;
background: linear-gradient(90.00deg, 
rgba(193.26, 204.72, 220, 1),
rgba(233.02, 237.53, 246.56, 1) 46%,
rgba(193, 205, 220, 1) 97%);
`;