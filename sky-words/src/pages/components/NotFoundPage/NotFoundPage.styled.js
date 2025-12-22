import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const HeaderBar = styled.div`
  width: 100%;
  height: 60px;
  background: #000;
  display: flex;
  align-items: center;
  padding: 0 40px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  border-radius: 14px;
`;
export const LogoLink = styled(RouterLink)`
  display: flex;
  align-items: center;
  height: 30px;
`;
export const LogoImage = styled.img`
  height: 100%;
  width: auto;
  filter: brightness(1);
`;
export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  background-color: #f1f1f1;
  color: #000;
  padding: 80px 20px 20px;
  box-sizing: border-box;
`;
export const Title = styled.h1`
  font-size: 72px;
  font-weight: 900;
  margin: 0;
  color: #000;
`;
export const Text = styled.p`
  font-size: 18px;
  color: #000;
  margin: 20px 0;
`;
export const HomeLink = styled(RouterLink)`
  color: #565EEF;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;