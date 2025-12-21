import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const HeaderBar = styled.div`
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
const LogoLink = styled(RouterLink)`
  display: flex;
  align-items: center;
  height: 30px;
`;
const LogoImage = styled.img`
  height: 100%;
  width: auto;
  filter: brightness(1);
`;
const PageWrapper = styled.div`
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
const Title = styled.h1`
  font-size: 72px;
  font-weight: 900;
  margin: 0;
  color: #000;
`;
const Text = styled.p`
  font-size: 18px;
  color: #000;
  margin: 20px 0;
`;
const HomeLink = styled(RouterLink)`
  color: #565EEF;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export default function NotFoundPage() {
  return (
    <>
      <HeaderBar>
        <LogoLink to="/">
          <LogoImage src="./images/logo_dark.png" alt="logo" />
        </LogoLink>
      </HeaderBar>

      <PageWrapper>
        <Title>404</Title>
        <Text>Страница не найдена</Text>
        <HomeLink to="/">На главную</HomeLink>
      </PageWrapper>
    </>
  );
}